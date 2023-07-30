import { useRouter } from "next/navigation";
import { SetStateAction } from "react";
import { useCardsContext } from "@/context/CardsContext";
import { useSession } from "next-auth/react";
import { BASE_URL } from "@/utils/BASE_URL";

interface SubmitBtnProps {
  newCardData: {
    question: string;
    answer: string;
  };
  setNewCardData: React.Dispatch<
    SetStateAction<{ question: string; answer: string }>
  >;
}

const SubmitBtn = ({ newCardData, setNewCardData }: SubmitBtnProps) => {
  const { data: session } = useSession();
  const { questionList, setQuestionList } = useCardsContext();
  const router = useRouter();

  // Sends a new card to the API to be added to the database

  const handleSubmit = async () => {
    const res = await fetch(`${BASE_URL}/api/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...newCardData,
        createdBy:
          session?.user === undefined
            ? "guest@guestaccount.com"
            : session?.user.email,
      }),
    });
    const data = await res.json();
    console.log("Added:", data);

    // Make a new call to the database and update the question list
    if (res.ok) {
      setQuestionList((prev) => [
        ...prev,
        {
          _id: "",
          question: newCardData.question,
          answer: newCardData.answer,
        },
      ]);

      setNewCardData({
        question: "",
        answer: "",
      });

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

export default SubmitBtn;
