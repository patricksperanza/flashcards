import { AiOutlineEdit } from "react-icons/ai"
import { BsTrash3 } from "react-icons/bs"

interface DeckCardProps {
  id: string
  question: string
  answer: string
}

const DeckCard = ({ id, question, answer }: DeckCardProps) => {
  return (
    <div className="flex justify-between w-[400px] py-4 px-4 min-h-[100px] border-b">
      <div className="flex flex-col justify-center gap-5 w-[300px]">
        <p className="text-slate-500 text-sm">{question}</p>
        <p className="text-[10px]">{answer}</p>
      </div>
      <div className="flex flex-col justify-center gap-10">
        <AiOutlineEdit className="hover:text-slate-500 cursor-pointer" />
        <BsTrash3 className="hover:text-slate-500 cursor-pointer" />
      </div>
    </div>
  )
}

export default DeckCard
