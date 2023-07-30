interface NewQuestionBtnProps {
  getNewQuestion: () => void;
}

const NewQuestionBtn = ({ getNewQuestion }: NewQuestionBtnProps) => {
  return (
    <div
      className="absolute bottom-2 left-[50%] m-auto ml-[-140px] block w-[280px] cursor-pointer rounded bg-blue-500 px-6 py-2  text-center text-xs duration-100 ease-in active:bg-blue-600"
      onClick={getNewQuestion}
    >
      New Question
    </div>
  );
};

export default NewQuestionBtn;
