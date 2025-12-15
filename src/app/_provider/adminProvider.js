"use client";

import { useContext, createContext, useState } from "react";

const AdminContext = createContext(null);

export const useAdminContext = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("AdminContext must be used inside <AdminPrvodier>");
  }

  return context;
};

export const AdminProvider = ({ children }) => {
  const [orderMenu, setOrderMenu] = useState(false);
  const [foodMenu, setFoodMenu] = useState(true);
  const [activePopUpMenu, setActivePopUpMenu] = useState(false);
  const [deliveryBadgeClicked, setDeliveryBadgeClicked] = useState(false);
  const [deliveryButtonClicked, setDeliveryButtonClicked] = useState(false);
  const [addDishClicked, setAddDishClicked] = useState(false);
  const [isEditDishClicked, setEditDishClicked] = useState(false);
  const [foodCounter, setFoodCounter] = useState(0);
  const [totalCategoryNumber, setTotalCategoryNumber] = useState(0);
  const [pending, setPending] = useState(false);
  const [delivered, setDelivered] = useState(true);
  const [cancelled, setCancelled] = useState(false);
  const [isDeliveryButtonClicked, setIsDeliveryButtonClicked] = useState(false);
  const addDish = () => {
    setAddDishClicked(!addDishClicked);
    console.log(`This AddDish button is working`);
  };
  const addCategory = () => {
    setActivePopUpMenu(!activePopUpMenu);
  };
  const badgeClicked = () => {
    setDeliveryBadgeClicked(!deliveryBadgeClicked);
    console.log(`This button is working`);
  };
  const handleDeliveryButton = () => {
    setIsDeliveryButtonClicked(!isDeliveryButtonClicked);
    console.log("This handleDeliveryButton is working");
  };

  return (
    <AdminContext.Provider
      value={{
        orderMenu,
        foodMenu,
        setOrderMenu,
        setFoodMenu,
        setIsDeliveryButtonClicked,
        activePopUpMenu,
        deliveryBadgeClicked,
        deliveryButtonClicked,
        addDishClicked,
        isEditDishClicked,
        isDeliveryButtonClicked,
        foodCounter,
        totalCategoryNumber,
        addDish,
        addCategory,
        badgeClicked,
        handleDeliveryButton,
        pending,
        delivered,
        cancelled,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
