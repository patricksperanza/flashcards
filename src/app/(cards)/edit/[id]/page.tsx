"use client";
import { useCardsContext } from "@/context/CardsContext";
import { useState } from "react";
import SubmitChangesBtn from "@/components/SubmitChangesBtn";

const Edit = ({ params }: { params: { id: string } }) => {
  const { questionList, setQuestionList } = useCardsContext();

  const [currentQuestion, setCurrentQuestion] = useState(
    questionList.find((item) => item._id === params.id),
  );

  return (
    currentQuestion !== undefined && (
      <div className="flex flex-col items-center">
        {/* Card */}
        <div>
          <label htmlFor="question" className="mt-8 block">
            Question:
          </label>
          <textarea
            id="question"
            className="h-[100px] w-[300px] rounded border border-slate-100 bg-slate-900 px-2 py-1"
            value={currentQuestion.question}
            onChange={(e) =>
              setCurrentQuestion((prev) => {
                if (prev !== undefined) {
                  return {
                    ...prev,
                    question: e.target.value,
                  };
                }
              })
            }
          />
        </div>

        <div>
          <label htmlFor="answer" className="mt-8 block">
            Answer:
          </label>
          <textarea
            id="answer"
            className="h-[300px] w-[300px] rounded border border-slate-100 bg-slate-900 px-2 py-1"
            value={currentQuestion.answer}
            onChange={(e) =>
              setCurrentQuestion((prev) => {
                if (prev !== undefined) {
                  return {
                    ...prev,
                    answer: e.target.value,
                  };
                }
              })
            }
          />
        </div>
        <SubmitChangesBtn currentQuestion={currentQuestion} />
      </div>
    )
  );
};

export default Edit;
