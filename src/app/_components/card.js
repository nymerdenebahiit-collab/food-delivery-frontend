"use client";

import { useState } from "react";
import Image from "next/image";

export const Card = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  return (
    <div className="w-full">
      <div
        aria-label="Outer part of the card"
        className="bg-[#FFF] p-4 flex flex-col gap-5 w-[365px] h-[310px] rounded-[20px]"
      >
        <div
          aria-label="Card's image"
          className="w-80 h-[170px] bg-blue-500 bg-no-repeat bg-center p-5"
        >
          <div className="rounded-full h-11 w-11 py-2 px-4 flex items-center justify-center bg-white ml-59 mt-21.5 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M11 1.55228C11.1751 1.37719 11.383 1.2383 11.6117 1.14353C11.8405 1.04877 12.0857 1 12.3333 1C12.581 1 12.8262 1.04877 13.0549 1.14353C13.2837 1.2383 13.4916 1.37719 13.6667 1.55228C13.8418 1.72738 13.9807 1.93525 14.0754 2.16402C14.1702 2.3928 14.219 2.638 14.219 2.88562C14.219 3.13324 14.1702 3.37844 14.0754 3.60721C13.9807 3.83599 13.8418 4.04386 13.6667 4.21895L4.66667 13.219L1 14.219L2 10.5523L11 1.55228Z"
                stroke="#EF4444"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div aria-label="Card's contents" className=" flex flex-col gap-1">
          <div
            aria-label="Dish name and price"
            className="flex justify-between"
          >
            <p>Dummy Dish Name</p>
            <p>$12.99</p>
          </div>
          <p>Dummy description</p>
        </div>
      </div>
    </div>
  );
};
