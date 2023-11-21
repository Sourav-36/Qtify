import "./homepage.css";
import Navbar from "../Navbar/navbar.jsx";
import HeroSection from "../HeroSection/heroSection.jsx";

const HomePage = () => {
  return (
    <div className="home">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default HomePage;
