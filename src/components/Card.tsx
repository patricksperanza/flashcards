"use client"
import NewQuestionBtn from "./NewQuestionBtn"
import { useState, useEffect } from "react"
import { useCardsContext } from "@/context/CardsContext"
import { useSession } from "next-auth/react"

const Card = () => {
  const { data: session } = useSession()
  const { questionList } = useCardsContext()
  const [currentQuestion, setCurrentQuestion] = useState({
    _id: "0",
    question: "Welcome",
    answer: "Sign in to create and access cards",
  })
  const [displayAnswer, setDisplayAnswer] = useState(true)

  useEffect(() => {
    if (session && currentQuestion._id === "0") {
      setCurrentQuestion((prev) => ({
        ...prev,
        answer: "Click New Question to begin",
      }))
    }
  }, [session])

  const getNewQuestion = () => {
    if (!displayAnswer) return
    if (questionList.length > 0) {
      let newQuestion =
        questionList[Math.floor(Math.random() * questionList.length)]

      if (newQuestion._id === currentQuestion._id) {
        getNewQuestion()
        return
      }

      setCurrentQuestion(newQuestion)
      setDisplayAnswer(false)
    }
  }

  return (
    <div className="flex justify-center">
      {/* Card */}
      <div className="w-[300px] min-h-[500px] bg-slate-900 mt-[20px] rounded border border-slate-100 flex flex-col items-center px-2 text-sm">
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
