import "./list.css";

const ListCard = ({ albumData, artist, image }) => {
  let artists = artist.join();
  return (
    <div className="cardList">
      <div className="imageContainer">
        <img src={image} />
      </div>
      <div className="contentContainer">
        <div className="textContainer">
          <div>{albumData.title}</div>
          <div style={{ fontSize: "12px" }}>{artists}</div>
        </div>
        <div>{albumData.follows} follows</div>
      </div>
    </div>
  );
};

export default ListCard;
