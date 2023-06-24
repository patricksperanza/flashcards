import { useRouter } from "next/navigation"
import { SetStateAction } from "react"
import { useCardsContext } from "@/context/CardsContext"

interface SubmitBtnProps {
  newCardData: {
    question: string
    answer: string
  }
  setNewCardData: React.Dispatch<
    SetStateAction<{ question: string; answer: string }>
  >
}

const SubmitBtn = ({ newCardData, setNewCardData }: SubmitBtnProps) => {
  const { questionList, setQuestionList } = useCardsContext()
  const router = useRouter()
  const handleSubmit = async () => {
    const res = await fetch("http://localhost:3000/api/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCardData),
    })
    const data = await res.json()
    console.log(data)

    if (res.ok) {
      setQuestionList((prev) => [
        ...prev,
        {
          _id: "",
          question: newCardData.question,
          answer: newCardData.answer,
        },
      ])

      setNewCardData({
        question: "",
        answer: "",
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

export default SubmitBtn
