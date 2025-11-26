import { Card } from "./card";
import { Submenu } from "../_components/submenu";

export const Menu = () => {
  return (
    <div className="bg-[#71717A] w-full my-22 flex flex-col gap-[54px]">
      <Submenu title="Appetizers" />
      <Submenu title="Salads" />
      <Submenu title="Lunch favorites" />
      <Submenu title="Salads" />
    </div>
  );
};
