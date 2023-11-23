import "./card.css";

const Card = ({ albumData }) => {
  return (
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
};

export default Card;
