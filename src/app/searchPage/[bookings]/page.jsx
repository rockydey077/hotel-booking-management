"use client";
import React, { useEffect, useState } from "react";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
} from "react-icons/io";
import { MdKeyboardArrowDown, MdOutlineDoorBack } from "react-icons/md";
import { SiTicktick } from "react-icons/si";
import styles from "./bookingStyle.module.css";
import { FaRegCreditCard, FaStar } from "react-icons/fa";
import Image from "next/image";
import { SlCalender } from "react-icons/sl";
import { GrLike } from "react-icons/gr";
import { AiOutlineSafety } from "react-icons/ai";
import { IoIosArrowUp } from "react-icons/io";
import "./bookingStyles.css";
import { CiCircleQuestion, CiCreditCard1 } from "react-icons/ci";
import { LiaWalletSolid } from "react-icons/lia";
import { LuPiSquare } from "react-icons/lu";
import { IoMdLaptop } from "react-icons/io";
import { CiBank } from "react-icons/ci";
import { CiCreditCard2 } from "react-icons/ci";
import Link from "next/link";
import { RxCrossCircled } from "react-icons/rx";
// import { FileUploadWithPreview } from "file-upload-with-preview";

const BookingPage = ({ params }) => {
  const [bookedItem, setBookedItem] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [ratingValue, setRatingValue] = useState(null);
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [bankShow, setBankShow] = useState(false);
  const [gPay, setgPay] = useState(false);
  const [pPay, setpPay] = useState(false);
  const [card, setCard] = useState(false);
  const [file, setFile] = useState([]);

  const handleChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFile((prevFiles) => [...prevFiles, ...newFiles]);
  };

  // useEffect(() => {
  //   const upload = new FileUploadWithPreview("myUniqueUploadId");
  // }, []);

  const tabs = [
    "Credit/Debit/ATM Cards",
    "Wallets",
    "Pay by any UPI app",
    "Netbanking",
  ];

  const banks = [
    "State Bank of India",
    "ICICI Bank",
    "Axis Bank",
    "Kotak Bank",
    "Airtel Payments Bank",
    "Bank of India",
    "Canara Bank",
    "Central Bank of India",
    "DENA Bank",
    "HDFC Bank",
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

  function deleteFile(e) {
    const s = file.filter((item, index) => index !== e);
    setFile(s);
  }

  return (
    <div className='max-w-[1130px] mx-auto'>
      <Link
        href={`/${params.bookings}`}
        className='flex text-[#ee2b24] items-center gap-1 text-base font-semibold mt-[52px] mb-7'>
        <IoIosArrowBack className='text-2xl font-light' />
        <p>Modify your booking</p>
      </Link>
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
                  <div className='px-6 py-8 space-x-9 flex'>
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
                              onClick={() => {
                                setActiveTab(index);
                                setBankShow(false);
                                setgPay(false);
                                setpPay(false);
                                setCard(false);
                              }}>
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
                    <div className='w-[60%]'>
                      {activeTab === 0 && (
                        <div>
                          <div className='border border-[#f0f1f3] rounded-sm py-[10px] px-4'>
                            <div className='mb-4'>
                              <div
                                onClick={() => setCard(!card)}
                                className='flex items-center justify-between cursor-pointer'>
                                <div>
                                  <div className='flex items-center gap-4 mb-[6px]'>
                                    <span>
                                      <CiCreditCard2 className='text-2xl' />
                                    </span>
                                    <p className='text-sm font-semibold text-color3'>
                                      Add new card
                                    </p>
                                  </div>
                                  {card ? (
                                    <p className='text-base font-semibold'>
                                      Your card details
                                    </p>
                                  ) : (
                                    <div className='flex items-center gap-2'>
                                      <p className='text-xs'>We accept</p>
                                      <div className='w-[20px] h-[14px] cursor-pointer'>
                                        <Image
                                          src='https://payments-s3.oyorooms.io/pwa/icons/cards/visa.png'
                                          width={96}
                                          height={72}
                                          alt=''
                                          className='w-full h-full'
                                        />
                                      </div>
                                      <div className='w-[20px] h-[14px] cursor-pointer'>
                                        <Image
                                          src='https://payments-s3.oyorooms.io/pwa/icons/cards/mastercard.png'
                                          width={96}
                                          height={72}
                                          alt=''
                                          className='w-full h-full'
                                        />
                                      </div>
                                      <div className='w-[20px] h-[14px] cursor-pointer'>
                                        <Image
                                          src='https://payments-s3.oyorooms.io/pwa/icons/cards/amex.png'
                                          width={96}
                                          height={72}
                                          alt=''
                                          className='w-full h-full'
                                        />
                                      </div>
                                      <div className='w-[20px] h-[14px] cursor-pointer'>
                                        <Image
                                          src='https://payments-s3.oyorooms.io/pwa/icons/cards/diners.png'
                                          width={96}
                                          height={72}
                                          alt=''
                                          className='w-full h-full'
                                        />
                                      </div>
                                      <div className='w-[20px] h-[14px] cursor-pointer'>
                                        <Image
                                          src='https://payments-s3.oyorooms.io/pwa/icons/cards/rupay.png'
                                          width={96}
                                          height={72}
                                          alt=''
                                          className='w-full h-full'
                                        />
                                      </div>
                                    </div>
                                  )}
                                </div>
                                <p className='text-lg opacity-70'>
                                  {card ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                </p>
                              </div>
                            </div>
                            {card && (
                              <div>
                                <div className='!h-[240px] space-y-3 overflow-x-hidden overflow-y-scroll'>
                                  <div className='border border-[#00000014] rounded-sm p-[14px] flex justify-between items-center'>
                                    <input
                                      type='text'
                                      placeholder='Card number'
                                      name=''
                                      id=''
                                      className='outline-none'
                                    />
                                    <span>
                                      <FaRegCreditCard className='text-2xl opacity-50' />
                                    </span>
                                  </div>
                                  <div className='border border-[#00000014] rounded-sm p-[14px]'>
                                    <input
                                      type='text'
                                      name=''
                                      placeholder='Card holder number'
                                      id=''
                                      className='outline-none w-full'
                                    />
                                  </div>
                                  <div className='flex gap-4'>
                                    <div className='w-[66%] flex items-center gap-[6px] border border-[#00000014] rounded-sm p-[14px]'>
                                      <p className='text-xs text-[#999999]'>
                                        Valid thru
                                      </p>
                                      <select name='' id=''>
                                        <option value='MM'>MM</option>
                                        <option value='01'>01</option>
                                        <option value='02'>02</option>
                                        <option value='03'>03</option>
                                        <option value='04'>04</option>
                                      </select>
                                      <select name='' id=''>
                                        <option value='YYYY'>YYYY</option>
                                        <option value='2019'>2019</option>
                                        <option value='2020'>2020</option>
                                        <option value='2021'>2021</option>
                                        <option value='2022'>2022</option>
                                        <option value='2023'>2023</option>
                                        <option value='2024'>2024</option>
                                      </select>
                                    </div>
                                    <div className='w-[29%] border border-[#00000014] rounded-sm py-[14px] pl-[14px] relative'>
                                      <input
                                        type='text'
                                        name=''
                                        placeholder='CVV'
                                        id=''
                                        className='w-fit outline-none'
                                      />
                                      <span className='absolute top-[36%] right-5'>
                                        <CiCircleQuestion />
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    <div className='flex gap-20 justify-between'>
                                      <p className='text-[13px] text-[#141414]'>
                                        Secure your card as per RBI guidelines
                                      </p>
                                      <input
                                        type='checkbox'
                                        className='toggle'
                                      />
                                    </div>
                                    <p className='text-[13px] text-[#EE2E24] cursor-pointer '>
                                      Learn more
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  <button className='w-full text-sm font-semibold rounded-md py-3 my-3 bg-[#f2f2f2] text-[#0000004d]'>
                                    Pay Now ₹1386
                                  </button>
                                  <div className='flex items-center gap-2'>
                                    <p className='text-xs'>We accept</p>
                                    <div className='w-[20px] h-[14px] cursor-pointer'>
                                      <Image
                                        src='https://payments-s3.oyorooms.io/pwa/icons/cards/visa.png'
                                        width={96}
                                        height={72}
                                        alt=''
                                        className='w-full h-full'
                                      />
                                    </div>
                                    <div className='w-[20px] h-[14px] cursor-pointer'>
                                      <Image
                                        src='https://payments-s3.oyorooms.io/pwa/icons/cards/mastercard.png'
                                        width={96}
                                        height={72}
                                        alt=''
                                        className='w-full h-full'
                                      />
                                    </div>
                                    <div className='w-[20px] h-[14px] cursor-pointer'>
                                      <Image
                                        src='https://payments-s3.oyorooms.io/pwa/icons/cards/amex.png'
                                        width={96}
                                        height={72}
                                        alt=''
                                        className='w-full h-full'
                                      />
                                    </div>
                                    <div className='w-[20px] h-[14px] cursor-pointer'>
                                      <Image
                                        src='https://payments-s3.oyorooms.io/pwa/icons/cards/diners.png'
                                        width={96}
                                        height={72}
                                        alt=''
                                        className='w-full h-full'
                                      />
                                    </div>
                                    <div className='w-[20px] h-[14px] cursor-pointer'>
                                      <Image
                                        src='https://payments-s3.oyorooms.io/pwa/icons/cards/rupay.png'
                                        width={96}
                                        height={72}
                                        alt=''
                                        className='w-full h-full'
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                      {activeTab === 1 && (
                        <div className='px-4 py-3 flex justify-between items-center opacity-30 cursor-pointer'>
                          <div className='flex items-center gap-2'>
                            <Image
                              src='https://payments-s3.oyorooms.io/assets/images/ola_postpaid_icon.png'
                              alt=''
                              width={200}
                              height={200}
                              className='w-6 h-6'
                            />
                            <div>
                              <h4 className='text-sm font-medium'>
                                OlaMoney Postpaid
                              </h4>
                              <p className='text-[9px] font-semibold'>
                                Ola Money Postpaid not available on merchant
                              </p>
                            </div>
                          </div>
                          <span>
                            <IoIosArrowForward className='text-xs' />
                          </span>
                        </div>
                      )}
                      {activeTab === 2 && (
                        <div>
                          <div className='flex justify-between items-center'>
                            <p className='text-xs font-normal'>
                              Pay by any UPI app
                            </p>
                            <div className='h-[14px]'>
                              <Image
                                src='https://payments-s3.oyorooms.io/assets/images/upi_logo_website.png'
                                alt=''
                                width={200}
                                height={200}
                                className='h-full w-auto'
                              />
                            </div>
                          </div>
                          <div className='px-3'>
                            <div className='py-3 cursor-pointer border-b border-[#dcdcdc]'>
                              <div
                                onClick={() => {
                                  setgPay(!gPay);
                                  setpPay(false);
                                }}
                                className='flex justify-between items-center'>
                                <div className='flex items-center gap-2'>
                                  <div className='w-6 h-6'>
                                    <Image
                                      src='https://payments-s3.oyorooms.io/assets/images/ic_gpay.png'
                                      width={96}
                                      height={96}
                                      alt=''
                                      className='w-full h-full'
                                    />
                                  </div>
                                  <p className='text-sm font-medium'>
                                    Google Pay
                                  </p>
                                </div>
                                <span className='text-lg opacity-70'>
                                  {gPay ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                </span>
                              </div>
                              {gPay && (
                                <div className='gPay py-3'>
                                  <input
                                    type='text'
                                    placeholder='Enter mobile number'
                                    className='w-full outline-none text-sm px-[15px] py-[10px] border border-[#cccccc] rounded-md'
                                  />
                                  <button className='w-full text-sm font-semibold rounded-md py-3 my-3 bg-[#f2f2f2] text-[#0000004d]'>
                                    Pay Now ₹1386
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className='px-3'>
                            <div className='py-3 cursor-pointer'>
                              <div
                                onClick={() => {
                                  setpPay(!pPay);
                                  setgPay(false);
                                }}
                                className='flex justify-between items-center'>
                                <div className='flex items-center gap-2'>
                                  <div className='w-6 h-6'>
                                    <Image
                                      src='https://payments-s3.oyorooms.io/assets/images/offers/UPIicons.png'
                                      width={96}
                                      height={96}
                                      alt=''
                                      className='w-full h-full'
                                    />
                                  </div>
                                  <p className='text-sm font-medium'>
                                    PhonePe/Paytm/BHIM/UPI
                                  </p>
                                </div>
                                <span className='text-lg opacity-70'>
                                  {pPay ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                </span>
                              </div>
                              {pPay && (
                                <div className='gPay py-3'>
                                  <input
                                    type='text'
                                    placeholder='upild@upiprovider'
                                    className='w-full outline-none text-sm px-[15px] py-[10px] border border-[#cccccc] rounded-md'
                                  />
                                  <div className='mt-3 flex items-center justify-between'>
                                    <p className='text-[13px]'>
                                      Save this payment method for future
                                    </p>
                                    <input type='checkbox' className='toggle' />
                                  </div>
                                  <button className='w-full text-sm font-semibold rounded-md py-3 my-3 bg-[#f2f2f2] text-[#0000004d]'>
                                    Pay Now ₹1386
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                      {activeTab === 3 && (
                        <div className="className='pl-4 !h-[400px] overflow-x-hidden overflow-y-scroll relative'">
                          <div>
                            {bankShow
                              ? banks.map((bank, idx) => (
                                  <div
                                    key={idx}
                                    className='flex items-center justify-between pr-3 border-b border-[#f0f0f0] min-h-12 cursor-pointer'>
                                    <div className='flex gap-4 items-center'>
                                      <span>
                                        <CiBank className='text-2xl' />
                                      </span>
                                      <p className='text-sm'>{bank}</p>
                                    </div>
                                    <span>
                                      <IoIosArrowForward className='text-xs' />
                                    </span>
                                  </div>
                                ))
                              : banks.slice(0, 5).map((bank, idx) => (
                                  <div
                                    key={idx}
                                    className='flex items-center justify-between pr-3 border-b border-[#f0f0f0] min-h-12 cursor-pointer'>
                                    <div className='flex gap-4 items-center'>
                                      <span>
                                        <CiBank className='text-2xl' />
                                      </span>
                                      <p className='text-sm'>{bank}</p>
                                    </div>
                                    <span>
                                      <IoIosArrowForward className='text-xs' />
                                    </span>
                                  </div>
                                ))}
                          </div>
                          {bankShow === false && (
                            <p
                              onClick={() => setBankShow(true)}
                              className='min-h-12 border-b border-[#f0f0f0] flex items-center cursor-pointer font-semibold text-sm ml-10'>
                              Show More
                            </p>
                          )}
                        </div>
                      )}
                    </div>
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
                        {/* <div
                          class='custom-file-container'
                          data-upload-id='myUniqueUploadId'></div> */}

                        <label className='block text-base font-semibold mb-[9px]'>
                          Upload
                        </label>
                        <input
                          type='file'
                          disabled={file.length === 5}
                          className='mb-[19px]'
                          onChange={handleChange}
                          multiple
                        />

                        <div className='flex flex-wrap gap-3'>
                          {file.length > 0 ? (
                            file.map((item, index) => {
                              return (
                                <div key={index} className='relative w-fit'>
                                  <Image
                                    className='w-20 rounded'
                                    width={200}
                                    height={200}
                                    alt=''
                                    src={URL.createObjectURL(item)}
                                  />
                                  <button
                                    onClick={() => deleteFile(index)}
                                    type='button'
                                    className='absolute -top-2 -left-2 shadow-md bg-color7 text-color5 rounded-full'>
                                    <RxCrossCircled className='text-lg' />
                                  </button>
                                </div>
                              );
                            })
                          ) : (
                            <Image
                              className='h-28 rounded'
                              width={200}
                              height={200}
                              alt=''
                              src={
                                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiQAAAD6CAMAAACmhqw0AAAA+VBMVEUAAAD29u3u7unt7ent7enu7uju7uihoqCio6Gio6KjpKOkpaSmpqSmp6WoqKaqq6mqq6qrq6qsrautrauur62wsa6xsa+xsrCys7GztLK0tbK1trS2t7S3t7W4uba5ure6u7e7vLm8vbu9vrvAwL3Awb3DxMHFxcPGxsPHx8TIycXLzMjLzMnMzMnNzsrPz8vP0MzQ0M3S0s/U1NDV1dLX19TY2NTY2NXZ2dba2tXb29bc3Nfc3Njc3dnd3dre3tre39vg4Nvh4dzi4t3i4t7j497k5N/k5ODl5eDl5eHl5uLm5uHn5+Lo6OPp6eTq6uXr6+bs7Oft7eh54KxIAAAAB3RSTlMAHKbl5uztvql9swAABA1JREFUeNrt3VlT01AYgOG0oEEE910URNzFBVFcqCgKirLU/P8fI3QYbEOSdtrMyJzzvHfMlFx833NBQuY0SRrN8UwqabzZSJLGaYNQVacaSdMUVF0zGTMEVTeWmIH6BYkgESSCRJAIEkEiSCRIBIkgESSCRJAIEkEiQSJIBIkgESSCRJAIEgkSQSJIBIkgESSCRJBIkAgSQSJIBIkgESSCRIJEkAgSQSJIBIkgkSARJIJEkAgSQSJIBIkEiSARJIJEkAgSQSJIJEgEiSARJIJEkAgSQSJBIkgEiSARJIJEkAgSCRJBIkgEiSARJIJEgkSQ5PvxbdS+tyEJuZVb0+noTV579geSQGs/SOvqxiYkYfYwra+rbUhC7NNEjUjSJ5CE2P06jaTnIAmxKwe7vb468t3N14WOki1IAuzMwWrf1HCh3Q6S95AEWGe1b0/WlSCBBBJIIAkdSXvt1aNXa21IICld7dJU5+epJUggKV7tzuzRA4/ZHUggKVrtfNdjsXlIIClY7XLPw9NlSCA5vtqLPUguQgLJsdX+zv0fZhsSSPKrXckhWSn5jV8zG5DEiuR1DsnrEiOX0vMbkESKZDWHZLXMSFqsBJIIkOz1vn40sVdqpFgJJDHc3dzsQXKzwkihEkhiQLI+2f3y+3qVkSIlkMSAJFvsQrJYbaRACSRRIMlenj0UcPZlPyPHlUASB5Jsc+7cwevMc5v9jRxTAkkkSPbb+riVZYMYySuBJB4kJRUYySmBJHYkhUZ6lUASOZISIz1KIIkbSamRbiWQxIZkvT2YkS4lkESGpDV9tz2YkX9KIIkLSWs6TY+U9DFypASSqJC0OicfHSrpa2T/k5BEh6R1eDpWR8kARtIZSGJD0jo6QW1fySBGIIkOSavrlL27PwcxAklsSFo9JzFOppBAkl9ta5jTOiGJCslQRiCJCslwRiCJCcmQRiCJCMmwRiCJB8mXoU+YhyQaJM9TSCCBBBJIIIEEEkgggQQSSCCJAsnyzLA9hiQWJCfnSpBAAgkkkATXxFCnPxfU7iB5B0mAXT5Y7Z3t0Y087SDZgCTA7tX6bZ5TGSQBtlwrkgVIgmy+RiMXdiEJsp3b9Rn5nEESaC/O1/P3yMJuBkm4bX94O2rvNiKbWXRIBIkgESSCRJAIEkEiQSJIBIkgESSCRJAIEgkSQSJIBIkgESSCRIJEkAgSQSJIBIkgESQSJIJEkAgSQSJIBIkgkSARJIJEkAgSQSJIBIkEiSARJIJEkAgSQSJIJEgEiSARJIJEkAgSCRJBIkgEiSARJIJEkEiQCBJBIkgEiSARJIJEgkSQCBJBIkgEiSARJBIkgkSQ6P8gGTMDVTeWNA1B1TWTxmlTUFWnGknSaI4bhMoabzaSv+4BHFVoHZzfAAAAAElFTkSuQmCC"
                              }
                            />
                          )}
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
                    <div className={`${styles.modal}`} onClick={closeModal}>
                      <div
                        className={`${styles.modalContent} rounded`}
                        onClick={(e) => e.stopPropagation()}>
                        <div className='bg-color7 p-4 rounded-t'>
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
