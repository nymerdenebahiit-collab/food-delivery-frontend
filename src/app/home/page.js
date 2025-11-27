import Header from "./_features/header";
import Footer from "./_features/footer";
import { Menu } from "./_features/menu";
import HeaderLoggedIn from "./_features/header(logged in)";
import { Card } from "../_components/card";

const Home = () => {
  return (
    <div className="flex flex-col w-[1440px] bg-[#71717A]">
      <Header />
      {/* <HeaderLoggedIn /> */}
      <div className="w-full h-[570px] bg-center bg-cover bg-[url(./_components/images/SpecialDealOfferAd.png)]"></div>
      <Menu />
      {/* <Card /> */}
      <Footer />
    </div>
  );
};

export default Home;
