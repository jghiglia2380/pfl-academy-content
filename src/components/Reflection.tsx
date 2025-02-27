import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import supabase from "../utils/supabase";
import useUserStore from "../stores/user";

export function Reflection({ reflection, onSubmit }) {
  const [response, setResponse] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [reflectionData, setReflectionData] = useState<any>(null); // Stores fetched reflection
  const [aiResponse, setAiResponse] = useState(""); // Stores AI response
  const [loadingAi, setLoadingAi] = useState(false); // Loading state for AI response
  const user = useUserStore((state) => state.user);

  // Function to handle response changes
  const handleResponseChange = (value: string) => {
    setResponse(value);
    setWordCount(value.trim().split(/\s+/).filter(Boolean).length);
  };

  // Fetch the reflection from Supabase
  const fetchReflection = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from("reflections")
        .select("*")
        .eq("user_id", user.id)
        .eq("reflection_id", reflection.id)
        .maybeSingle();

      if (error) {
        setResponse("");
        setWordCount(0);
        setAiResponse("");
        setIsSubmitted(false);
        console.error("Error fetching reflections:", error.message);
        return;
      }
      if (data) {
        setReflectionData(data); // Store fetched reflection
        setResponse(data.answer || "");
        setWordCount(
          data.answer?.trim().split(/\s+/).filter(Boolean).length || 0
        );
        setAiResponse(data.ai_response || ""); // Store AI response
        setIsSubmitted(true);
      } else {
        setReflectionData(null); // Reset reflection data
        setResponse("");
        setWordCount(0);
        setAiResponse("");
        setIsSubmitted(false);
      }
    } catch (error) {
      console.error("Error fetching reflections:", error);
      toast.error("Failed to fetch reflections. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  // Function to generate AI response using OpenAI
  const generateAiResponse = async (userInput: string) => {
    try {
      setLoadingAi(true);
      const aiPrompt = `
      This is the context for the user reflection: ${reflection.prompt}.
      Analyze the following user reflection and provide constructive feedback: "${userInput}".
      Provide a short and concise response that is helpful and encouraging. Maximum 100 words.
      `;

      const { data, error } = await supabase.functions.invoke("openai", {
        body: JSON.stringify({ prompt: aiPrompt }),
        method: "POST",
      });

      if (error) {
        throw new Error(`HTTP error! Status: ${error}`);
      }

      setLoadingAi(false);
      return data.message || "AI response could not be generated.";
    } catch (error) {
      setLoadingAi(false);
      console.error("Error generating AI response:", error);
      toast.error("Failed to generate AI response. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return "Failed to generate AI response.";
    }
  };

  // Function to save or update the reflection
  const saveReflection = async () => {
    if (!user) {
      toast.error("Please log in to save your reflection.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    if (wordCount < 15) {
      toast.warning("Please write at least 15 words before submitting.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    try {
      const aiGeneratedResponse = await generateAiResponse(response); // Get AI-generated response

      if (reflectionData) {
        // Update existing reflection
        const { error } = await supabase
          .from("reflections")
          .update({
            answer: response,
            ai_response: aiGeneratedResponse, // Save AI response
          })
          .eq("id", reflectionData.id);

        if (error) {
          console.error("Error updating reflection:", error.message);
          toast.error("Failed to update reflection. Please try again.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.success("Reflection updated successfully.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setReflectionData((prev) => ({
            ...prev,
            answer: response,
            ai_response: aiGeneratedResponse,
          })); // Update state
          setAiResponse(aiGeneratedResponse); // Update AI response in state
        }
      } else {
        // Insert new reflection
        const { data, error } = await supabase
          .from("reflections")
          .insert([
            {
              user_id: user.id,
              reflection_id: reflection.id,
              answer: response,
              ai_response: aiGeneratedResponse,
            },
          ])
          .select()
          .single(); // Select inserted data

        if (error) {
          console.error("Error inserting reflection:", error.message);
          toast.error("Failed to save reflection. Please try again.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.success("Reflection saved successfully.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          setReflectionData(data); // Store new reflection
          setAiResponse(aiGeneratedResponse); // Store AI response
        }
      }
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error saving reflection:", error.message);
    }
  };

  const handleRevise = () => {
    setIsSubmitted(false);
  };

  useEffect(() => {
    if (user?.id) fetchReflection();
  }, [user?.id, reflection]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Reflection</h2>

      <div className="mb-6">
        <p className="text-gray-700 mb-2">{reflection.prompt}</p>
        {reflection.context && (
          <p className="text-sm text-gray-500 mb-4">{reflection.context}</p>
        )}
      </div>

      <div className="mb-4">
        <textarea
          value={response}
          onChange={(e) => handleResponseChange(e.target.value)}
          disabled={isSubmitted}
          className="w-full h-32 p-3 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-50 disabled:text-gray-500"
          placeholder="Type your reflection here..."
        />

        <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
          <span>
            Words: {wordCount}
            {reflection.minWords && ` (minimum: ${reflection.minWords})`}
            {reflection.maxWords && ` (maximum: ${reflection.maxWords})`}
          </span>
          {reflection.keyTerms && (
            <span>Key terms to consider: {reflection.keyTerms.join(", ")}</span>
          )}
        </div>
      </div>

      {isSubmitted ? (
        <div>
          <div className="flex w-full mb-4">
            <button
              onClick={handleRevise}
              className="bg-indigo-600 w-full text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              Revise Response
            </button>
          </div>

          {/* AI Response Box */}
          {loadingAi ? (
            <div className="bg-gray-100 p-4 rounded-lg border border-gray-300 mt-4">
              <p className="text-gray-700">Generating AI feedback...</p>
            </div>
          ) : (
            aiResponse && (
              <div className="bg-gray-100 p-4 rounded-lg border border-gray-300 mt-4">
                <h4 className="text-lg font-bold text-gray-900">AI Feedback</h4>
                <p className="text-gray-700 mt-2">{aiResponse}</p>
              </div>
            )
          )}
        </div>
      ) : (
        <button
          onClick={saveReflection}
          disabled={loadingAi}
          className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 disabled:bg-gray-300 disabled:text-gray-500"
        >
          {loadingAi ? "Generating AI response..." : "Submit Reflection"}
        </button>
      )}
    </div>
  );
}
