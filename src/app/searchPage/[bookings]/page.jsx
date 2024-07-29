"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { MdKeyboardArrowDown, MdOutlineDoorBack } from "react-icons/md";
import { SiTicktick } from "react-icons/si";
import styles from "./bookingStyle.module.css";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { SlCalender } from "react-icons/sl";
import { GrLike } from "react-icons/gr";
import { AiOutlineSafety } from "react-icons/ai";
import { IoIosArrowUp } from "react-icons/io";
import "./bookingStyles.css";
import { CiCreditCard1 } from "react-icons/ci";
import { LiaWalletSolid } from "react-icons/lia";
import { LuPiSquare } from "react-icons/lu";
import { IoMdLaptop } from "react-icons/io";

const BookingPage = ({ params }) => {
  const [bookedItem, setBookedItem] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [ratingValue, setRatingValue] = useState(null);
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Credit/Debit/ATM Cards",
    "Wallets",
    "Pay by any UPI app",
    "Netbanking",
  ];

  useEffect(() => {
    fetch("../search.json")
      .then((res) => res.json())
      .then((data) => {
        setBookedItem(
          data.find((item) => item.id === parseInt(params.bookings))
        );
      });
  }, [params]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

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
            {show ? (
              <div className=''>
                <div className='border border-[#edfef3] rounded px-6 py-[14px]'>
                  <div className='flex justify-between items-center'>
                    <div className='flex gap-4 items-center'>
                      <p className='text-xs w-fit rounded font-bold py-[3px] px-[7px] text-[#1ab64e] bg-[#1ab64f1f]'>
                        1
                      </p>
                      <h4 className='text-xl font-bold'>Your Details</h4>
                    </div>
                    <div>
                      <button
                        onClick={() => setShow(false)}
                        className='border border-[#f0f0f0] rounded text-sm font-semibold text-[#ee2e24] py-[6px] px-3'>
                        Modify
                      </button>
                    </div>
                  </div>
                  <div className='text-sm flex items-center'>
                    <div className='px-5 py-[10px]'>Cold</div>
                    <div className='h-5 w-0 border-l border-color7'></div>
                    <div className='px-5 py-[10px]'>rocky@dey.com</div>
                    <div className='h-5 w-0 border-l border-color7'></div>
                    <div className='px-5 py-[10px]'>7543074253</div>
                  </div>
                </div>
                <div className='my-6 rounded border border-[#7a7a7a2b]'>
                  <div className='mt-5'>
                    <h3 className='mb-[10px] text-xl font-bold'>
                      Choose payment method to pay
                    </h3>
                    <p className='bg-[#F5F5F5] flex items-center gap-2 text-sm py-2 px-4 text-[#141414]'>
                      <AiOutlineSafety />
                      <span>100% safe and secure payments</span>
                    </p>
                  </div>
                  <div className='px-6 py-8 space-x-9'>
                    <div className='w-[40%]'>
                      <div className='shadow-lg flex items-center justify-between px-6 py-[18px] border border-[#f0f1f3] rounded mb-3'>
                        <p className='text-base font-bold'>Pay Now</p>
                        <p>
                          <IoIosArrowUp />
                        </p>
                      </div>
                      <div>
                        <div className='vertical-tabs'>
                          {tabs.map((tab, index) => (
                            <div
                              key={index}
                              className={`tab-item flex items-center gap-2 ${
                                activeTab === index ? "active" : ""
                              }`}
                              onClick={() => setActiveTab(index)}>
                              {tab === "Credit/Debit/ATM Cards" ? (
                                <CiCreditCard1 className='text-2xl' />
                              ) : tab === "Wallets" ? (
                                <LiaWalletSolid className='text-2xl' />
                              ) : tab === "Pay by any UPI app" ? (
                                <LuPiSquare className='text-2xl' />
                              ) : (
                                <IoMdLaptop className='text-2xl' />
                              )}
                              <span>{tab}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className='w-[60%]'></div>
                  </div>
                </div>
              </div>
            ) : (
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
                      <div>
                        <div>
                          <label
                            htmlFor='file'
                            className='block text-base font-semibold mb-[9px]'>
                            Upload NID
                          </label>
                          <input
                            type='file'
                            className='py-3'
                            name='file'
                            id='file'
                          />
                        </div>
                      </div>
                    </div>
                    <div className='grid grid-cols-2 gap-7'>
                      <div>
                        <button
                          onClick={() => setShow(true)}
                          className='w-full bg-[#1ab64f] cursor-pointer text-color4 mt-4 text-base font-bold rounded p-[14px]'>
                          Pay Now
                        </button>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='w-[420px]'>
          <div
            className={`${styles.booking_container} rounded border border-[#7a7a7a2b] p-6`}>
            <div className='flex'>
              <div className='space-y-2'>
                <h3 className='text-base font-bold'>{bookedItem.room_name}</h3>
                <div
                  onClick={() => {
                    openModal();
                    setRatingValue(bookedItem.ratings);
                  }}
                  className='flex relative items-center gap-[9px] cursor-pointer'>
                  <p className='flex items-center gap-1 text-xs rounded-sm font-semibold bg-[#52b520] px-[6px] py-[3px] w-fit text-color4'>
                    {bookedItem.rate} <FaStar />
                  </p>
                  <div className='flex items-center gap-2 text-xs text-[#6d787d] font-normal'>
                    <p>({bookedItem.ratings} Ratings)</p>
                    <p className='w-[3px] h-[3px] bg-[#6d787d] border-[#6d787d] border rounded-full'></p>
                    <p>{bookedItem.rate >= 4.0 ? "Vary Good" : "Good"}</p>
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
                            Rated by {ratingValue} guests who stayed with OYO in
                            the past
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
                <p className='text-xs font-bold'>1 Night</p>
              </div>
              <div>
                <Image
                  src={bookedItem?.image && bookedItem?.image[0]}
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
