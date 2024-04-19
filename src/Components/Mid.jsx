/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Mid = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={5}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
      autoplay={{
        delay: 3600,
        disableOnInteraction: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide>
        <div className="middle"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="middle"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="middle"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="middle"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="middle"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="middle"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="middle"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="middle"></div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Mid;
