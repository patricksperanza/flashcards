import { useRouter } from "next/navigation"
import { SetStateAction } from "react"
import { useCardsContext } from "@/context/CardsContext"
import { useSession } from "next-auth/react"
import { baseUrl } from "@/utils/baseUrl"

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
  const { data: session } = useSession()
  const { questionList, setQuestionList } = useCardsContext()
  const router = useRouter()

  const handleSubmit = async () => {
    if (session?.user) {
      const res = await fetch(`${baseUrl}/api/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...newCardData,
          createdBy: session?.user.email,
        }),
      })
      const data = await res.json()
      console.log("Added:", data)

      // Make a new call to the database and update the question list
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
