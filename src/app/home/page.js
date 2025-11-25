import Header from "./_features/header";
import Footer from "./_features/footer";
import HeaderLoggedIn from "./_features/header(logged in)";

const Home = () => {
  return (
    <div className="flex flex-col justify-between w-max">
      {/* <Header /> */}
      <HeaderLoggedIn />

      <Footer />
    </div>
  );
};

export default Home;
