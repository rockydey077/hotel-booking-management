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
  const [activeCategory, setActiveCategory] = useState("room");

  const handleRoom = () => {
    setActiveCategory("room");
  };

  const handleWashroom = () => {
    setActiveCategory("washroom");
  };

  return (
    <div>
      <div className='mb-10'>
        <div
          role='tablist'
          className='tabs tabs-bordered text-color4 text-center text-lg'>
          <a
            onClick={handleRoom}
            role='tab'
            className={`${
              activeCategory === "room" && "text-color1"
            } tab cursor-pointer`}>
            Room ({room?.categories?.room.length})
          </a>
          <a
            onClick={handleWashroom}
            role='tab'
            className={`${
              activeCategory === "washroom" && "text-color1"
            } tab inline-block ml-5 cursor-pointer`}>
            Washroom ({room?.categories?.washroom.length})
          </a>
        </div>
      </div>
      <div className=''>
        <Swiper
          style={{
            "--swiper-navigation-color": "#2ECA7F",
            "--swiper-pagination-color": "#2ECA7F",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className='mySwiper2 mb-10'>
          {activeCategory === "room"
            ? room?.categories?.room?.map((img, idx) => (
                <SwiperSlide key={idx} className=''>
                  <Image
                    src={img}
                    className='block mx-auto'
                    alt={room.room_name}
                    width={780}
                    height={280}
                  />
                </SwiperSlide>
              ))
            : room?.categories?.washroom?.map((img, idx) => (
                <SwiperSlide key={idx} className=''>
                  <Image
                    src={img}
                    className='block mx-auto'
                    alt={room.room_name}
                    width={780}
                    height={280}
                  />
                </SwiperSlide>
              ))}
        </Swiper>
        <div className='max-w-screen-xl mx-auto'>
          <Swiper
            style={{
              "--swiper-navigation-color": "#2ECA7F",
              "--swiper-pagination-color": "#2ECA7F",
            }}
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={0}
            slidesPerView={5}
            freeMode={true}
            navigation={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className='mySwiper'>
            {room?.image?.map((img, idx) => (
              <SwiperSlide className='' key={idx}>
                <Image
                  src={img}
                  alt={room.room_name}
                  width={300}
                  height={200}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
