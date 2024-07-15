"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

const ImageSlider = ({ room }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper2 mb-10'>
        {room?.image?.map((img, idx) => (
          <SwiperSlide key={idx} className="">
            <Image src={img} className="block mx-auto" alt={room.room_name} width={740} height={280} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={0}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper'>
        {room?.image?.map((img, idx) => (
          <SwiperSlide key={idx}>
            <Image src={img} alt={room.room_name} width={300} height={200} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
