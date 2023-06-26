"use client"

import SubmitBtn from "@/components/SubmitBtn"
import { useState } from "react"

const Add = () => {
  const [newCardData, setNewCardData] = useState({
    question: "",
    answer: "",
  })

  return (
    <div className="flex flex-col items-center">
      {/* Card */}
      <div>
        <label htmlFor="question" className="block mt-8">
          Question:
        </label>
        <textarea
          id="question"
          className="bg-slate-900 w-[300px] h-[100px] px-2 py-1 rounded border border-slate-100"
          value={newCardData.question}
          onChange={(e) =>
            setNewCardData((prev) => ({
              ...prev,
              question: e.target.value,
            }))
          }
        />
      </div>

      <div>
        <label htmlFor="answer" className="block mt-8">
          Answer:
        </label>
        <textarea
          id="answer"
          className="bg-slate-900 w-[300px] h-[300px] rounded border border-slate-100 px-2 py-1"
          value={newCardData.answer}
          onChange={(e) =>
            setNewCardData((prev) => ({
              ...prev,
              answer: e.target.value,
            }))
          }
        />
      </div>

      <SubmitBtn newCardData={newCardData} setNewCardData={setNewCardData} />
    </div>
  )
}

export default Add
