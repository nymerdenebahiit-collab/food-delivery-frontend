"use client";

import { id } from "zod/v4/locales";
import { Dishmenu } from "../_components/dishmenu";
import { useState } from "react";

export const FoodMenu = ({ activePopUpMenu, setActivePopUpMenu }) => {
  const [totalFoodNumber, setTotalFoodNumber] = useState(0);
  // For now, using hard code for categoryies. Later on, it needs to be dynamic, and added or removed from backend
  const [categories, setCategories] = useState([
    { id: 1, nameOfCategory: `Appetizers` },
    { id: 2, nameOfCategory: `Salads` },
  ]);

  const [foodCounter, setFoodCounter] = useState(0);

  const [totalCategoryNumber, setTotalCategoryNumber] = useState(0);
  // Used Claude
  const addCategory = () => {
    setActivePopUpMenu(!activePopUpMenu);
    <div> 1</div>;
  };
  //
  return (
    <div
      aria-label="All dishes and their category"
      className="flex flex-col bg-[#E4E4E5] gap-5"
    >
      <div
        aria-label="Dishes category"
        className="mt-21 rounded-xl bg-[#FFF] p-6 gap-4 flex flex-col mx-6"
      >
        <p className="text-xl font-semibold text-[#09090B]">Dishes category</p>
        <div
          aria-label="Category button grid"
          className="grid grid-cols-6 gap-3"
        >
          <button className="rounded-full px-4 py-2 border border-[#EF4444] flex gap-2 w-fit">
            All Dishes
            <div className="bg-[#18181B] text-[12px] font-semibold rounded-full px-2.5 text-[#FAFAFA] py-0.5">
              {totalFoodNumber}
            </div>
          </button>
          {categories.map((category, id) => (
            <button
              className="rounded-full px-4 py-2 border border-[#71717A] flex gap-2 w-fit"
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
            className="rounded-full py-2 px-4 flex items-center justify-center bg-red-500 w-fit"
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
      {activePopUpMenu && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div
            aria-label="The rectangle"
            className="bg-white p-6 brightness-100 flex flex-col gap-6 w-115"
          >
            <div
              aria-label="Header and close button"
              className="flex justify-between"
            >
              {" "}
              <p>Add new category</p>
              <button className="h-9 w-9 bg-[#E4E4E5] flex items-center justify-center py-2 px-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                >
                  <path
                    d="M8.5 0.5L0.5 8.5M0.5 0.5L8.5 8.5"
                    stroke="#18181B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#09090B] text-sm">Category name</p>
              <div>dummyData</div>
            </div>
          </div>
          <div aria-label="Form field"></div>
        </div>
      )}
      <div aria-label="The dishes" className="flex flex-col gap-5 mx-6">
        <Dishmenu title="Appetizers" foodCounter={foodCounter} />
        <Dishmenu title="Salads" foodCounter={foodCounter} />
      </div>
    </div>
  );
};
