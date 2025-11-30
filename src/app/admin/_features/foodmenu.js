"use client";

import { Dishmenu } from "../_components/dishmenu";
import { useState } from "react";

export const FoodMenu = () => {
  const [totalFoodNumber, setTotalFoodNumber] = useState(0);
  const [categoryName, setCategoryName] = useState(``);
  const { activePopUpMenu, setActivePopUpMenu } = useState(false);
  const [foodCounter, setFoodCounter] = useState(0);

  return (
    <div
      aria-label="All dishes and their category"
      className="flex flex-col bg-[#E4E4E5] gap-5"
    >
      <div
        aria-label="Dishes category"
        className="mt-21 rounded-xl bg-[#FFF] p-6 flex flex-col mx-6"
      >
        <p className="text-xl font-semibold text-[#09090B]">Dishes category</p>
        <button className="rounded-full px-4 py-2  border-[#71717A] flex gap-2">
          {categoryName}

          <div className="bg-[#18181B] text-[12px] font-semibold rounded-full px-2.5 text-[#FAFAFA] py-0.5">
            {totalFoodNumber}
          </div>
        </button>
      </div>
      <div aria-label="The dishes" className="flex flex-col gap-5 mx-6">
        <Dishmenu title="Appetizers" foodCounter={foodCounter} />
        <Dishmenu title="Salads" foodCounter={foodCounter} />
      </div>
    </div>
  );
};
