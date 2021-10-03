import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./styles.css";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

function ProjectGallary({projectGallaryImages}) {
  return (
    <Swiper
      slidesPerView={1.5}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      className="mySwiper"
      navigation={true}
    >
      {projectGallaryImages?.map((carousel_image) => (
        <SwiperSlide key={carousel_image.id} className="carousel_items">
          {" "}
          <img src={carousel_image.image} alt="" />{" "}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ProjectGallary;
