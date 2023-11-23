import "./homepage.css";
import Navbar from "../Navbar/navbar.jsx";
import HeroSection from "../HeroSection/heroSection.jsx";
import AlbumSection from "../AlbumSection/albumSection.jsx";
import SongSection from "../SongSection/songSection.jsx";

const HomePage = () => {
  let ROOT_URL = "https://qtify-backend-labs.crio.do";
  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      <AlbumSection url={ROOT_URL} />
      <SongSection url={ROOT_URL} />
    </div>
  );
};

export default HomePage;
