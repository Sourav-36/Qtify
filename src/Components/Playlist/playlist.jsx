import "./playlist.css";
import Navbar from "../Navbar/navbar.jsx";
import Footer from "../Footer/footer.jsx";
import AlbumSongList from "../AlbumSongList/list.jsx";
import FormFeedback from "../FormFeedback/form.jsx";
import { useState } from "react";

const Playlist = () => {
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
    <div className="playlistHome">
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
      <div
        style={{
          height: "800px",
          width: "100%",
          backgroundColor: "var(--css-black)",
        }}
      ></div>
      <div style={{ position: "sticky", bottom: "0", zIndex: "2" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Playlist;
