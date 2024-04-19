/* eslint-disable no-unused-vars */
import React from "react";
import "./Top.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




const Top = () => {
   
  return (

    <Swiper
    spaceBetween={50}
    slidesPerView={3}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}

    loop = {true}
    autoplay={{
        delay: 3550,
        disableOnInteraction: true,
    }}
    navigation={false}
    modules={[Autoplay, Pagination, Navigation]}
  >
<div className="head">
    <SwiperSlide>
        <div className="top">
      
        </div></SwiperSlide>
    <SwiperSlide>
        <div className="top">
      
        </div></SwiperSlide>
    <SwiperSlide>
        <div className="top">
      
        </div></SwiperSlide>
    <SwiperSlide>
        <div className="top">
      
        </div></SwiperSlide>
    <SwiperSlide>
        <div className="top">
      
        </div></SwiperSlide>
    <SwiperSlide>
        <div className="top">
      
        </div></SwiperSlide>
    <SwiperSlide>
        <div className="top">
      
        </div></SwiperSlide>
    <SwiperSlide>
        <div className="top">
      
        </div></SwiperSlide>
        </div>

  </Swiper>








  );
};

export default Top;
