"use client";

import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import React from "react";

const FoodCategoryContext = createContext(null);

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
  const [foods, setFoods] = useState([]); // Added: State for foods
  const [loading, setLoading] = useState(false);

  const fetchCategory = async () => {
    console.log("fetchCategory called");
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:999/authentication/foodCategory",
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("Response received:", response.data);
      setCategories(response.data);
    } catch (err) {
      console.error("Error details:", err.response?.data);
      console.error("Failed to fetch categories", err);
    } finally {
      setLoading(false);
    }
  };

  const createCategory = async (categoryName) => {
    console.log("createCategory called with:", categoryName);
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:999/authentication/foodCategory",
        { categoryName },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("Category created response:", response.data);
      await fetchCategory();
      console.log("Category created successfully");
      return response.data;
    } catch (err) {
      console.error("Failed to create category", err);
      console.error("Error response:", err.response?.data);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const fetchFoods = async () => {
    console.log("fetchFoods called");
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:999/authentication/food",
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("Foods fetched:", response.data);
      setFoods(response.data);
    } catch (err) {
      console.error("Failed to fetch foods", err);
    } finally {
      setLoading(false);
    }
  };

  const createFood = async (foodData) => {
    console.log("createFood called with:", foodData);
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:999/authentication/food",
        foodData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("Food created:", response.data);
      await fetchFoods();
      return response.data;
    } catch (err) {
      console.error("Failed to create food", err);
      console.error("Error response:", err.response?.data);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategory();
    fetchFoods();
  }, []);

  return (
    <FoodCategoryContext.Provider
      value={{
        categories,
        foods,
        loading,
        createCategory,
        fetchCategory,
        createFood,
        fetchFoods,
      }}
    >
      {children}
    </FoodCategoryContext.Provider>
  );
};
