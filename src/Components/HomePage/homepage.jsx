import "./homepage.css";
import Navbar from "../Navbar/navbar.jsx";
import HeroSection from "../HeroSection/heroSection.jsx";
import AlbumSection from "../AlbumSection/albumSection.jsx";

const HomePage = () => {
  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      <AlbumSection />
    </div>
  );
};

export default HomePage;
