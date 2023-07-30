"use client";
import { useState, useEffect } from "react";
import { useCardsContext } from "@/context/CardsContext";
import { useSession } from "next-auth/react";
import NewQuestionBtn from "./NewQuestionBtn";

const Card = () => {
  const { data: session } = useSession();
  const { questionList } = useCardsContext();
  const [currentQuestion, setCurrentQuestion] = useState({
    _id: "",
    question: "Welcome",
    answer:
      'Sign in to create your own cards or click "New Question" to continue as a guest.',
  });
  const [displayAnswer, setDisplayAnswer] = useState(true);

  // If the user is logged in, change the displayed text on the card
  useEffect(() => {
    if (session && currentQuestion._id === "") {
      setCurrentQuestion((prev) => ({
        ...prev,
        answer: "Click New Question to begin",
      }));
    }
  }, [session]);

  const getNewQuestion = () => {
    if (!displayAnswer) return;
    if (questionList.length > 0) {
      let newQuestion =
        questionList[Math.floor(Math.random() * questionList.length)];

      if (newQuestion._id === currentQuestion._id) {
        getNewQuestion();
        return;
      }

      setCurrentQuestion(newQuestion);
      setDisplayAnswer(false);
    }
  };

  return (
    <div className="flex justify-center">
      {/* Card */}
      <div className="mt-[20px] flex min-h-[500px] w-[300px] flex-col items-center rounded border border-slate-100 bg-slate-900 px-2 text-sm">
        {/* Question Section */}
        <div className="flex items-center py-5 text-center text-slate-200">
          {currentQuestion.question}
        </div>

        {/* Divider */}
        <div className="h-0 w-[96%] border-b border-yellow-500"></div>

        {/* Answer Section */}
        <div className="relative h-full w-full">
          <div
            className="mt-16 h-full text-center"
            onClick={() => setDisplayAnswer(true)}
          >
            {displayAnswer ? currentQuestion.answer : ""}
          </div>

          <NewQuestionBtn getNewQuestion={getNewQuestion} />
        </div>
      </div>
    </div>
  );
};

export default Card;
