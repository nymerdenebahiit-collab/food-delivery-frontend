import NomNomLogoRed from "../../Components/Icons/NomNomLogoRed";

const Header = () => {
  return (
    <div className="w-full bg-black flex justify-between px-22 py-3">
      <div aria-label="Logo and slogan section" className="flex gap-3">
        <NomNomLogoRed />
        <div
          aria-label="slogan"
          className="flex flex-col font-semibold text-5 text-white tracking-tighter whitespace"
        >
          {" "}
          <div>
            Nom<span className="text-red-500">Nom</span>{" "}
          </div>
          <div className="font-400 text-white">Swift delivery</div>
        </div>
      </div>
      <div aria-label="Right section">
        <div
          aria-label="User register and login section"
          className="flex gap-3"
        >
          <div className="text-[#00000f] flex items-center py-2 px-3 rounded-full  bg-[#F4f4f5]  ">
            Sign up
          </div>
          <div className="text-[#ffffff] flex items-center py-2 px-3 bg-red-500 rounded-full ">
            Log in
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
