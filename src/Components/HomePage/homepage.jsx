import "./homepage.css";
import Navbar from "../Navbar/navbar.jsx";
import AlbumSongList from "../AlbumSongList/list.jsx";
import HeroSection from "../HeroSection/heroSection.jsx";
import AlbumSection from "../AlbumSection/albumSection.jsx";
import SongSection from "../SongSection/songSection.jsx";
import Faq from "../Faq/faq.jsx";
import Footer from "../Footer/footer.jsx";
import { useState } from "react";

const HomePage = () => {
  let ROOT_URL = "https://qtify-backend-labs.crio.do";
  let [text, setText] = useState("");
  let handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="home">
      <Navbar text={text} handleChange={handleChange} />
      {text !== "" ? <AlbumSongList text={text} url={ROOT_URL} /> : <></>}
      <HeroSection />
      <AlbumSection url={ROOT_URL} />
      <SongSection url={ROOT_URL} />
      <Faq url={ROOT_URL} />
      <Footer />
    </div>
  );
};

export default HomePage;
