import Link from "next/link"
import { AiOutlineHome, AiOutlineFileAdd } from "react-icons/ai"
import { BsCardList } from "react-icons/bs"

interface MenuProps {
  setToggleMenuDropdown: React.Dispatch<React.SetStateAction<boolean>>
}

const Menu = ({ setToggleMenuDropdown }: MenuProps) => {
  return (
    <div className="absolute left-1 top-10 flex flex-col rounded border bg-slate-800">
      <Link
        href="/"
        className="w-full flex gap-2 items-center py-2 px-4 border-b cursor-pointer hover:bg-slate-900"
        onClick={() => setToggleMenuDropdown(false)}
      >
        <AiOutlineHome />
        <span>Home</span>
      </Link>

      <Link
        href="/deck"
        className="w-full flex gap-2 items-center py-2 px-4 border-b cursor-pointer hover:bg-slate-900"
        onClick={() => setToggleMenuDropdown(false)}
      >
        <BsCardList />
        <span>Deck</span>
      </Link>
      <Link
        href="/add"
        className="w-full flex gap-2 items-center py-2 px-4 border-b cursor-pointer hover:bg-slate-900"
        onClick={() => setToggleMenuDropdown(false)}
      >
        <AiOutlineFileAdd />
        <span>New Card</span>
      </Link>
    </div>
  )
}

export default Menu
