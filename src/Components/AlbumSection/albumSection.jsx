import "./albumSection.css";
import Album from "./album.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

const AlbumSection = ({ url }) => {
  let [topAlbums, setTopAlbums] = useState([]);
  let [newAlbums, setNewAlbums] = useState([]);

  let getTopAlbums = async () => {
    let resp = await axios.get(url + "/albums/top");
    return resp.data;
  };

  let getNewAlbums = async () => {
    let resp = await axios.get(url + "/albums/new");
    return resp.data;
  };

  useEffect(() => {
    (async () => {
      let resTop = await getTopAlbums();
      setTopAlbums(resTop);
      let resNew = await getNewAlbums();
      setNewAlbums(resNew);
    })();
  }, []);

  return (
    <div className="albumContainer">
      <Album text={"Top Albums"} data={topAlbums} />
      <Album text={"New Albums"} data={newAlbums} />
    </div>
  );
};

export default AlbumSection;
