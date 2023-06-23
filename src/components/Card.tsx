"use client"
import NewQuestionBtn from "./NewQuestionBtn"
import { useState } from "react"
import { questionList } from "@/data/questionData"

const Card = () => {
  const [currentQuestion, setCurrentQuestion] = useState({
    id: 0,
    question: "Welcome",
    answer: "Click New Question to Begin",
  })
  const [displayAnswer, setDisplayAnswer] = useState(true)

  const getNewQuestion = () => {
    if (!displayAnswer) return
    let newQuestion =
      questionList[Math.floor(Math.random() * questionList.length)]

    if (newQuestion.id === currentQuestion.id) {
      getNewQuestion()
      return
    }

    setCurrentQuestion(newQuestion)
    setDisplayAnswer(false)
  }

  return (
    <div className="flex justify-center">
      {/* Card */}
      <div className="w-[300px] min-h-[460px] bg-slate-900 mt-[20px] rounded border border-slate-100 flex flex-col items-center px-2 text-sm">
        {/* Question Section */}
        <div className="flex items-center text-slate-200 py-5 text-center">
          {currentQuestion.question}
        </div>

        {/* Divider */}
        <div className="border-b border-yellow-500 w-[96%] h-0"></div>

        {/* Answer Section */}
        <div className="w-full h-full relative">
          <div
            className="text-center mt-16 h-full"
            onClick={() => setDisplayAnswer(true)}
          >
            {displayAnswer ? currentQuestion.answer : ""}
          </div>

          <NewQuestionBtn getNewQuestion={getNewQuestion} />
        </div>
      </div>
    </div>
  )
}

export default Card
