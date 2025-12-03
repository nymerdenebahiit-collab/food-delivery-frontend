import { Card } from "@/app/_components/card";
import { useState } from "react";

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
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Dishmenu = ({
  title,
  foodCounter,
  addDishClicked,
  setAddDishClicked,
}) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(true);

  const [cards, setCards] = useState([
    {
      foodName: "DummyName",
      price: "12.99$",
      description: "DummyDescription",
    },
    {
      foodName: "DummyName",
      price: "12.99$",
      description: "DummyDescription",
    },
    {
      foodName: "DummyName",
      price: "12.99$",
      description: "DummyDescription",
    },
    {
      foodName: "DummyName",
      price: "12.99$",
      description: "DummyDescription",
    },
    {
      foodName: "DummyName",
      price: "12.99$",
      description: "DummyDescription",
    },
    {
      foodName: "DummyName",
      price: "12.99$",
      description: "DummyDescription",
    },
    {
      foodName: "DummyName",
      price: "12.99$",
      description: "DummyDescription",
    },
  ]);

  const [hardLimit, setHardLimit] = useState(6);

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
        className="grid grid-cols-4 gap-x-4 gap-y-4"
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
        {cards.slice(0, hardLimit).map((contentsOfCard, index) => (
          <Card
            key={index}
            isAdmin={true}
            isAddedToCart={false}
            dishName={contentsOfCard.foodName}
            cost={contentsOfCard.price}
            overview={contentsOfCard.description}
          />
        ))}
      </div>
      <Dialog
        aria-label="Add dish"
        open={addDishClicked}
        onOpenChange={setAddDishClicked}
      >
        <form>
          <DialogContent className="sm:max-w-115">
            <div
              aria-label="The form that adds dishes"
              className=" bg-[#FFF] rounded-xl flex flex-col gap-6"
            >
              <DialogTitle>
                {" "}
                <div aria-label="Header" className="flex justify-between">
                  {" "}
                  <p className="text-lg text-[#09090B ] font-semibold">
                    Add new Dish to Appetizers
                  </p>
                </div>
              </DialogTitle>

              <div className="flex gap-6">
                {" "}
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-[#09090B] font-medium">
                    Food name
                  </p>
                  <Input type="Food name" placeholder="Type food name" />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-[#09090B] font-medium">
                    Food price
                  </p>
                  <Input type="Food price" placeholder="Enter price..." />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm text-[#09090B] font-medium">
                  Ingredients
                </p>
                <Textarea placeholder="List ingredients.." />
              </div>
              <div
                aria-label="Image dropzone"
                onDrop={(e) => {
                  e.preventDefault();
                  const droppedFiles = Array.from(e.dataTransfer.files);
                  handleDrop(droppedFiles);
                }}
                onDragOver={(e) => {
                  e.preventDefault();
                }}
                className=" border-2 border-dashed bg-[#E4E4E7] h-[106px] border-gray-300 rounded-md p-4 text-center cursor-pointer hover:border-gray-400 transition-colors"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="rounded-full bg-white p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                    >
                      <path
                        d="M12.5 8.5L10.4427 6.44267C10.1926 6.19271 9.85355 6.05229 9.5 6.05229C9.14645 6.05229 8.80737 6.19271 8.55733 6.44267L2.5 12.5M1.83333 0.5H11.1667C11.903 0.5 12.5 1.09695 12.5 1.83333V11.1667C12.5 11.903 11.903 12.5 11.1667 12.5H1.83333C1.09695 12.5 0.5 11.903 0.5 11.1667V1.83333C0.5 1.09695 1.09695 0.5 1.83333 0.5ZM5.83333 4.5C5.83333 5.23638 5.23638 5.83333 4.5 5.83333C3.76362 5.83333 3.16667 5.23638 3.16667 4.5C3.16667 3.76362 3.76362 3.16667 4.5 3.16667C5.23638 3.16667 5.83333 3.76362 5.83333 4.5Z"
                        stroke="#09090B"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600">
                    Choose a file or drag & drop it here
                  </p>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files) {
                      handleDrop(Array.from(e.target.files));
                    }
                  }}
                  className="hidden"
                  id="file-upload"
                />
              </div>
              <Button className="ml-81 w-fit px-4 py-2 h-10 flex items-center justify-center cursor-pointer">
                {" "}
                Add dish{" "}
              </Button>
            </div>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
};
