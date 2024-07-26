"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";

const SearchResult = () => {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    fetch("search.json")
      .then((res) => res.json())
      .then((data) => setSearchResult(data));
  }, []);

  return (
    <div>
      <div className='flex items-center justify-between pb-4 border-b border-color7'>
        <h3 className='text-xl font-bold text-[#333]'>
          303 OYOs in Kolkata, West Bengal, India
        </h3>
        <div className='flex items-center gap-20'>
          <div className='flex items-center gap-2'>
            <p className='text-sm font-normal text-[#222]'>Map View</p>
            <input type='checkbox' className='toggle text-[#2196f3]' />
          </div>
          <div className='flex items-center gap-3'>
            <p className='text-sm text-[#222] font-normal'>Sort By</p>
            <select
              name=''
              id=''
              className='text-[#222] outline-none border border-[#a6a6a6] p-[10px] rounded-[2px]'>
              <option value='Popularity'>Popularity</option>
              <option value='Guest Ratings'>Guest Ratings</option>
              <option value='Price Low to High'>Price Low to High</option>
              <option value='Price High to Low'>Price High to Low</option>
            </select>
          </div>
        </div>
      </div>
      <div className=''>
        <div className=''>
          {searchResult.map((result) => (
            <div
              key={result.id}
              className='flex gap-4 py-10 border-b border-color7'>
              <div className='lg:w-2/5 flex gap-[2px]'>
                <Swiper
                  navigation={true}
                  modules={[Navigation]}
                  className='mySwiper'>
                  {result?.image.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <Image src={img} width={400} height={200} alt='' />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className='space-y-[3px]'>
                  {result?.room.map((img, index) => (
                    <Image
                      src={img}
                      width={517}
                      height={120}
                      alt=''
                      key={index}
                    />
                  ))}
                </div>
              </div>
              <div className='lg:w-[80%]'>
                <div className="flex gap-10 items-center">
                  <div className="lg:w-3/4">
                    <h3 className='text-xl font-bold text-[#222]'>
                      {result.room_name.slice(0, 40)}
                      {result.room_name.length >= 40 && "..."}
                    </h3>
                    <p className='text-base font-normal text-[#222]'>
                      {result.location}
                    </p>
                  </div>
                  <div className='lg:w-[20%] text-xs font-semibold text-color10'>
                    {Math.floor(Math.random() * 10) + 1}k+ people booked this
                    OYO in last {Math.floor(Math.random() * 10) + 1} months
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
