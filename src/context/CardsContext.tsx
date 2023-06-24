"use client"
import { createContext, useState, useEffect, useContext } from "react"
import { getCards } from "@/utils/getCards"

interface Question {
  _id: string
  question: string
  answer: string
}

interface QuestionContext {
  questionList: Question[]
}

// Create Cards Context
export const CardsContext = createContext<QuestionContext | null>(null)

// Custom hook
export const useCardsContext = () => {
  const cardsContext = useContext(CardsContext)

  if (!cardsContext) {
    throw new Error("useCardsContext has to be used within the Provider")
  }

  return cardsContext
}

// Provider
export const CardsContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [questionList, setQuestionList] = useState([])

  useEffect(() => {
    const getCardsList = async () => {
      const list = await getCards()
      setQuestionList(list)
    }

    getCardsList()
  }, [])

  return (
    <CardsContext.Provider value={{ questionList }}>
      {children}
    </CardsContext.Provider>
  )
}
