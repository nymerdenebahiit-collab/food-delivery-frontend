"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Card = ({
  isAdmin,

  isAddedToCart,
  dishName,
  cost,
  overview,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleEdit = () => {
    setIsDialogOpen(!isDialogOpen);
    console.log(`handleEdit is working`);
  };

  return (
    <div className="w-full">
      <div
        aria-label="Outer part of the card"
        className="bg-[#FFF] p-4 flex flex-col gap-5 w-[365px] h-[310px] rounded-[20px] border border-[#E4E4E7]"
      >
        <div
          aria-label="Card's image"
          className="w-80 h-[170px] bg-blue-500 bg-no-repeat bg-center p-5"
        >
          <div
            className={`cursor-pointer rounded-full h-11 w-11 py-2 px-4 flex items-center justify-center ml-59 mt-21.5 ${
              isAdmin ? `bg-white` : isAddedToCart ? `bg-[#18181B]` : `bg-white`
            } `}
            onClick={isAdmin ? handleEdit : undefined}
          >
            {isAdmin && !isAddedToCart && (
              <svg
                className="cursor-pointer"
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
            )}
            {isAddedToCart && !isAdmin && (
              <svg
                aria-label="Added to cart"
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="10"
                viewBox="0 0 13 10"
                fill="none"
              >
                <path
                  d="M11.6667 1L4.33333 8.33333L1 5"
                  stroke="#E4E4E7"
                  stroke-width="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
            {!isAddedToCart && !isAdmin && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M5.66667 1V10.3333M1 5.66667H10.3333"
                  stroke="#EF4444"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        </div>
        <div aria-label="Card's contents" className=" flex flex-col gap-1">
          <div
            aria-label="Dish name and price"
            className="flex justify-between"
          >
            <p>{dishName}</p>
            <p>{cost}</p>
          </div>
          <p>{overview}</p>
        </div>

        <Dialog
          aria-label="Dialog when Edit dish button is clicked"
          open={isDialogOpen}
          onOpenChange={setIsDialogOpen}
        >
          <DialogContent className="sm:max-w-[472px] flex flex-col">
            <DialogHeader>
              <DialogTitle className="text-lg font-semibold text-[#09090B]">
                Dishes info
              </DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-3">
              <div aria-label="Dish name editor" className="flex gap-4">
                <p> Dish name</p>
                <Input placeholder="Change your dish name here" />
              </div>
              <div aria-label="Dish category editor" className="flex gap-4">
                {" "}
                <p> Dish category</p>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div aria-label="Ingredients editor" className="flex gap-4">
                <p> Ingredients</p>
                <Input placeholder="Change your dish name here" />
              </div>
              <div aria-label="Price editor" className="flex gap-4">
                {" "}
                <p> Price</p>
                <Input placeholder="Change your dish name here" />
              </div>
              <div aria-label="Image editor" className="flex gap-4"></div>
            </div>

            <DialogFooter className="flex justify-between">
              <DialogClose asChild>
                <Button variant="outline" className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="15"
                    viewBox="0 0 13 15"
                    fill="none"
                  >
                    <path
                      d="M0.5 3.16667H12.5M11.1667 3.16667V12.5C11.1667 13.1667 10.5 13.8333 9.83333 13.8333H3.16667C2.5 13.8333 1.83333 13.1667 1.83333 12.5V3.16667M3.83333 3.16667V1.83333C3.83333 1.16667 4.5 0.5 5.16667 0.5H7.83333C8.5 0.5 9.16667 1.16667 9.16667 1.83333V3.16667"
                      stroke="#EF4444"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </DialogClose>
              <Button type="submit" className="rounded-lg">
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
