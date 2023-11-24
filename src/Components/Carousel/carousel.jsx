import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Card from "../Card/card.jsx";

import "swiper/css";
import "swiper/css/navigation";

import "./carousel.css";

const Carousel = ({ data }) => {
  return (
    <Swiper
      slidesPerView={7}
      spaceBetween={40}
      navigation={true}
      loop={true}
      modules={[Navigation]}
    >
      {data.map((album) => (
        <SwiperSlide key={album.id}>
          <Card albumData={album} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
