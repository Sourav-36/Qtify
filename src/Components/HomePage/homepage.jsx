import "./homepage.css";
import Navbar from "../Navbar/navbar.jsx";
import HeroSection from "../HeroSection/heroSection.jsx";
import Album from "../Album/album.jsx";

const HomePage = () => {
  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      <Album />
    </div>
  );
};

export default HomePage;
