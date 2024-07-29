"use client";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { SiTicktick } from "react-icons/si";

const BookingPage = ({ params }) => {
  console.log(params.bookings);
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
        <div className='w-[420px]'></div>
      </div>
    </div>
  );
};

export default BookingPage;
