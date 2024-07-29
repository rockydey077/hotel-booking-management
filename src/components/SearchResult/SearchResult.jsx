"use client";
import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
import Image from "next/image";
import { FaAirFreshener, FaPollH, FaStar, FaTv, FaWifi } from "react-icons/fa";
import { FaElevator, FaKitchenSet } from "react-icons/fa6";
import { TbAirConditioning } from "react-icons/tb";
import Link from "next/link";
import "./searchResultStyle.css";
import { GrLike, GrUserPolice } from "react-icons/gr";
import styles from "./RatingModal.module.css";

const SearchResult = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [images, setImages] = useState([]);
  const [idx, setIdx] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [ratingValue, setRatingValue] = useState(null);

  useEffect(() => {
    fetch("search.json")
      .then((res) => res.json())
      .then((data) => {
        setSearchResult(data);
      });
  }, []);

  const handleSetImg = (id, img) => {
    const findResult = searchResult.filter((result) => result.id === id);
    const imageContainer = findResult[0]?.image;
    if (imageContainer) {
      const restImage = imageContainer.filter((i) => i !== img);
      const findImage = imageContainer.find((i) => i === img);
      setImages([findImage, ...restImage]);
    }
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className='flex items-center justify-between pb-4 border-b border-color7'>
        <h3 className='text-xl font-bold text-[#333]'>
          303 OYOs in Kolkata, West Bengal, India
        </h3>
        <div className='flex items-center gap-20'>
          <div className='flex items-center gap-3'>
            <p className='text-sm font-normal text-[#222]'>Map View</p>
            <input type='checkbox' className='toggle text-[#2196f3]' />
          </div>
          <div className='flex items-center gap-3 justify-between'>
            <div>
              <p className='text-sm text-[#222] font-normal'>Sort By</p>
            </div>
            <div>
              <select className='select text-[#222] outline-none border border-[#a6a6a6]  rounded-[2px] w-full max-w-xs'>
                <option value='Popularity' selected>
                  Popularity
                </option>
                <option value='Guest Ratings'>Guest Ratings</option>
                <option value='Price Low to High'>Price Low to High</option>
                <option value='Price High to Low'>Price High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className=''>
        <div className=''>
          {searchResult.map((result) => (
            <div
              key={result.id}
              className='flex gap-4 py-10 items-center border-b border-color7'>
              <div className='w-[43%] flex gap-[3px]'>
                {/* <Swiper
                  navigation={true}
                  modules={[Navigation]}
                  className='mySwiper w-[84.4%]'>
                  {result?.image.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <Image
                        src={img}
                        className='w-full'
                        width={400}
                        height={200}
                        alt=''
                      />
                    </SwiperSlide>
                  ))}
                </Swiper> */}
                <div className='relative w-[84.3%]'>
                  <div className='carousel'>
                    {result.id === idx
                      ? images.map((img, index) => (
                          <div
                            key={index}
                            id={`result${result.id}slide${index + 1}`}
                            className='carousel-item relative w-full cursor-pointer slider-container'>
                            <Image
                              src={img}
                              className='w-full'
                              width={400}
                              height={200}
                              alt=''
                            />
                            <div className='slider-button '>
                              <a
                                onClick={() => setIdx(null)}
                                href={`#result${result.id}slide${
                                  index + 1 === 1 ? 8 : index + 1 - 1
                                }
                      `}
                                className='btn btn-circle bg-[#00000047] hover:bg-[#00000047] border-none text-color4'>
                                ❮
                              </a>
                              <a
                                onClick={() => setIdx(null)}
                                href={`#result${result.id}slide${
                                  index + 1 === 8 ? 1 : index + 1 + 1
                                }
                      `}
                                className='btn btn-circle bg-[#00000047] hover:bg-[#00000047] border-none text-color4'>
                                ❯
                              </a>
                            </div>
                          </div>
                        ))
                      : result?.image.map((img, index) => (
                          <div
                            key={index}
                            id={`result${result.id}slide${index + 1}`}
                            className='carousel-item relative w-full cursor-pointer slider-container'>
                            <Image
                              src={img}
                              className='w-full'
                              width={400}
                              height={200}
                              alt=''
                            />
                            <div className='slider-button '>
                              <a
                                onClick={() => setIdx(null)}
                                href={`#result${result.id}slide${
                                  index + 1 === 1 ? 8 : index + 1 - 1
                                }
                          `}
                                className='btn btn-circle bg-[#00000047] hover:bg-[#00000047] border-none text-color4'>
                                ❮
                              </a>
                              <a
                                onClick={() => setIdx(null)}
                                href={`#result${result.id}slide${
                                  index + 1 === 8 ? 1 : index + 1 + 1
                                }
                          `}
                                className='btn btn-circle bg-[#00000047] hover:bg-[#00000047] border-none text-color4'>
                                ❯
                              </a>
                            </div>
                          </div>
                        ))}
                  </div>
                  <div className='absolute shadow-2xl text-[#222] flex items-center gap-1 top-3 left-3 bg-color4 px-1 py-[2px] rounded-sm text-xs font-normal'>
                    <GrUserPolice />
                    <p>
                      {result?.type && result?.type}
                      <span className='font-semibold'>Serviced</span>
                    </p>
                  </div>
                </div>
                <div className='space-y-1 w-[15.6%]'>
                  {result?.image.slice(0, 5).map((img, index) => (
                    <Image
                      onClick={() => {
                        setIdx(result.id);
                        handleSetImg(result.id, img);
                      }}
                      src={img}
                      width={500}
                      height={37}
                      alt=''
                      className='w-full cursor-pointer'
                      key={index}
                    />
                  ))}
                </div>
              </div>
              <div className='w-[57%] flex flex-col gap-6'>
                <div className='flex gap-6 items-center'>
                  <div className='w-[80%]'>
                    <h3 className='text-xl font-bold text-[#222]'>
                      {result.room_name.slice(0, 35)}
                      {result.room_name.length >= 35 && "..."}
                    </h3>
                    <p className='text-base font-normal text-[#222]'>
                      {result.location}
                    </p>
                  </div>
                  <div className='w-[20%] text-xs font-semibold text-color10'>
                    {Math.floor(Math.random() * 10) + 1}k+ people booked this
                    OYO in last {Math.floor(Math.random() * 10) + 1} months
                  </div>
                </div>
                <div className='flex-1 space-y-2'>
                  <div
                    onClick={() => {
                      openModal();
                      setRatingValue(result.ratings);
                    }}
                    className='flex relative items-center gap-[9px] cursor-pointer'>
                    <p className='flex items-center gap-1 text-xs rounded-sm font-semibold bg-[#52b520] px-[6px] py-[3px] w-fit text-color4'>
                      {result.rate} <FaStar />
                    </p>
                    <div className='flex items-center gap-2 text-xs text-[#6d787d] font-normal'>
                      <p>({result.ratings} Ratings)</p>
                      <p className='w-[3px] h-[3px] bg-[#6d787d] border-[#6d787d] border rounded-full'></p>
                      <p>{result.rate >= 4.0 ? "Vary Good" : "Good"}</p>
                    </div>
                    {isOpen && (
                      <div
                        className={`${styles.modal} rounded`}
                        onClick={closeModal}>
                        <div
                          className={`${styles.modalContent} rounded`}
                          onClick={(e) => e.stopPropagation()}>
                          <div className='bg-color7 p-4'>
                            <span className={styles.close} onClick={closeModal}>
                              &times;
                            </span>
                            <h3 className='text-base font-bold text-[#222]'>
                              Rating Details
                            </h3>
                            <p className='text-xs font-normal text-[#222]'>
                              Rated by {ratingValue} guests who stayed with OYO
                              in the past
                            </p>
                          </div>
                          <div className='p-4 space-y-3'>
                            <div className='flex items-center justify-between text-sm'>
                              <p>Breakfast:</p>
                              <p className='flex items-center gap-1'>
                                100% <GrLike />
                              </p>
                            </div>
                            <div className='flex items-center justify-between text-sm'>
                              <p>Wifi:</p>
                              <p className='flex items-center gap-1'>
                                100% <GrLike />
                              </p>
                            </div>
                            <div className='flex items-center justify-between text-sm'>
                              <p>Room Hygiene / Linen:</p>
                              <p className='flex items-center gap-1'>
                                100% <GrLike />
                              </p>
                            </div>
                            <div className='flex items-center justify-between text-sm'>
                              <p>Washroom:</p>
                              <p className='flex items-center gap-1'>
                                100% <GrLike />
                              </p>
                            </div>
                            <div className='flex items-center justify-between text-sm'>
                              <p>Hotel Staff:</p>
                              <p className='flex items-center gap-1'>
                                100% <GrLike />
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className='flex items-center gap-6'>
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
                      className='text-[#222] px-4 py-2 border-2 border-[#222] rounded-[2px]'>
                      View Details
                    </Link>
                    <Link
                      href={`/searchPage/${result.id}`}
                      className='bg-[#1ab64f] px-4 py-2 border-none rounded text-color4'>
                      Book Now
                    </Link>
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
