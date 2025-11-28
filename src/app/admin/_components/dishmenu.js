import { Card } from "@/app/_components/card";

export const Dishmenu = ({ title }) => {
  return (
    <div className="bg-{#E4E4E5}  p-5 rounded-xl">
      {title}
      <Card />
    </div>
  );
};
