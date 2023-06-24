import Link from "next/link"

const AddNewCardBtn = () => {
  return (
    <Link
      href="/add"
      className="block w-[200px] bg-blue-500 px-6 py-1 rounded text-xs  active:bg-blue-600 ease-in duration-100 cursor-pointer text-center flex justify-center items-center gap-4 mb-4"
    >
      <p className="text-xl">+</p> <p>Add New Card</p>
    </Link>
  )
}

export default AddNewCardBtn
