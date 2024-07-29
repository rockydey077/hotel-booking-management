"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { MdKeyboardArrowDown, MdOutlineDoorBack } from "react-icons/md";
import { SiTicktick } from "react-icons/si";
import styles from "./bookingStyle.module.css";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { SlCalender } from "react-icons/sl";

const BookingPage = ({ params }) => {
  const [bookedItem, setBookedItem] = useState({});

  useEffect(() => {
    fetch("../search.json")
      .then((res) => res.json())
      .then((data) => {
        setBookedItem(
          data.find((item) => item.id === parseInt(params.bookings))
        );
      });
  }, [params]);

  return (
    <div className='max-w-[1130px] mx-auto'>
      <div className='flex text-[#ee2b24] items-center gap-1 text-base font-semibold mt-[52px] mb-7'>
        <IoIosArrowBack className='text-2xl font-light' />
        <p>Modify your booking</p>
      </div>
      <div className='flex gap-6 px-5'>
        <div className='w-[646px]'>
          <div className='flex gap-1 mb-4 justify-center border border-[#f5a62330] p-4 bg-[#fef6e9] rounded'>
            <span>🎉</span>
            <p className='text-[#d38b17] text-base'>
              Yay! you just saved ₹1786 on this booking!
            </p>
          </div>
          <div>
            <div className='border border-[#edfef3] rounded'>
              <div className='flex items-center gap-3 px-6 py-[14px] bg-[#f9fffb]'>
                <p className='text-xs font-bold text-color4 w-fit px-[7px] bg-color3 rounded'>
                  1
                </p>
                <p className='text-xl text-color3 font-bold'>
                  Enter your details
                </p>
              </div>
              <div className='px-6 py-6'>
                <p className='font-sm mb-6'>
                  We will use these details to share your booking information
                </p>
                <div>
                  <div className='grid grid-cols-2 gap-7'>
                    <div>
                      <label
                        htmlFor='name'
                        className='block text-base font-semibold mb-[9px]'>
                        Full Name
                      </label>
                      <input
                        className='text-[#000000de] font-semibold outline-none rounded-sm border py-3 pl-4 w-full mb-3 border-[#a6a6a639]'
                        type='text'
                        name='name'
                        id='name'
                        defaultValue='Cold'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='email'
                        className='block text-base font-semibold mb-[9px]'>
                        Email
                      </label>
                      <input
                        className='text-[#000000de] font-semibold outline-none rounded-sm border py-3 pl-4 w-full mb-3 border-[#a6a6a639]'
                        type='email'
                        name='email'
                        id='email'
                        defaultValue='rocky@dey.com'
                      />
                    </div>
                  </div>
                  <div className='grid grid-cols-2 gap-7'>
                    <div>
                      <div>
                        <label
                          htmlFor='number'
                          className='block text-base font-semibold mb-[9px]'>
                          Mobile Number
                        </label>
                        <div className='text-[#000000de] relative font-semibold outline-none rounded-sm border py-3 pl-4 w-full mb-3 border-[#a6a6a639] flex'>
                          <p className='flex items-center gap-2 cursor-pointer'>
                            <span className='underline'>+1</span>{" "}
                            <MdKeyboardArrowDown className='text-2xl text-[#a6a6a66d]' />
                          </p>
                          <input
                            className='border-l outline-none border-[#a6a6a66d] pl-2 ml-2'
                            type='text'
                            name='number'
                            id='number'
                            defaultValue='7543074253'
                          />
                          <p className='flex absolute top-[35%] right-5 items-center text-xs font-semibold gap-1 text-[#1ab64f]'>
                            <SiTicktick />
                            <span>Verified</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <div className='grid grid-cols-2 gap-7'>
                    <div>
                      <button className='w-full bg-[#1ab64f] cursor-pointer text-color4 mt-4 text-base font-bold rounded p-[14px]'>
                        Pay Now
                      </button>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[420px]'>
          <div
            className={`${styles.booking_container} rounded border border-[#7a7a7a2b] p-6`}>
            <div className='flex'>
              <div className='space-y-2'>
                <h3 className='text-base font-bold'>{bookedItem.room_name}</h3>
                <div className='flex relative items-center gap-[9px] cursor-pointer'>
                  <p className='flex items-center gap-1 text-xs rounded-sm font-semibold bg-[#52b520] px-[6px] py-[3px] w-fit text-color4'>
                    {bookedItem.rate} <FaStar />
                  </p>
                  <div className='flex items-center gap-2 text-xs text-[#6d787d] font-normal'>
                    <p>({bookedItem.ratings} Ratings)</p>
                    <p className='w-[3px] h-[3px] bg-[#6d787d] border-[#6d787d] border rounded-full'></p>
                    <p>{bookedItem.rate >= 4.0 ? "Vary Good" : "Good"}</p>
                  </div>
                </div>
                <p className='text-xs font-bold'>1 Night</p>
              </div>
              <div>
                <Image
                  src={bookedItem.image[0]}
                  width={100}
                  height={200}
                  alt=''
                  className='rounded border w-full'
                />
              </div>
            </div>
            <div className='my-[18px]'>
              <div className='pt-4 flex justify-between items-center mr-8'>
                <div className='flex items-center gap-3 text-sm text-[#0c0a15] font-semibold'>
                  <SlCalender className='text-[#7a7a7aa1] text-xl' />
                  <p>Mon, 29 Jul - Tue, 30 Jul</p>
                </div>
                <div className='text-sm text-[#0c0a15] font-semibold'>
                  1 Room, 1 Guest
                </div>
              </div>
              <div className='my-3 border-b border-[#7a7a7a50]'></div>
              <div className='flex items-center gap-3 pb-3'>
                <MdOutlineDoorBack className='text-[#7a7a7aa1] text-xl' />
                <p className='text-sm text-[#0c0a15] font-semibold'>Classic</p>
              </div>
              <div className='my-4'>
                <div className='my-3 flex items-center justify-between text-sm'>
                  <h3>Room price for 1 Night X 1 Guest</h3>
                  <p className='font-semibold'>₹4258</p>
                </div>
                <div className='my-3 flex items-center justify-between text-sm'>
                  <h3>Instant discount</h3>
                  <p className='font-semibold'>-₹1308</p>
                </div>
                <div className='my-3 flex items-center justify-between text-sm'>
                  <h3>53% Coupon Discount</h3>
                  <p className='font-semibold'>-₹1564</p>
                </div>
                <div className='my-6 border-b border-[#7a7a7a50]'></div>
                <div className='my-3 flex items-center justify-between text-sm'>
                  <h3 className='text-base'>Payable Amount</h3>
                  <p className='font-bold text-[22px]'>₹1386</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
