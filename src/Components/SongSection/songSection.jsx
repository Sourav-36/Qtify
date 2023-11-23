import "./songSection.css";
import Carousel from "../Carousel/carousel.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

const SongSection = ({ url }) => {
  let [value, setValue] = useState("0");
  let [songsData, setSongsData] = useState([]);
  let genres = ["rock", "pop", "jazz", "blues"];
  let getSongs = async () => {
    let resp = await axios.get(url + "/songs");
    return resp.data;
  };

  useEffect(() => {
    (async () => {
      let resSongs = await getSongs();
      setSongsData(resSongs);
    })();
  }, []);

  useEffect(() => {
    let songListByTab = async () => {
      let resSongs = await getSongs();
      let filteredRes = resSongs.filter((obj) => {
        if (value > 0) return obj.genre.key === genres[value - 1];
        return obj.genre.key !== "";
      });
      setSongsData(filteredRes);
    };
    songListByTab();
  }, [value]);

  return (
    <div className="songContainer">
      <div className="songTitle">Songs</div>
      <div className="tabContainer">
        <div
          className={`tab ${value === "0" ? "active" : ""}`}
          id="0"
          onClick={(e) => setValue(e.target.id)}
        >
          All
        </div>
        <div
          className={`tab ${value === "1" ? "active" : ""}`}
          id="1"
          onClick={(e) => setValue(e.target.id)}
        >
          Rock
        </div>
        <div
          className={`tab ${value === "2" ? "active" : ""}`}
          id="2"
          onClick={(e) => setValue(e.target.id)}
        >
          Pop
        </div>
        <div
          className={`tab ${value === "3" ? "active" : ""}`}
          id="3"
          onClick={(e) => setValue(e.target.id)}
        >
          Jazz
        </div>
        <div
          className={`tab ${value === "4" ? "active" : ""}`}
          id="4"
          onClick={(e) => setValue(e.target.id)}
        >
          Blues
        </div>
      </div>
      <div className="songListContainer">
        <Carousel data={songsData} />
      </div>
    </div>
  );
};

export default SongSection;
