import "./card.css";

const Card = ({ albumData }) => {
  return (
    <div className="cardContainer">
      <div className="cardImageContainer">
        <img src={albumData.image} className="cardImage" />
        <div className="followersContainer">
          <div className="followersPill">
            <div>{albumData.follows} follows</div>
          </div>
        </div>
      </div>
      <div className="cardContent">{albumData.title}</div>
    </div>
  );
};

export default Card;
