import { AiOutlineEdit } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { BASE_URL } from "@/utils/BASE_URL";

interface DeckCardProps {
  id: string;
  question: string;
  answer: string;
}

const DeckCard = ({ id, question, answer }: DeckCardProps) => {
  const [displayCard, setDisplayCard] = useState(true);
  const router = useRouter();
  const handleDelete = async () => {
    const res = await fetch(`${BASE_URL}/api/cards/delete/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log("Deleted:", data);

    if (res.ok) {
      setDisplayCard(false);
    }
  };

  return displayCard ? (
    <div className="flex min-h-[100px] w-[400px] justify-between border-b px-4 py-4">
      <div className="flex w-[300px] flex-col justify-center gap-5">
        <p className="text-sm text-slate-500">{question}</p>
        <p className="text-[10px]">{answer}</p>
      </div>
      <div className="flex flex-col justify-center gap-10">
        <Link href={`/edit/${id}`}>
          <AiOutlineEdit className="cursor-pointer hover:text-slate-500" />
        </Link>
        <BsTrash3
          className="cursor-pointer hover:text-slate-500"
          onClick={handleDelete}
        />
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default DeckCard;
