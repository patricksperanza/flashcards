import { FaBars } from "react-icons/fa"
const Nav = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between items-center py-4 px-2 md:px-4 w-full l:w-3/4">
        <div className="w-[100px] flex justify-start">
          <FaBars className="cursor-pointer" />
        </div>
        <h1 className="text-mdmd:text-xl font-semibold">
          Full Stack Flashcards
        </h1>
        <div className="w-[100px] flex justify-end">
          <button className="border border-blue-500 px-5 py-1 rounded text-[10px] hover:bg-blue-500 ease-in duration-100 active:bg-blue-600">
            Log In
          </button>
        </div>
      </div>
      <div className="border-b-2 border-sky-500 w-3/4"></div>
    </div>
  )
}

export default Nav
