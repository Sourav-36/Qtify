import "./album.css";
import Card from "../Card/card.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material";

const Album = () => {
  let ROOT_URL = "https://qtify-backend-labs.crio.do";
  let [topAlbums, setTopAlbums] = useState([]);
  let [newAlbums, setNewAlbums] = useState([]);

  let getTopAlbums = async () => {
    let resp = await axios.get(ROOT_URL + "/albums/top");
    return resp.data;
  };

  let getNewAlbums = async () => {
    let resp = await axios.get(ROOT_URL + "/albums/new");
    return resp.data;
  };

  useEffect(() => {
    (async () => {
      let res = await getTopAlbums();
      setTopAlbums(res);
      let res1 = await getNewAlbums();
      setNewAlbums(res1);
    })();
  }, []);

  return (
    <div className="albumContainer">
      <div className="topAlbumContainer">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0px 16px",
          }}
        >
          <div className="albumContent">Top Albums</div>
          <div className="showCollapse">Show All</div>
        </div>
        <Grid container sx={{ rowGap: "12px" }}>
          {topAlbums.map((album) => (
            <Grid
              key={album.id}
              item
              xs={6}
              md={3}
              lg={2}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card albumData={album} />
            </Grid>
          ))}
        </Grid>
      </div>

      <div className="newAlbumContainer">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0px 16px",
          }}
        >
          <div className="albumContent">New Albums</div>
          <div className="showCollapse">Show All</div>
        </div>
        <Grid container sx={{ rowGap: "12px" }}>
          {newAlbums.map((album) => (
            <Grid
              key={album.id}
              item
              xs={6}
              md={3}
              lg={2}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card albumData={album} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Album;
