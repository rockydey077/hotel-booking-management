"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import styles from "./styles.module.css";

const ImageSlider = ({ room, categories }) => {
  const [currentImages, setCurrentImages] = useState(categories["bedroom"]);
  const [reverse, setReverse] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeCategory, setActiveCategory] = useState("room");

  const handlePrevClick = (swiper) => {
    setReverse(true);
    // console.log(swiper.slides.length, swiper.realIndex);
    if (swiper.slides.length === 5) {
      setActiveCategory("room");
      if (parseInt(swiper.realIndex) === 0) {
        setCurrentImages(categories["washroom"]);
      }
    } else {
      setActiveCategory("washroom");
      if (parseInt(swiper.realIndex) === 0) {
        setCurrentImages(categories["bedroom"]);
      }
    }
  };

  const handleNextClick = (swiper) => {
    setReverse(false);
    // console.log(swiper);
    if (swiper.slides.length === 5) {
      setActiveCategory("room");
      if (parseInt(swiper.activeIndex) === 4) {
        setCurrentImages(categories["washroom"]);
      }
    } else {
      setActiveCategory("washroom");
      if (parseInt(swiper.realIndex) === 2) {
        setCurrentImages(categories["bedroom"]);
      }
    }
  };

  const handleRoom = () => {
    setActiveCategory("room");
    setCurrentImages(categories["bedroom"]);
  };

  const handleWashroom = () => {
    setActiveCategory("washroom");
    setCurrentImages(categories["washroom"]);
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
      <div className=''>
        <div className='max-w-screen-xl mx-auto'>
          <Swiper
            thumbs={{ swiper: thumbsSwiper }}
            onSwiper={(swiper) => {
              // Custom navigation buttons
              swiper.navigation.nextEl.onclick = () => handleNextClick(swiper);
              swiper.navigation.prevEl.onclick = () => handlePrevClick(swiper);
            }}
            navigation
            loop={true}
            spaceBetween={10}
            modules={[FreeMode, Navigation, Thumbs]}
            className='mySwiper2 mb-10' // Disable Swiper's loop, we'll handle it manually
          >
            {reverse
              ? currentImages.reverse().map((src, index) => (
                  <SwiperSlide key={index} className=''>
                    <Image
                      src={src}
                      className='block mx-auto'
                      alt={`Image ${index + 1}`}
                      width={620}
                      height={280}
                    />
                  </SwiperSlide>
                ))
              : currentImages.map((src, index) => (
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
            style={{
              "--swiper-navigation-background": "transparent",
            }}
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={0}
            slidesPerView={6}
            freeMode={true}
            navigation={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className={`mySwiper`}>
            {room?.image?.map((img, idx) => (
              <SwiperSlide className='' key={idx}>
                <Image
                  src={img}
                  alt={room.room_name}
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

export default ImageSlider;
