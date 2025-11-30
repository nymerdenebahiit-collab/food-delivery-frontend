import { Card } from "@/app/_components/card";

export const Dishmenu = ({ title, foodCounter }) => {
  return (
    <div className="bg-[#FFF] flex flex-col p-5 rounded-xl">
      <div className="flex gap-2 text-[#09090B] font-semibold text-xl">
        <p>{title}</p>
        <p> ({foodCounter})</p>
      </div>
      <Card />
    </div>
  );
};
