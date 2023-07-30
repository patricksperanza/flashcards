import Link from "next/link";

const AddNewCardBtn = () => {
  return (
    <Link
      href="/add"
      className="mb-4 block flex w-[200px] cursor-pointer items-center justify-center  gap-4 rounded bg-blue-500 px-6 py-1 text-center text-xs duration-100 ease-in active:bg-blue-600"
    >
      <p className="text-xl">+</p> <p>Add New Card</p>
    </Link>
  );
};

export default AddNewCardBtn;
