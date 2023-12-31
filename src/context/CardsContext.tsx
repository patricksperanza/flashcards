"use client";
import {
  createContext,
  useState,
  useEffect,
  useContext,
  SetStateAction,
} from "react";
import { getCards } from "@/utils/getCards";
import { useSession } from "next-auth/react";
import { Question } from "@/types/types";

interface CardsContextType {
  questionList: Question[];
  setQuestionList: React.Dispatch<SetStateAction<Question[]>>;
}

// Create Cards Context
export const CardsContext = createContext<CardsContextType>(
  {} as CardsContextType,
);

// Custom hook
export const useCardsContext = () => {
  const cardsContext = useContext(CardsContext);

  if (!cardsContext) {
    throw new Error("useCardsContext has to be used within the Provider");
  }

  return cardsContext;
};

// Cards Context Provider
export const CardsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data: session } = useSession();
  const [questionList, setQuestionList] = useState<Question[]>([]);

  // Get the cards from the database
  useEffect(() => {
    const getCardsList = async () => {
      if (session?.user !== undefined) {
        const list = await getCards(session.user.email as string);
        setQuestionList(list);
      } else {
        const list = await getCards("guest@guestaccount.com");
        setQuestionList(list);
      }
    };

    getCardsList();
  }, [session?.user]);

  return (
    <CardsContext.Provider value={{ questionList, setQuestionList }}>
      {children}
    </CardsContext.Provider>
  );
};
