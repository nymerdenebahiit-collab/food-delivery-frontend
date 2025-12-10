"use client";

import { createContext, useContext, useState } from "react";
import React from "react";

const FoodCategoryContext = createContext(null); //Creates providier

export const useFoodCategory = () => {
  const context = useContext(FoodCategoryContext);
  if (!context) {
    throw new Error(
      "useFoodCategory must be used inside a <FoodCategoryProvider>"
    );
  }
  return context;
};

export const FoodCategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCategory = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:999/authentication/foodCategory",
        {
          headers: { "Content-type": "application/json" },
        }
      );
      console.log(`This shit is working`);
      setCategories(response.data);
    } catch (err) {
      console.log(`You know the deal, you've failed`, err);
      console.error(`Failed to fetch categories`, err);
    } finally {
      setLoading(false);
    }
  };

  const createCategory = async (categoryName) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:999/authentication/foodCategory",
        {
          headers: { "Content-type": "application/json" },
        }
      );
      fetchCategory();
      console.log(`this shit is also working`);
    } catch (err) {
      console.error(error, "Failed to create category");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FoodCategoryContext.Provider value={{ categories, loading }}>
      {children}
    </FoodCategoryContext.Provider>
  );
};
