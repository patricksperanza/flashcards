"use client"

import AddNewCardBtn from "@/components/AddNewCardBtn"
import DeckCard from "@/components/DeckCard"
import { useCardsContext } from "@/context/CardsContext"

const Deck = () => {
  const { questionList } = useCardsContext()

  return (
    <div className="flex flex-col items-center mt-10">
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
  )
}

export default Deck
