const Add = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Card */}
      <div>
        <label htmlFor="question" className="block mt-8">
          Question:
        </label>
        <textarea
          id="question"
          className="bg-slate-900 w-[300px] h-[100px] rounded border border-slate-100"
        />
      </div>
      <div>
        <label htmlFor="answer" className="block mt-8">
          Answer:
        </label>
        <textarea
          id="answer"
          className="bg-slate-900 w-[300px] h-[300px] rounded border border-slate-100"
        />
      </div>
    </div>
  )
}

export default Add
