import "./card.css";
import Tooltip from "@mui/material/Tooltip";
import { useHistory } from "react-router-dom";

const Card = ({ albumData }) => {
  let history = useHistory();
  let card = (
    <div
      className="cardContainer"
      onClick={() => {
        if (albumData.follows !== undefined) {
          history.push("/playlist", { albumData });
        }
      }}
    >
      <div className="cardImageContentContainer">
        <img
          src={albumData.image}
          className="cardImage"
          alt="Img not available"
        />
        <div className="followersContainer">
          <div className="followersPill">
            {albumData.follows !== undefined
              ? `${albumData.follows} follows`
              : `${albumData.likes} likes`}
          </div>
        </div>
      </div>
      <div className="cardContent">{albumData.title}</div>
    </div>
  );
  return (
    <>
      {albumData.follows !== undefined ? (
        <Tooltip
          key={albumData.id}
          title={`${albumData.songs.length} songs`}
          placement="top"
          arrow
        >
          {card}
        </Tooltip>
      ) : (
        <>{card}</>
      )}
    </>
  );
};

export default Card;
