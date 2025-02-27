import { toast } from "react-toastify";
import supabase from "../utils/supabase";

/**
 * Generate an AI response for user reflections.
 * @param {string} userInput - The reflection text input by the user.
 * @param {string} prompt - The reflection prompt for context.
 * @returns {Promise<string>} AI-generated feedback.
 */
export const generateAiResponse = async (
  userInput: string,
  prompt: string
): Promise<string> => {
  try {
    const aiPrompt = `
      This is the context for the user reflection: ${prompt}.
      Analyze the following user reflection and provide constructive feedback: "${userInput}".
      If the reflection is incomplete or unclear, ask clarifying questions to guide the user.
      Provide a short and concise response that is helpful and encouraging. Also tell the user what they did well or not so well and how they can improve. Maximum 100 words.
    `;

    const { data, error } = await supabase.functions.invoke("openai", {
      body: JSON.stringify({ prompt: aiPrompt }),
      method: "POST",
    });

    if (error) {
      throw new Error(`HTTP error! Status: ${error}`);
    }

    return data.message || "AI response could not be generated.";
  } catch (error) {
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
