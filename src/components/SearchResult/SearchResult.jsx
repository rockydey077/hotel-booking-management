"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { FaAirFreshener, FaStar, FaTv, FaWifi } from "react-icons/fa";
import { FaElevator, FaKitchenSet } from "react-icons/fa6";
import { TbAirConditioning } from "react-icons/tb";
import Link from "next/link";

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
              <div className='lg:w-2/5 flex gap-[3px]'>
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
                <div className='space-y-1'>
                  {result?.room.map((img, index) => (
                    <Image
                      src={img}
                      width={563}
                      height={120}
                      alt=''
                      key={index}
                    />
                  ))}
                </div>
              </div>
              <div className='lg:w-3/5 flex flex-col gap-6'>
                <div className='flex gap-10 items-center'>
                  <div className='lg:w-[80%]'>
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
                <div className='flex-1 space-y-2'>
                  <div className='flex items-center gap-[9px]'>
                    <p className='flex items-center gap-1 text-xs font-semibold bg-[#52b520] px-[6px] py-[3px] w-fit text-color4'>
                      {result.rate} <FaStar />
                    </p>
                    <div className='flex items-center gap-2 text-xs text-[#6d787d] font-normal'>
                      <p>({result.ratings} Ratings)</p>
                      <p className='w-[3px] h-[3px] bg-[#6d787d] border-[#6d787d] border rounded-full'></p>
                      <p>{result.ratings >= 4 ? "Vary Good" : "Good"}</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-3'>
                    {result.tv && (
                      <p className='flex items-center text-sm text-[#222] gap-1'>
                        <FaTv /> TV
                      </p>
                    )}

                    {result.wifi && (
                      <p className='flex items-center text-sm text-[#222] gap-1'>
                        <FaWifi /> Free Wifi
                      </p>
                    )}

                    {result.elevator && (
                      <p className='flex items-center text-sm text-[#222] gap-1'>
                        <FaElevator /> Elevator
                      </p>
                    )}

                    {result.kitchen && (
                      <p className='flex items-center text-sm text-[#222] gap-1'>
                        <FaKitchenSet /> Kitchen
                      </p>
                    )}

                    {result.room_type && (
                      <p className='flex items-center text-sm text-[#222] gap-1'>
                        <TbAirConditioning /> AC
                      </p>
                    )}

                    <p className='text-sm text-[#222]'>
                      + {Math.floor(Math.random() * 20) + 1} more
                    </p>
                  </div>
                </div>
                <div className='flex justify-between items-end'>
                  <div>
                    <p className='text-2xl font-bold text-[#222]'>
                      ₹{result.price}
                    </p>
                    <div className='text-[#6d787d] text-xs font-normal'>
                      <span>+ ₹132 taxes & fees </span>· per room per night
                    </div>
                  </div>
                  <div className='text-base font-bold space-x-4'>
                    <Link
                      href={`/${result.id}`}
                      className='text-[#222] px-4 py-2 border border-[#222] rounded-[2px]'>
                      View Details
                    </Link>
                    <button className='bg-[#1ab64f] px-4 py-2 border border-[#1ab64f] rounded-sm text-color4'>
                      Book Now
                    </button>
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
