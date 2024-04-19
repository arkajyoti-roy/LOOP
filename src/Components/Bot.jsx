/* eslint-disable no-unused-vars */
import React from "react";

import "./Top.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Bot = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
      autoplay={{
        delay: 3400,
        disableOnInteraction: true,
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide>
        <div className="last"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="last"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="last"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="last"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="last"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="last"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="last"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="last"></div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Bot;
