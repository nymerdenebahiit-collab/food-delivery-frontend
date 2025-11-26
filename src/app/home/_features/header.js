import NomNomLogoRed from "../../_components/icons/NomNomLogoRed";

const Header = () => {
  return (
    <div className="w-[1440px] h-[148px] bg-[#18181B] flex items-center justify-between px-22 py-3">
      <div aria-label="Logo and slogan section" className="flex gap-3">
        <NomNomLogoRed />
        <div
          aria-label="slogan"
          className="flex flex-col text-[20px] text-white"
        >
          {" "}
          <div className="font-semibold">
            Nom<span className="text-red-500 font-semibold">Nom</span>{" "}
          </div>
          <div className="font-400 text-[12px]">Swift delivery</div>
        </div>
      </div>
      <div aria-label="Right section">
        <div
          aria-label="User register and login section"
          className="flex gap-3"
        >
          <div className="text-[#00000f] h-9 flex items-center py-2 px-3 rounded-full  bg-[#F4f4f5]">
            Sign up
          </div>
          <div className="text-[#ffffff] h-9 flex items-center py-2 px-3 bg-red-500 rounded-full ">
            Log in
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
