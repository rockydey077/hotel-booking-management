"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

const ImageSliderPro = ({ room }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const images = room.image;
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(images.length);
  const [activeCategory, setActiveCategory] = useState("room");
  console.log(activeCategory);

  const handleSlideChange = (swiper) => {
    console.log(swiper);
    if (swiper.realIndex === 7 && swiper.previousRealIndex === 0) {
      setActiveCategory("washroom");
    }
    if (swiper.realIndex === 0 && swiper.previousRealIndex === 7) {
      setActiveCategory("room");
    }
    if (swiper.realIndex === 4 && swiper.previousRealIndex === 5) {
      setActiveCategory("room");
    }
    if (swiper.realIndex === 5 && swiper.previousRealIndex === 4) {
      setActiveCategory("washroom");
    }
    if (swiper.realIndex === 0 && swiper.previousRealIndex === 2) {
      setStart(0);
      setEnd(images.length);
      setActiveCategory("room");
    }
    if (swiper.realIndex === 0 && swiper.previousRealIndex === 4) {
      setStart(5);
      setEnd(images.length);
      setActiveCategory("washroom");
    }
  };

  const handleRoom = () => {
    setStart(0);
    setEnd(5);
    setActiveCategory("room");
  };

  const handleWashroom = () => {
    setStart(5);
    setEnd(images.length);
    setActiveCategory("washroom");
  };

  return (
    <div>
      <div className='mb-10 max-w-screen-xl mx-auto '>
        <div role='tablist' className='font-semibold'>
          <a
            onClick={handleRoom}
            role='tab'
            className={`${
              activeCategory === "room" && "border-b-2 border-color4"
            } tab cursor-pointer text-color4 text-lg `}>
            Room ({room?.categories?.bedroom.length})
          </a>
          <a
            onClick={handleWashroom}
            role='tab'
            className={`${
              activeCategory === "washroom" && "border-b-2 border-color4"
            } tab inline-block ml-5 cursor-pointer text-color4 text-lg`}>
            Washroom ({room?.categories?.washroom.length})
          </a>
        </div>
      </div>
      <div>
        <div className='max-w-screen-xl mx-auto'>
          <Swiper
            spaceBetween={10}
            onSlideChange={(swiper) => handleSlideChange(swiper)}
            navigation
            loop={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className='mySwiper2 mb-10'>
            {images.slice(start, end).map((src, index) => (
              <SwiperSlide key={index} className=''>
                <Image
                  src={src}
                  className='block mx-auto'
                  alt={`Image ${index + 1}`}
                  width={620}
                  height={280}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='max-w-screen-xl mx-auto'>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={0}
            slidesPerView={6}
            freeMode={true}
            navigation={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className='mySwiper'>
            {images.map((src, index) => (
              <SwiperSlide key={index} className=''>
                <Image
                  src={src}
                  className='block mx-auto'
                  alt={`Image ${index + 1}`}
                  width={220}
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

export default ImageSliderPro;
