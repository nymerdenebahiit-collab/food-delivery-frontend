"use client";

import { useState } from "react";
import { Order } from "../_features/order";
import { useAdminContext } from "../../_provider/adminProvider";

export const DeliveryBadge = ({}) => {


  const { badgeClicked, pending, delivered, cancelled } = useAdminContext();

  return (
    <>
      <button
        className={`px-2.5 py-2 flex gap-2.5 rounded-full border ${
          pending
            ? `border-red-500`
            : delivered
            ? `border-green-500`
            : cancelled
            ? `border-[#E4E4E7]`
            : ``
        } items-center justify-center w-fit`}
        onClick={badgeClicked}
      >
        <p className="text-sm text-[#09090B] font-semibold">
          {" "}
          {pending
            ? `Pending`
            : delivered
            ? `Delivered`
            : cancelled
            ? `Cancelled`
            : `Whatever`}{" "}
        </p>{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M4.66797 10.0001L8.0013 13.3334L11.3346 10.0001M4.66797 6.00008L8.0013 2.66675L11.3346 6.00008"
            stroke="#09090B"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </>
  );
};
