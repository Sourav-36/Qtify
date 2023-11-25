import "./footer.css";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import Slider from "@mui/material/Slider";
import { useState } from "react";

const Footer = () => {
  let [position, setPosition] = useState(32);
  let [isClick, setIsClick] = useState(false);

  let formatDuration = (val) => {
    const minute = Math.floor(val / 60);
    const secondLeft = val - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  };
  return (
    <div className="footerContainer">
      <div className="contentFooterContainer">
        <div className="imageFooterContainer">
          <img src="album_image.png" />
        </div>
        <div className="textFooterContainer">
          <div>Song Name</div>
          <div style={{ fontSize: "12px" }}>Album name</div>
        </div>
      </div>
      <div className="sliderFooterContainer">
        <div className="sliderFooterWrapper">
          <div
            style={{ width: "48px", height: "48px", cursor: "pointer" }}
            onClick={() => setIsClick(!isClick)}
          >
            {isClick ? (
              <PauseCircleFilledIcon
                sx={{
                  color: "var(--css-white)",
                  width: "100%",
                  height: "100%",
                }}
              />
            ) : (
              <PlayCircleFilledIcon
                sx={{
                  color: "var(--css-white)",
                  width: "100%",
                  height: "100%",
                }}
              />
            )}
          </div>
          <div
            style={{
              width: "51.6%",
              display: "flex",
              color: "var(--css-white)",
            }}
          >
            <div
              style={{
                marginRight: "4px",
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {formatDuration(position)}
            </div>
            <Slider
              aria-label="time-indicator"
              size="small"
              value={position}
              min={0}
              step={1}
              max={200}
              onChange={(_, val) => setPosition(val)}
              sx={{
                color: "var(--css-primary)",
                height: "5px",
                "& .MuiSlider-thumb": {
                  width: 8,
                  height: 8,

                  "&.Mui-active": {
                    width: 8,
                    height: 8,
                  },
                },
              }}
            ></Slider>
            <div
              style={{
                marginLeft: "4px",
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {formatDuration(200)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
