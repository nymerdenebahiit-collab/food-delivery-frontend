"use client";

import { Dishmenu } from "../_components/dishmenu";
import { useState } from "react";

export const FoodMenu = ({
  activePopUpMenu,
  setActivePopUpMenu,
  addDishClicked,
  setAddDishClicked,
}) => {
  const [totalFoodNumber, setTotalFoodNumber] = useState(0);
  // For now, using hard code for categoryies. Later on, it needs to be dynamic, and added or removed from backend
  const [categories, setCategories] = useState([
    { id: 1, nameOfCategory: `Appetizers` },
    { id: 2, nameOfCategory: `Salads` },
  ]);

  const [foodCounter, setFoodCounter] = useState(0);

  const [totalCategoryNumber, setTotalCategoryNumber] = useState(0);

  const addCategory = () => {
    setActivePopUpMenu(!activePopUpMenu);
  };

  return (
    <div
      aria-label="All dishes and their category"
      className="flex flex-col bg-[#E4E4E5] gap-5 relative"
    >
      <div
        aria-label="Dishes category"
        className="mt-21 rounded-xl bg-[#FFF] p-6 gap-4 flex flex-col mx-6"
      >
        <p className="text-xl font-semibold text-[#09090B]">Dishes category</p>

        <div
          aria-label="Category button grid"
          className="grid grid-cols-6 gap-3 w-fit"
          // Fix the gap distance between the buttons
        >
          <button className="rounded-full px-4 py-2 border border-[#EF4444] flex gap-2 w-fit cursor-pointer">
            All Dishes
            <div className="bg-[#18181B] text-[12px] font-semibold rounded-full px-2.5 text-[#FAFAFA] py-0.5">
              {totalFoodNumber}
            </div>
          </button>
          {categories.map((category, id) => (
            <button
              className="rounded-full px-4 py-2 border border-[#71717A] flex gap-2 w-fit cursor-pointer"
              key={id}
            >
              {category.nameOfCategory}
              <div className="bg-[#18181B] text-[12px] font-semibold rounded-full px-2.5 text-[#FAFAFA] py-0.5">
                {totalFoodNumber}
              </div>
            </button>
          ))}
          <button
            aria-label="Category adder button"
            className="rounded-full py-2 px-4 flex items-center justify-center bg-red-500 w-fit cursor-pointer"
            onClick={addCategory}
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
          </button>
        </div>
      </div>
      <div aria-label="The dishes" className="flex flex-col gap-5 mx-6">
        <Dishmenu
          title="Appetizers"
          foodCounter={foodCounter}
          addDishClicked={addDishClicked}
          setAddDishClicked={setAddDishClicked}
        />
        <Dishmenu title="Salads" foodCounter={foodCounter} />
      </div>
    </div>
  );
};
