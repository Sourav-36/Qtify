import "./heroSection.css";

const HeroSection = () => {
  return (
    <div className="heroBackgroundLayout">
      <div className="heroWrapper">
        <div className="heroTextContainer">
          <div className="heroText">
            <div>100 Thousand songs, ad free</div>
            <div>Over thousands podcast episodes</div>
          </div>
        </div>
        <div className="heroImageContainer">
          <img src="./vibrating_headphone.png" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
