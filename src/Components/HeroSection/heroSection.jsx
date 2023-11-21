import "./heroSection.css";

const HeroSection = () => {
  return (
    <div className="heroBackgroundLayout">
      <div className="heroLayout">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="heroText">
            <div>100 Thousand songs, ad free</div>
            <div>Over thousands podcast episodes</div>
          </div>
        </div>
        <div className="heroImage">
          <img src="./vibrating_headphone.png" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
