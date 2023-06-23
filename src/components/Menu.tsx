import Link from "next/link"

const Menu = () => {
  return (
    <div className="absolute left-0 top-10 flex flex-col rounded border bg-slate-800">
        <Link href="/list" className="py-2 px-5 border-b cursor-pointer hover:bg-slate-900">Card List</Link>
        <Link href="/add" className="py-2 px-5 cursor-pointer hover:bg-slate-900">Add Card</Link>
    </div>
  )
}

export default Menu