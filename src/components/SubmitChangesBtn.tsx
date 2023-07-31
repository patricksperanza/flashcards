import { useRouter } from "next/navigation";
import { BASE_URL } from "@/utils/BASE_URL";
import { useCardsContext } from "@/context/CardsContext";
import { Question } from "@/types/types";

interface SubmitChangesBtnProps {
  currentQuestion: Question;
}

const SubmitChangesBtn = ({ currentQuestion }: SubmitChangesBtnProps) => {
  const { setQuestionList } = useCardsContext();
  const router = useRouter();

  const handleSubmit = async () => {
    const res = await fetch(
      `${BASE_URL}/api/cards/edit/${currentQuestion._id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentQuestion),
      },
    );

    const data = await res.json();

    if (res.ok) {
      setQuestionList(data);
      router.push("/deck");
    }
  };

  return (
    <div
      className="m-auto block w-[300px] cursor-pointer rounded bg-blue-500 px-6 py-2  text-center text-xs duration-100 ease-in active:bg-blue-600"
      onClick={handleSubmit}
    >
      Submit
    </div>
  );
};

export default SubmitChangesBtn;
