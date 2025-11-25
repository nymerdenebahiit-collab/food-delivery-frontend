import NomNomLogoRed from "../../Components/Icons/NomNomLogoRed";
import ShoppingCart from "@/app/Components/Icons/Shoppingcart(2)";
import HumanIcon from "@/app/Components/Icons/HumanIcon";
import Location from "@/app/Components/Icons/Location";
import ChevronLeft from "@/app/Components/Icons/ChevronLeft";

const HeaderLoggedIn = () => {
  return (
    <div className="w-full bg-black flex justify-between items-center">
      <div aria-label="Logo and slogan section" className="flex gap-3">
        <NomNomLogoRed />
        <div
          aria-label="slogan"
          className="flex flex-col font-600 text-5 text-white tracking-tighter whitespace"
        >
          {" "}
          <div>
            Nom<span className="text-red-500">Nom</span>{" "}
          </div>
          <div className="font-400 text-white">Swift delivery</div>
        </div>
      </div>

      <div
        aria-label="Delivery, Items in Cart and User settings section"
        className="flex gap-3 items-center"
      >
        <div
          aria-label="Delivery address"
          className="flex bg-white py-2 px-3 items-center rounded-full"
        >
          <svg
            aria-label="Location"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="19"
            viewBox="0 0 15 19"
            fill="none"
          >
            <path
              d="M14.0833 7.41667C14.0833 12.4167 7.41667 17.4167 7.41667 17.4167C7.41667 17.4167 0.75 12.4167 0.75 7.41667C0.75 5.64856 1.45238 3.95286 2.70262 2.70262C3.95286 1.45238 5.64856 0.75 7.41667 0.75C9.18478 0.75 10.8805 1.45238 12.1307 2.70262C13.381 3.95286 14.0833 5.64856 14.0833 7.41667Z"
              stroke="#EF4444"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.41667 9.91667C8.79738 9.91667 9.91667 8.79738 9.91667 7.41667C9.91667 6.03595 8.79738 4.91667 7.41667 4.91667C6.03596 4.91667 4.91667 6.03595 4.91667 7.41667C4.91667 8.79738 6.03596 9.91667 7.41667 9.91667Z"
              stroke="#EF4444"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="text-red-500">Delivery address: </p>
          <span className="text-[#71717A">Add Location</span>
          <svg
            aria-label="ChevronLeft"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M7.5 15L12.5 10L7.5 5"
              stroke="#18181B"
              stroke-opacity="0.5"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div
          aria-label="Shopping"
          className="rounded-full w-8 h-8  bg-white flex items-center justify-center"
        >
          <svg
            aria-label="Shopping Cart Icon"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <path
              d="M0.5 0.5H1.83333L3.60667 8.78C3.67172 9.08324 3.84045 9.35432 4.08381 9.54657C4.32717 9.73883 4.62994 9.84023 4.94 9.83333H11.46C11.7635 9.83284 12.0577 9.72886 12.294 9.53856C12.5304 9.34825 12.6948 9.08302 12.76 8.78667L13.86 3.83333H2.54667M5.13333 13.1333C5.13333 13.5015 4.83486 13.8 4.46667 13.8C4.09848 13.8 3.8 13.5015 3.8 13.1333C3.8 12.7651 4.09848 12.4667 4.46667 12.4667C4.83486 12.4667 5.13333 12.7651 5.13333 13.1333ZM12.4667 13.1333C12.4667 13.5015 12.1682 13.8 11.8 13.8C11.4318 13.8 11.1333 13.5015 11.1333 13.1333C11.1333 12.7651 11.4318 12.4667 11.8 12.4667C12.1682 12.4667 12.4667 12.7651 12.4667 13.1333Z"
              stroke="#18181B"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <div></div>
        </div>
        <div
          aria-label="User"
          className="w-8 h-8 flex items-center justify-center bg-red-500 rounded-full"
        >
          <svg
            aria-label="User Icon"
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="13"
            viewBox="0 0 11 13"
            fill="none"
          >
            <path
              d="M9.83333 12.5V11.1667C9.83333 10.4594 9.55238 9.78115 9.05228 9.28105C8.55219 8.78095 7.87391 8.5 7.16667 8.5H3.16667C2.45942 8.5 1.78115 8.78095 1.28105 9.28105C0.780951 9.78115 0.5 10.4594 0.5 11.1667V12.5M7.83333 3.16667C7.83333 4.63943 6.63943 5.83333 5.16667 5.83333C3.69391 5.83333 2.5 4.63943 2.5 3.16667C2.5 1.69391 3.69391 0.5 5.16667 0.5C6.63943 0.5 7.83333 1.69391 7.83333 3.16667Z"
              stroke="#FAFAFA"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeaderLoggedIn;
