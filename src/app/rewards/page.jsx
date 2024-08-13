"use client";
import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaStar } from "react-icons/fa6";
import medal from "../../../public/assets/icons/medal.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { PiLockKeyOpenFill } from "react-icons/pi";
import { TiLockClosed } from "react-icons/ti";
import { GrStatusGood } from "react-icons/gr";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import Image from "next/image";
import MyPoints from "@/components/MyPoints";
import MorePoints from "@/components/MorePoints";

const redeems = [
  {
    id: 1,
    image: "https://i.ibb.co/mCQDks5/gift-card.jpg",
    title: "The welcome pack",
    redeemed: true,
    point: 500,
  },
  {
    id: 2,
    image: "https://i.ibb.co/mCQDks5/gift-card.jpg",
    title: "Amazon gift card",
    point: 600,
  },
  {
    id: 3,
    image: "https://i.ibb.co/mCQDks5/gift-card.jpg",
    title: "Swiggy food card",
    point: 1000,
  },
  {
    id: 4,
    image: "https://i.ibb.co/mCQDks5/gift-card.jpg",
    title: "Raymond shopping card",
    point: 700,
  },
  {
    id: 5,
    image: "https://i.ibb.co/mCQDks5/gift-card.jpg",
    title: "The welcome pack",
    point: 400,
  },
  {
    id: 6,
    image: "https://i.ibb.co/mCQDks5/gift-card.jpg",
    title: "Swiggy food card",
    point: 1200,
  },
  {
    id: 7,
    image: "https://i.ibb.co/mCQDks5/gift-card.jpg",
    title: "Amazon gift card",
    point: 900,
  },
  {
    id: 8,
    image: "https://i.ibb.co/mCQDks5/gift-card.jpg",
    title: "Raymond shopping card",
    point: 800,
  },
];

const RewardPage = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <div className='max-w-screen-xl mx-auto'>
      {/* heading part */}
      <div className='bg-[#FFD555] flex items-center gap-4 py-5 px-5 rounded-t-2xl'>
        <h2 className='font-pacifico text-3xl font-bold'>Rewards</h2>
        <Image
          width={200}
          height={200}
          className='w-5 h-5 -rotate-12'
          src={medal}
          alt='medal'
        />
      </div>
      <div className='bg-[#F8F4F2] p-5'>
        <div className='flex flex-col lg:flex-row gap-6 lg:gap-[2%]'>
          <div className='w-full lg:w-[34%]'>
            <h4 className='text-2xl font-bold mb-5'>My Points</h4>
            <div className='bg-[#fff] p-5 rounded-2xl h-[286px] flex justify-center items-center'>
              <MyPoints />
            </div>
          </div>
          <div className='w-full lg:w-[64%]'>
            <h4 className='text-2xl font-bold mb-5'>Earn more points</h4>
            <div className='bg-[#fff] p-5 rounded-2xl'>
              <MorePoints />
            </div>
          </div>
        </div>
        <div className='pt-5'>
          <div className='flex justify-between items-center mb-5'>
            <h4 className='text-2xl font-bold'>Redeem</h4>
            <div className='space-x-3'>
              <button
                disabled={activeIndex === 0}
                onClick={handlePrev}
                className='p-3 bg-[#fff] shadow-md rounded-xl disabled:bg-[#EBEBE4] disabled:text-color8 disabled:cursor-default'>
                <FaAngleLeft />
              </button>
              <button
                disabled={
                  isMobile
                    ? activeIndex === redeems.length - 1
                    : activeIndex === redeems.length / 2 
                }
                onClick={handleNext}
                className='p-3 bg-[#fff] shadow-md rounded-xl disabled:bg-[#EBEBE4] disabled:text-color8 disabled:cursor-default'>
                <FaAngleRight />
              </button>
            </div>
          </div>
          <div>
            <Swiper
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              ref={swiperRef}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              //   pagination={{
              //     clickable: true,
              //   }}
              modules={[Pagination]}
              className='mySwiper'>
              {redeems.map((redeem) => (
                <SwiperSlide key={redeem.id}>
                  <div className='bg-[#fff] rounded-xl'>
                    <div>
                      <Image
                        width={200}
                        height={200}
                        className='rounded-t-xl w-full'
                        src={redeem.image}
                        alt=''
                      />
                    </div>
                    <div className='p-5 space-y-2'>
                      <div>
                        {redeem.point <= 600 ? (
                          <div className='flex w-fit items-center gap-1 px-3 border rounded-full border-black'>
                            <PiLockKeyOpenFill />
                            <p>unlocked</p>
                          </div>
                        ) : (
                          <div className='flex w-fit items-center gap-1 px-3 border rounded-full border-black'>
                            <TiLockClosed className='text-lg' />
                            <p>locked</p>
                          </div>
                        )}
                      </div>
                      <div>
                        <h1 className='text-lg font-semibold'>
                          {redeem.title}
                        </h1>
                      </div>
                      <div>
                        <progress
                          className='progress progress-warning w-full'
                          value='600'
                          max={redeem.point}></progress>
                      </div>
                      <div className='flex justify-between items-center'>
                        <div className='flex gap-2 items-center'>
                          <div className='text-[#FFC102] text-xs p-[3px] border-2 border-[#FFD24D] rounded-full w-fit'>
                            <FaStar />
                          </div>
                          <p className='text-[#FFC102] text-base'>
                            {redeem.point}
                          </p>
                        </div>
                        <div>
                          {redeem.redeemed && (
                            <p className='text-[#FFC102] text-sm font-semibold'>
                              Redeemed
                            </p>
                          )}
                        </div>
                      </div>
                      <div>
                        {redeem.redeemed ? (
                          <button className='flex gap-2 rounded-xl justify-center items-center w-full bg-[#F8F4F2] py-1 font-semibold cursor-default'>
                            <GrStatusGood /> Earned
                          </button>
                        ) : (
                          <button
                            disabled={redeem.point > 600}
                            className={`${
                              redeem.point <= 600 ? "bg-[#FFD555]" : "border-2"
                            } text-center w-full py-1 rounded-xl font-semibold disabled:cursor-not-allowed disabled:text-[#BFBEBD]`}>
                            Redeem
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardPage;
