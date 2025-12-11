"use client";

import { Dishmenu } from "../_components/dishmenu";
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
import { useFoodCategory } from "../../_provider/foodCategoryProvider";

export const FoodMenu = ({
  activePopUpMenu,
  setActivePopUpMenu,
  addDishClicked,
  setAddDishClicked,
  isEditDishClicked,
  setEditDishClicked,
}) => {
  const [totalFoodNumber, setTotalFoodNumber] = useState(0);
  const { categories, loading, createCategory } = useFoodCategory();
  const [newCategoryName, setNewCategoryName] = useState("");

  const [foodCounter, setFoodCounter] = useState(0);

  const addCategory = () => {
    setActivePopUpMenu(!activePopUpMenu);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newCategoryName.trim()) {
      console.error("Category name is required");
      return;
    }

    try {
      console.log("Creating category:", newCategoryName);
      await createCategory(newCategoryName);
      console.log("Category created successfully!");
      setNewCategoryName("");
      setActivePopUpMenu(false);
    } catch (err) {
      console.error("Failed to create category", err);
    }
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
        >
          <button className="rounded-full px-4 py-2 border border-[#EF4444] flex gap-2 w-fit cursor-pointer">
            All Dishes
            <div className="bg-[#18181B] text-[12px] font-semibold rounded-full px-2.5 text-[#FAFAFA] py-0.5">
              {totalFoodNumber}
            </div>
          </button>
          {categories.map((category) => (
            <button
              className="rounded-full px-4 py-2 border border-[#71717A] flex gap-2 w-fit cursor-pointer"
              key={category._id}
            >
              {category.categoryName}
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
        {categories.map((category) => (
          <Dishmenu
            key={category._id}
            title={category.categoryName}
            categoryId={category._id}
            foodCounter={foodCounter}
            addDishClicked={addDishClicked}
            setAddDishClicked={setAddDishClicked}
            setEditDishClicked={setEditDishClicked}
            isEditDishClicked={isEditDishClicked}
          />
        ))}

        <Dialog
          aria-label="Add Category"
          open={activePopUpMenu}
          onOpenChange={setActivePopUpMenu}
        >
          <DialogContent className="w-115">
            <form onSubmit={handleSubmit}>
              <DialogHeader>
                <DialogTitle className="text-lg text-[#09090B] font-semibold">
                  Add new category
                </DialogTitle>
              </DialogHeader>
              <Input
                type="text"
                placeholder="Type category name.."
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
              />
              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setActivePopUpMenu(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" className="rounded-md" disabled={loading}>
                  {loading ? "Adding..." : "Add category"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
