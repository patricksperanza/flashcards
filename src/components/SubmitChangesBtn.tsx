import { useRouter } from "next/navigation"
import { SetStateAction } from "react"
import { useCardsContext } from "@/context/CardsContext"

interface Question {
  _id: string
  question: string
  answer: string
}

interface SubmitChangesBtnProps {
  currentQuestion: Question
}

const SubmitChangesBtn = ({ currentQuestion }: SubmitChangesBtnProps) => {
  const { setQuestionList } = useCardsContext()
  const router = useRouter()

  const handleSubmit = async () => {
    const res = await fetch(
      `http://localhost:3000/api/cards/edit/${currentQuestion._id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentQuestion),
      }
    )

    const data = await res.json()
    console.log("Edited:", data)

    if (res.ok) {
      setQuestionList((prev) => {
        return prev.map((item) => {
          return item._id === currentQuestion._id ? currentQuestion : item
        })
      })
      router.push("/deck")
    }
  }

  return (
    <div
      className="block m-auto w-[300px] bg-blue-500 px-6 py-2 rounded text-xs  active:bg-blue-600 ease-in duration-100 cursor-pointer text-center"
      onClick={handleSubmit}
    >
      Submit
    </div>
  )
}

export default SubmitChangesBtn
