import "./albumSection.css";
import Card from "../Card/card.jsx";
import Carousel from "../Carousel/carousel.jsx";
import { useState } from "react";

const Album = ({ text, data }) => {
  let [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="albumContent">{text}</div>
        <div
          className="showCollapse"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? "Show All" : "Collapse"}
        </div>
      </div>
      {isCollapsed ? (
        <Carousel data={data} />
      ) : (
        <div className="cardListContainer">
          {data.map((album) => (
            <Card key={album.id} albumData={album} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Album;
