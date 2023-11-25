import "./list.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ListCard from "./listCard.jsx";

const AlbumSongList = ({ text, url }) => {
  let [list, setList] = useState([]);
  console.log(list);

  let getTopAlbums = async () => {
    let resp = await axios.get(url + "/albums/top");
    return resp.data;
  };
  let getNewAlbums = async () => {
    let resp = await axios.get(url + "/albums/new");
    return resp.data;
  };

  useEffect(() => {
    let setFilteredList = async () => {
      let resTop = await getTopAlbums();
      let resNew = await getNewAlbums();
      let filteredList = [];
      resTop.forEach((obj) => {
        if (obj.title.toLowerCase().includes(text.toLowerCase())) {
          filteredList.push(obj);
        }
      });
      resNew.forEach((obj) => {
        if (obj.title.toLowerCase().includes(text.toLowerCase())) {
          filteredList.push(obj);
        }
      });
      setList(filteredList);
    };

    setFilteredList();
  }, [text]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="listContainer">
        <div className="cardListWrapper">
          {list !== undefined ? (
            list.map((obj, id1) =>
              obj.songs.map((song, id2) => (
                <ListCard
                  key={`${id1}${id2}`}
                  albumData={obj}
                  artist={song.artists}
                  image={song.image}
                />
              ))
            )
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlbumSongList;
