import ChevronLeft from "../../_components/icons/ChevronLeft";
import page from "../page";

const Backbutton = ({ step, setStep }) => {
  console.log("STEP:", step);

  return (
    <div
      aria-label="Button to go back"
      className=" w-8 h-8 flex items-center justify-center  border-[#E4E4E7] border rounded-md cursor-pointer"
      onClick={() => setStep((prevStep) => prevStep - 1)}
    >
      <ChevronLeft />
    </div>
  );
};

export default Backbutton;
