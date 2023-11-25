import "./card.css";
import Tooltip from "@mui/material/Tooltip";

const Card = ({ albumData }) => {
  let card = (
    <div className="cardContainer">
      <div className="cardImageContentContainer">
        <img src={albumData.image} className="cardImage" />
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
