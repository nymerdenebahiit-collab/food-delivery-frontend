import NomNomLogoRed from "../../Components/Vectors/NomNomLogoRed"


const Header = () => {
  return ( <div className="w-max bg-black">

<div aria-label="Logo and slogan section" className="flex gap-3">
  <NomNomLogoRed/>
  <div aria-label="slogan" className="flex flex-col font-600 text-5 text-white tracking-tighter whitespace">  <div>Nom<span className="text-red-500">Nom</span> </div>
  <div className="font-400 text-white">Swift delivery</div></div>

</div>


  </div> )
};

export default Header;
