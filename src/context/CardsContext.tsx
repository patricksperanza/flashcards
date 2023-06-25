"use client"
import {
  createContext,
  useState,
  useEffect,
  useContext,
  SetStateAction,
} from "react"
import { getCards } from "@/utils/getCards"

export interface Question {
  _id: string
  question: string
  answer: string
}

interface CardsContextType {
  questionList: Question[]
  setQuestionList: React.Dispatch<SetStateAction<Question[]>>
}

// Create Cards Context
export const CardsContext = createContext<CardsContextType>(
  {} as CardsContextType
)

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
  const [questionList, setQuestionList] = useState<Question[]>([])

  useEffect(() => {
    const getCardsList = async () => {
      const list = await getCards()
      setQuestionList(list)
    }

    getCardsList()
  }, [])

  return (
    <CardsContext.Provider value={{ questionList, setQuestionList }}>
      {children}
    </CardsContext.Provider>
  )
}
