import ChevronLeft from "../../components/vectors/ChevronLeft";

const Backbutton = () => {
  return (
    <div
      aria-label="Button to go back"
      className=" w-8 h-8 flex items-center justify-center  border-[#E4E4E7] border rounded-md cursor-pointer"
    >
      <ChevronLeft />
    </div>
  );
};

export default Backbutton;
