interface NewQuestionBtnProps {
  getNewQuestion: () => void
}

const NewQuestionBtn = ({ getNewQuestion }: NewQuestionBtnProps) => {
  return (
    <div
      className="absolute bottom-2 left-[50%] ml-[-140px] block m-auto w-[280px] bg-blue-500 px-6 py-2 rounded text-xs  active:bg-blue-600 ease-in duration-100 cursor-pointer text-center"
      onClick={getNewQuestion}
    >
      New Question
    </div>
  )
}

export default NewQuestionBtn
