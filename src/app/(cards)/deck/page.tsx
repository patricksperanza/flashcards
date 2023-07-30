"use client";
import AddNewCardBtn from "@/components/AddNewCardBtn";
import DeckCard from "@/components/DeckCard";
import { useCardsContext } from "@/context/CardsContext";

const Deck = () => {
  const { questionList } = useCardsContext();

  return (
    <div className="mb-24 mt-10 flex min-h-screen flex-col items-center">
      <AddNewCardBtn />
      {questionList.map((item) => (
        <DeckCard
          key={item.question}
          question={item.question}
          answer={item.answer}
          id={item._id}
        />
      ))}
    </div>
  );
};

export default Deck;
