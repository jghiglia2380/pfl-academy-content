import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import { CheckCircle, XCircle, ArrowRight } from "lucide-react";
import type { Quiz as QuizType } from "../types";
import supabase from "../utils/supabase";
import useUserStore from "../stores/user";

interface QuizProps {
  quiz: QuizType;
  onComplete: (score: number) => void;
}

export function Quiz({ quiz, onComplete }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, string>
  >({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const user = useUserStore((state) => state.user);
  const [quizResult, setQuizResult] = useState<any>(null);
  const [score, setScore] = useState(0);

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const totalQuestions = quiz.questions.length;

  const isAnswerCorrect = (questionId: string, selectedOptionId: string) => {
    const question = quiz.questions.find((q) => q.id === questionId);
    return question?.correctOptionId === selectedOptionId;
  };

  useEffect(() => {
    setQuizCompleted(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowFeedback(false);
    setScore(0);
  }, [quiz]);

  const handleOptionSelect = (optionId: string) => {
    if (showFeedback) return;

    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId,
    }));
  };

  const calculateScore = () => {
    let correct = 0;
    quiz.questions.forEach((question) => {
      if (isAnswerCorrect(question.id, selectedAnswers[question.id])) {
        correct++;
      }
    });

    return Math.round((correct / totalQuestions) * 100);
  };

  const fetchQuiz = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from("quizzes")
        .select("*")
        .eq("user_id", user.id)
        .eq("quiz_id", quiz.id)
        .maybeSingle();

      if (error) {
        setQuizResult(null);
        setScore(0);
        console.error("Error fetching quiz:", error.message);
        return;
      }
      if (data) {
        setQuizResult(data);
        setScore(data.score);
        setQuizCompleted(true);
      } else {
        setQuizResult(null);
        setScore(0);
      }
    } catch (error) {
      console.error("Error fetching quiz:", error);
      toast.error("Failed to fetch quiz. Please try again.", {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

  useEffect(() => {
    if (quiz.id && user?.id) {
      console.log("user with id", user);
      fetchQuiz();
    }
  }, [user?.id, quiz.id]);

  const saveQuiz = async (finalScore: number) => {
    try {
      if (quizResult) {
        const { error } = await supabase
          .from("quizzes")
          .update({ score: finalScore })
          .eq("id", quizResult.id);

        if (error) {
          console.error("Error updating quiz:", error.message);
          toast.error("Failed to update quiz. Please try again.", {
            position: "top-right",
            autoClose: 5000,
          });
        } else {
          toast.success("Quiz updated successfully.", {
            position: "top-right",
            autoClose: 5000,
          });
          setQuizResult((prev) => ({ ...prev, score: finalScore }));
        }
      } else {
        const { data, error } = await supabase
          .from("quizzes")
          .insert([{ user_id: user.id, quiz_id: quiz.id, score: finalScore }])
          .select()
          .single();

        if (error) {
          console.error("Error inserting quiz:", error.message);
          toast.error("Failed to save quiz. Please try again.", {
            position: "top-right",
            autoClose: 5000,
          });
        } else {
          toast.success("Quiz saved successfully.", {
            position: "top-right",
            autoClose: 5000,
          });

          setQuizResult(data);
        }
      }
    } catch (error) {
      console.error("Error saving quiz:", error);
    }
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswers[currentQuestion.id]) return;
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    setShowFeedback(false);
    if (currentQuestionIndex + 1 < totalQuestions) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handleCompleteQuiz = () => {
    if (!user) {
      toast.error("Please log in to save your quiz progress.", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }
    const finalScore = calculateScore();
    setScore(finalScore);
    setQuizCompleted(true);
    saveQuiz(finalScore);
    onComplete(finalScore);
  };

  if (quizCompleted) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Quiz Complete!
        </h3>
        <div className="mb-6">
          <p className="text-lg mb-2">Your score:</p>
          <p className="text-4xl font-bold text-indigo-600">{score}%</p>
        </div>
        <button
          onClick={() => {
            setCurrentQuestionIndex(0);
            setSelectedAnswers({});
            setShowFeedback(false);
            setQuizCompleted(false);
          }}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
        >
          Retake Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-900">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </h3>
          <span className="text-sm text-gray-500">
            Progress:{" "}
            {Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
            style={{
              width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`,
            }}
          />
        </div>
      </div>

      <div className="mb-6">
        <p className="text-lg text-gray-900 mb-4">{currentQuestion.text}</p>
        <div className="space-y-3">
          {currentQuestion.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleOptionSelect(option.id)}
              disabled={showFeedback}
              className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                selectedAnswers[currentQuestion.id] === option.id
                  ? showFeedback
                    ? isAnswerCorrect(currentQuestion.id, option.id)
                      ? "border-green-500 bg-green-50"
                      : "border-red-500 bg-red-50"
                    : "border-indigo-500 bg-indigo-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center">
                <span className="flex-grow">{option.text}</span>
                {showFeedback &&
                  selectedAnswers[currentQuestion.id] === option.id &&
                  (isAnswerCorrect(currentQuestion.id, option.id) ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500" />
                  ))}
              </div>
            </button>
          ))}
        </div>
      </div>

      {showFeedback && (
        <div
          className={`p-4 rounded-lg mb-6 ${
            isAnswerCorrect(
              currentQuestion.id,
              selectedAnswers[currentQuestion.id]
            )
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          <p className="font-medium mb-2">
            {isAnswerCorrect(
              currentQuestion.id,
              selectedAnswers[currentQuestion.id]
            )
              ? "Correct!"
              : "Not quite right"}
          </p>
          <p>{currentQuestion.explanation}</p>
        </div>
      )}

      <div className="flex justify-end">
        {!showFeedback ? (
          <button
            onClick={handleSubmitAnswer}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
          >
            Submit Answer
          </button>
        ) : (
          <button
            onClick={
              currentQuestionIndex + 1 === totalQuestions
                ? handleCompleteQuiz
                : handleNextQuestion
            }
            className="bg-indigo-600 text-white inline-flex items-center px-6 py-2 rounded-lg hover:bg-indigo-700"
          >
            {currentQuestionIndex + 1 === totalQuestions ? (
              "Complete Quiz"
            ) : (
              <>
                Next Question
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
