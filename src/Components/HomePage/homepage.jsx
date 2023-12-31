import "./homepage.css";
import Navbar from "../Navbar/navbar.jsx";
import AlbumSongList from "../AlbumSongList/list.jsx";
import HeroSection from "../HeroSection/heroSection.jsx";
import AlbumSection from "../AlbumSection/albumSection.jsx";
import SongSection from "../SongSection/songSection.jsx";
import Faq from "../Faq/faq.jsx";
import Footer from "../Footer/footer.jsx";
import FormFeedback from "../FormFeedback/form.jsx";
import { useState } from "react";

const HomePage = () => {
  let ROOT_URL = "https://qtify-backend-labs.crio.do";
  let [text, setText] = useState("");
  let [clickFeedbackBtn, setClickFeedbackBtn] = useState(false);
  let handleChange = (e) => {
    setText(e.target.value);
  };

  let handleClick = () => {
    setClickFeedbackBtn(!clickFeedbackBtn);
  };

  return (
    <div className="home">
      {clickFeedbackBtn ? (
        <>
          <div
            style={{
              position: "absolute",
              zIndex: "4",
              backgroundColor: "var(--css-black)",
              opacity: "90%",
              width: "100%",
              height: "100%",
            }}
            onClick={handleClick}
          ></div>
          <div
            style={{
              position: "sticky",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              top: "100px",
              zIndex: "5",
            }}
          >
            <FormFeedback isFeedbackBtnClicked={handleClick} />
          </div>
        </>
      ) : (
        <></>
      )}
      <Navbar
        text={text}
        handleChange={handleChange}
        isFeedbackBtnClicked={handleClick}
      />
      {text !== "" ? <AlbumSongList text={text} url={ROOT_URL} /> : <></>}
      <HeroSection />
      <AlbumSection url={ROOT_URL} />
      <SongSection url={ROOT_URL} />
      <Faq url={ROOT_URL} />
      <div style={{ position: "sticky", bottom: "0", zIndex: "2" }}>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
