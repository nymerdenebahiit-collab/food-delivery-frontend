import { Card } from "@/app/_components/card";
import { useState } from "react";

export const Dishmenu = ({
  title,
  foodCounter,
  addDishClicked,
  setAddDishClicked,
  isEditDishClicked,
  setEditDishClicked,
}) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(true);

  const colLimit = 6;

  const addDish = () => {
    setAddDishClicked(!addDishClicked);
    console.log(`This AddDish button is working`);
  };
  return (
    <div className="bg-[#FFF] flex flex-col gap-4 p-5 rounded-xl">
      <div className="flex gap-2 text-[#09090B] font-semibold text-xl">
        <p>{title}</p>
        <p> ({foodCounter})</p>
      </div>
      <div
        aria-label="Cards in category section"
        className="grid grid-cols-6 gap-4"
      >
        <button
          aria-label="Add new dish to a category"
          className="cursor-pointer flex flex-col gap-6 items-center justify-center py-2 px-4 border border-dashed border-red-500 h-[310px]  rounded-[20px]  "
          onClick={addDish}
        >
          <div
            aria-label="Add button"
            className="flex items-center justify-center py-2 px-4 h-10 w-10 bg-red-500 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
            >
              <path
                d="M5.16667 0.5V9.83333M0.5 5.16667H9.83333"
                stroke="#FAFAFA"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="text-[#18181B] text-sm font-normal">
            Add new Dish to Appetizers
          </p>
        </button>
        <Card
          isAdmin={true}
          isAddedToCart={false}
          setIsAdmin={setIsAdmin}
          setIsAddedToCart={setIsAddedToCart}
          isEditDishClicked={isEditDishClicked}
          setEditDishClicked={setEditDishClicked}
        />
      </div>
    </div>
  );
};
