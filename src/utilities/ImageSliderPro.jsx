"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import "./ImageSliderPro.css";

const ImageSliderPro = ({ room }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { images } = room;
  const [imageShow, setImageShow] = useState(images);
  const [activeCategory, setActiveCategory] = useState("room");
  const roomLength = images?.filter((img) => img.category === "bedroom").length;
  const washroomLength = images?.filter(
    (img) => img.category === "washroom"
  ).length;
  console.log(imageShow);
  const swiperRef = useRef(null);
  const swiperRef2 = useRef(null);

  const handleRoom = () => {
    const roomImage = imageShow.filter((image) => image.category === "bedroom");
    const washroomImage = imageShow.filter(
      (image) => image.category === "washroom"
    );
    const allImage = [...roomImage, ...washroomImage];
    setImageShow(allImage);
    swiperRef.current.slideTo(0, 0);
    swiperRef2.current.slideTo(0, 0);
  };

  const handleWashroom = () => {
    const washroomImage = imageShow.filter(
      (image) => image.category === "washroom"
    );
    const roomImage = imageShow.filter((image) => image.category === "bedroom");
    const allImage = [...washroomImage, ...roomImage];
    setImageShow(allImage);
    swiperRef.current.slideTo(0, 0);
    swiperRef2.current.slideTo(0, 0);
  };

  const handleSlideChange = (swiper) => {
    const image = imageShow[swiper.realIndex];
    if (image.category === "bedroom") {
      setActiveCategory("room");
    } else {
      setActiveCategory("washroom");
    }
  };

  return (
    <div>
      <div className='mb-10 max-w-screen-xl mx-auto '>
        <div role='tablist' className='font-semibold'>
          <a
            onClick={() => {
              setActiveCategory("room");
              handleRoom();
            }}
            role='tab'
            className={`${
              activeCategory === "room" && "border-b-2 border-color4"
            } tab cursor-pointer text-color4 text-lg `}>
            Room ({roomLength})
          </a>
          <a
            onClick={() => {
              setActiveCategory("washroom");
              handleWashroom();
            }}
            role='tab'
            className={`${
              activeCategory === "washroom" && "border-b-2 border-color4"
            } tab inline-block ml-5 cursor-pointer text-color4 text-lg`}>
            Washroom ({washroomLength})
          </a>
        </div>
      </div>
      <div>
        <div className='max-w-screen-xl mx-auto'>
          <Swiper
            spaceBetween={10}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => handleSlideChange(swiper)}
            navigation={true}
            loop={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className='mySwiper mb-10'>
            {imageShow.map((src, index) => (
              <SwiperSlide key={index} className=''>
                <Image
                  src={src?.url}
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
            loop={true}
            onSwiper={(swiper) => {
              setThumbsSwiper(swiper);
              swiperRef2.current = swiper;
            }}
            spaceBetween={0}
            slidesPerView={6}
            freeMode={true}
            navigation={true}
            observeParents={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className='mySwiper2'>
            {imageShow.map((src, index) => (
              <SwiperSlide key={index} className=''>
                <Image
                  src={src?.url}
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
