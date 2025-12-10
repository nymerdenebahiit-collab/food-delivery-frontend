"use client";

import { useState } from "react";
import { FoodMenu } from "./_features/foodmenu";
import { Order } from "./_features/order";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useFoodCategory } from "../_provider/foodCategoryProvider";

const Admin = () => {
  const [orderMenu, setOrderMenu] = useState(true);
  const [foodMenu, setFoodMenu] = useState(false);
  const [activePopUpMenu, setActivePopUpMenu] = useState(false);
  const [deliveryBadgeClicked, setDeliveryBadgeClicked] = useState(false);
  const [deliveryButtonClicked, setDeliveryButtonClicked] = useState(false);
  const [addDishClicked, setAddDishClicked] = useState(false);
  const [isEditDishClicked, setEditDishClicked] = useState(false);
  const { categories, loading, createCategory } = useFoodCategory();

  const router = useRouter();
  const goToHomePage = () => {
    router.push(`/home`);
  };
  return (
    <>
      <div
        className={`w-max flex relative 
        }`}
      >
        <div
          aria-label="Navigation"
          className="flex flex-col py-9 px-5 gap-10 items-center bg-[#FAFAFA]"
          //Fix the width changing when switching two different menus
        >
          <div
            aria-label="Logo and Slogan section"
            className="flex gap-2 items-center cursor-pointer"
            onClick={goToHomePage}
          >
            <svg
              aria-label="logo"
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="30"
              viewBox="0 0 36 30"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.7996 0.189376C16.614 0.374842 16.6072 0.415061 16.6246 1.2258C16.6345 1.68966 16.6109 2.10089 16.5721 2.1395C16.5333 2.17811 16.1224 2.26498 15.6589 2.33239C13.6267 2.62825 11.9182 3.22433 10.1049 4.27026C8.79564 5.02545 8.08594 5.5568 7.01375 6.58457C5.90531 7.64711 5.17363 8.57368 4.23113 10.1085C3.96048 10.5494 3.44001 11.5811 3.44001 11.6769C3.44001 11.6966 3.35513 11.8983 3.2514 12.1251C2.66788 13.4009 2.14879 15.7562 2.13002 17.2133C2.11707 18.221 2.15729 18.1777 1.14883 18.2699C0.384977 18.3398 0.263937 18.3706 0.136922 18.5274C-0.0627173 18.7739 -0.0434123 19.0425 0.1907 19.2766C0.387045 19.4729 0.396315 19.4742 1.24405 19.4245C1.7145 19.3969 3.13358 19.3236 4.3976 19.2616C5.66162 19.1995 7.29911 19.1146 8.03646 19.0727C10.1539 18.9528 10.6898 18.9251 11.7519 18.8815C12.7965 18.8386 14.7168 18.7368 16.8463 18.6115C17.5415 18.5705 18.6126 18.5189 19.2264 18.4968C19.8401 18.4747 20.6158 18.4412 20.95 18.4225C21.2843 18.4038 22.385 18.352 23.3963 18.3074C24.4075 18.2629 25.7864 18.1938 26.4606 18.1539C27.1347 18.114 28.0827 18.0616 28.5673 18.0374C29.0518 18.0132 29.6551 17.9786 29.9079 17.9605C30.1607 17.9424 30.7985 17.9076 31.3251 17.8831C34.7595 17.7236 35.6852 17.6458 35.8426 17.5033C36.0484 17.317 36.0534 16.8471 35.8515 16.6644C35.7278 16.5524 35.5719 16.5347 34.8564 16.5511C34.3898 16.5619 33.9828 16.5455 33.952 16.5147C33.9212 16.4839 33.8381 16.0727 33.7673 15.601C33.6237 14.6433 33.5955 14.5079 33.4379 14.0155C33.3771 13.8259 33.2873 13.5156 33.2382 13.326C33.189 13.1364 33.1177 12.9215 33.0797 12.8483C33.0416 12.7751 33.0105 12.6762 33.0105 12.6287C33.0105 12.4491 32.2817 10.8248 31.9005 10.1547C31.3958 9.26775 30.9517 8.58487 30.7228 8.34386C30.6242 8.23998 30.4525 8.03437 30.3413 7.8869C29.8704 7.26239 28.9125 6.30526 28.1298 5.67715C27.5216 5.18901 25.8426 4.08356 25.3497 3.84669C23.1752 2.80177 21.1423 2.26582 18.9658 2.16378C18.279 2.13153 17.9505 2.08549 17.8759 2.01095C17.8116 1.9466 17.7667 1.7308 17.7628 1.46734C17.7481 0.475505 17.7262 0.317617 17.5814 0.157584C17.3807 -0.0641951 17.0392 -0.0503291 16.7996 0.189376ZM10.7161 5.68443C10.7152 5.73714 10.5686 6.00917 10.3905 6.28909C9.90162 7.05708 8.95598 8.833 8.95582 8.98346C8.95575 9.01778 8.86956 9.23427 8.76423 9.46455C8.65889 9.69483 8.57271 9.92703 8.57271 9.98058C8.57271 10.0341 8.54069 10.1107 8.50154 10.1506C8.39827 10.2562 7.91457 12.1686 7.77591 13.0196C7.65687 13.7497 7.61343 14.1845 7.53874 15.3944C7.4724 16.468 7.27605 16.6167 5.89765 16.6377C4.82844 16.654 4.6334 16.572 4.43996 16.0245C4.29633 15.618 4.39553 15.0823 4.897 13.5559C5.30831 12.304 5.39664 12.0834 5.83215 11.2193C6.52476 9.84521 7.1282 8.92569 8.04419 7.84859C9.28378 6.39098 10.7239 5.22448 10.7161 5.68443ZM21.3279 21.0418C20.0597 21.0724 16.6825 21.2269 14.9694 21.3326C13.573 21.4188 12.9509 21.4535 10.8709 21.5615C9.67011 21.6238 8.27394 21.7083 7.76833 21.7494C7.26272 21.7905 5.86655 21.8621 4.66573 21.9086C3.4649 21.9552 2.43484 22.0087 2.37677 22.0276C2.26814 22.063 2.27603 22.1881 2.43706 22.9786C2.55603 23.563 2.89479 24.6808 3.05842 25.029C3.144 25.211 3.26933 25.5049 3.33689 25.6823C3.68201 26.5873 4.42051 27.8677 5.08569 28.7144C5.28847 28.9726 5.46007 29.1838 5.46704 29.1838C5.47401 29.1838 5.6499 29.1019 5.85797 29.0018C6.9199 28.4911 7.41931 28.2685 7.75538 28.156C8.84313 27.7923 10.6613 27.5569 11.9016 27.6193C13.0552 27.6773 19.1029 27.6755 19.9489 27.6168C20.8339 27.5556 21.3544 27.4508 21.8641 27.2317C22.0326 27.1592 22.5497 26.945 23.0132 26.7558C23.4767 26.5666 23.8904 26.3844 23.9325 26.3509C23.9746 26.3174 24.4125 26.1151 24.9056 25.9013C25.3985 25.6875 25.8639 25.4785 25.9398 25.4369C26.1046 25.3464 26.7031 25.0749 28.1459 24.4362C28.7358 24.175 29.3908 23.8801 29.6015 23.7807C29.8121 23.6813 30.1913 23.5082 30.4441 23.3959C30.9494 23.1716 31.5685 22.8852 32.5271 22.4323C32.8722 22.2693 33.176 22.1359 33.2023 22.1359C33.3114 22.1359 34.0727 21.7548 34.1216 21.6758C34.1508 21.6286 34.1109 21.5184 34.0331 21.431C33.6878 21.0433 33.0148 20.9649 32.1243 21.2088C31.3567 21.419 30.3156 21.7408 30.1377 21.8229C30.0534 21.8618 29.7087 21.9821 29.3716 22.0902C28.435 22.3907 26.3777 23.1102 26.0973 23.2354C25.96 23.2967 25.6753 23.405 25.4647 23.4762C25.254 23.5473 24.7369 23.7255 24.3155 23.8722C23.4751 24.1648 20.8901 24.7179 20.019 24.7916C19.3457 24.8486 19.1069 24.7946 18.9464 24.5496C18.6687 24.1258 18.8766 23.5401 19.3728 23.3487C19.639 23.246 20.7345 23.0583 21.0775 23.0566C21.3624 23.0552 23.1116 22.7759 24.1983 22.5581C24.9659 22.4045 25.5385 22.109 25.6908 21.7881C25.8397 21.4743 25.839 21.4096 25.6839 21.1729L25.5585 20.9815L23.7879 21.0032C22.8141 21.0153 21.7071 21.0326 21.3279 21.0418Z"
                fill="#EF4444"
              />
            </svg>
            <div aria-label="Logo name and Slogan" className="flex flex-col">
              <p className="text-[18px] font-semibold">NomNom</p>
              <p className="text-[12px] text-[#71717A] font-normal">
                Swift delivery
              </p>
            </div>
          </div>
          <div
            aria-label="Food Menu"
            className={`flex gap-2.5 px-6 py-2 items-center cursor-pointer 
        ${
          foodMenu ? "text-white bg-[#18181B] rounded-full" : "text-[#18181B]"
        }`}
            onClick={() => {
              setFoodMenu(true);
              setOrderMenu(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M6 0.5H1.41667C0.910406 0.5 0.5 0.910406 0.5 1.41667V7.83333C0.5 8.33959 0.910406 8.75 1.41667 8.75H6C6.50626 8.75 6.91667 8.33959 6.91667 7.83333V1.41667C6.91667 0.910406 6.50626 0.5 6 0.5Z"
                stroke={foodMenu ? "#FFF" : "#09090B"}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.0833 0.5H11.5C10.9937 0.5 10.5833 0.910406 10.5833 1.41667V4.16667C10.5833 4.67293 10.9937 5.08333 11.5 5.08333H16.0833C16.5896 5.08333 17 4.67293 17 4.16667V1.41667C17 0.910406 16.5896 0.5 16.0833 0.5Z"
                stroke={foodMenu ? "#FFF" : "#09090B"}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.0833 8.75H11.5C10.9937 8.75 10.5833 9.16041 10.5833 9.66667V16.0833C10.5833 16.5896 10.9937 17 11.5 17H16.0833C16.5896 17 17 16.5896 17 16.0833V9.66667C17 9.16041 16.5896 8.75 16.0833 8.75Z"
                stroke={foodMenu ? "#FFF" : "#09090B"}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 12.4167H1.41667C0.910406 12.4167 0.5 12.8271 0.5 13.3333V16.0833C0.5 16.5896 0.910406 17 1.41667 17H6C6.50626 17 6.91667 16.5896 6.91667 16.0833V13.3333C6.91667 12.8271 6.50626 12.4167 6 12.4167Z"
                stroke={foodMenu ? "#FFF" : "#09090B"}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Food Menu</p>
          </div>
          <div
            aria-label="Orders of users"
            className={`flex gap-2.5 px-6 py-2 items-center cursor-pointer
            
            ${
              orderMenu
                ? "text-white bg-[#18181B] rounded-full"
                : "text-[#18181B]"
            }
                    `}
            onClick={() => {
              {
                setOrderMenu(true);
                setFoodMenu(false);
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="15"
              viewBox="0 0 20 15"
              fill="none"
            >
              <path
                d="M7.83333 11.5H11.5M11.5 11.5V0.5H0.5V11.5H3.25M11.5 11.5H12.4167M17 11.5H18.8333V8.43833C18.8337 7.95668 18.7392 7.47967 18.5552 7.03455C18.3711 6.58944 18.1012 6.18494 17.7608 5.84417L16.0833 4.16667H11.5M7.83333 11.9583C7.83333 13.224 6.80732 14.25 5.54167 14.25C4.27601 14.25 3.25 13.224 3.25 11.9583C3.25 10.6927 4.27601 9.66667 5.54167 9.66667C6.80732 9.66667 7.83333 10.6927 7.83333 11.9583ZM17 11.9583C17 13.224 15.974 14.25 14.7083 14.25C13.4427 14.25 12.4167 13.224 12.4167 11.9583C12.4167 10.6927 13.4427 9.66667 14.7083 9.66667C15.974 9.66667 17 10.6927 17 11.9583Z"
                stroke={orderMenu ? "#FFF" : "#09090B"}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Order</p>
          </div>
        </div>

        {foodMenu && !orderMenu && (
          <FoodMenu
            activePopUpMenu={activePopUpMenu}
            setActivePopUpMenu={setActivePopUpMenu}
            addDishClicked={addDishClicked}
            setAddDishClicked={setAddDishClicked}
            isEditDishClicked={isEditDishClicked}
            setEditDishClicked={setEditDishClicked}
            loading={loading}
            categories={categories}
            createCategory={createCategory}
          />
        )}
        {orderMenu && !foodMenu && (
          <Order
            deliveryBadgeClicked={deliveryBadgeClicked}
            setDeliveryBadgeClicked={setDeliveryBadgeClicked}
            deliveryButtonClicked={deliveryButtonClicked}
            setDeliveryButtonClicked={setDeliveryButtonClicked}
          />
        )}
      </div>
    </>
  );
};

export default Admin;
