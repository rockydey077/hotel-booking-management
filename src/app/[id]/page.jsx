"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation } from "swiper/modules";
import { TbAirConditioning } from "react-icons/tb";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { FaFacebook, FaPercentage, FaWhatsapp, FaWifi } from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import { MdEmail, MdOutlineElevator } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { MdOutlineDoorFront } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaRegShareSquare } from "react-icons/fa";
import ImageSlider from "@/utilities/ImageSlider";
import { TiTick } from "react-icons/ti";
import { AiFillThunderbolt } from "react-icons/ai";
import "react-tabs/style/react-tabs.css";
import "./style.css";
import { ImCross } from "react-icons/im";
import Nearby from "@/components/Nearby/Nearby";
import RoomDetails from "@/components/RoomDetails/RoomDetails";
import ImageSliderPro from "@/utilities/ImageSliderPro";

const DetailsPage = ({ params }) => {
  const [room, setRoom] = useState({});
  const [activeTab, setActiveTab] = useState("tab1");
  const [close, setClose] = useState(false);

  useEffect(() => {
    fetch("rooms.json")
      .then((res) => res.json())
      .then((data) => {
        setRoom(data.find((r) => r.id === parseInt(params.id)));
      });
  }, [params]);

  const handleBook = () => {
    const id = room.id;
    const booking = {
      room_type: room.room_type,
      room_name: room.room_name,
      price: room.price,
    };

    localStorage.setItem(JSON.stringify(id), JSON.stringify(booking));
    toast.success("Room booked successfully!");
  };

  return (
    <div className=''>
      {/* Carousel */}
      <div className='relative'>
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          // loop={true}
          grabCursor={true}
          navigation={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          }}
          scrollbar={true}
          modules={[Navigation, Keyboard, Scrollbar]}
          className='mySwiper'>
          {room.image?.map((img, idx) => (
            <SwiperSlide key={idx}>
              <Image src={img} alt={room.room_name} width={1080} height={200} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='absolute right-5  bottom-5 z-10'>
          <button
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className='flex p-1 border-2 bg-color4 border-color3 rounded items-center gap-2 font-medium text-base'>
            <GrGallery className='text-2xl' /> View all photos
          </button>
        </div>
        <div>
          <details className='dropdown dropdown-bottom dropdown-end  absolute right-5 top-5 z-10'>
            <summary className='flex p-1 border-2 border-color3 bg-color4 rounded items-center gap-2 font-medium text-base cursor-pointer'>
              <span className='text-2xl'>
                <FaRegShareSquare />
              </span>
              Share
            </summary>
            <ul className='flex flex-wrap gap-5 mt-2 dropdown-content bg-base-100 rounded-box z-[1] w-72 p-5 shadow'>
              <li className='flex gap-2 text-base items-center'>
                <FaFacebook /> Facebook
              </li>
              <li className='flex gap-2 text-base items-center'>
                <FaWhatsapp /> Whatsapp
              </li>
              <li className='flex gap-2 text-base items-center'>
                <MdEmail /> Email
              </li>
            </ul>
          </details>
        </div>
      </div>
      <div className='max-w-screen-xl flex gap-20 mx-auto mt-8 mb-16'>
        {/* Room Details */}
        <div className='lg:w-3/5'>
          {Object.keys(room).length !== 0 && <RoomDetails room={room} />}
          {/* What's nearby */}
          {/* <div className='my-5'>
            <h2 className='text-2xl font-bold'>What's nearby?</h2>
            <div className='mt-5 border border-color8 pt-5 pl-5 rounded'>
              <div className='flex items-center gap-6 font-semibold'>
                <div
                  className={`w-6 h-6 rounded-full border-2 ${styles.nearby_shadow}`}></div>
                <h3>Super OYO Prafula Devi Near Rajarhat Chowmatha</h3>
              </div>
              <div className='mt-3 flex gap-7 items-center mb-6'>
                <CiLocationOn className='text-2xl' />
                <input
                  className='border border-color7 pl-4 pr-36  rounded py-2'
                  type='text'
                  placeholder='Find distance from a place'
                />
              </div>
              <div className=''>
                <div className=''>
                  <Tabs>
                    <TabList className='flex gap-6 border-b border-color8'>
                      <Tab
                        className={`font-semibold cursor-pointer ${
                          activeTab === "tab1" &&
                          "!text-color10 !border-b-2 pb-1 !border-color10"
                        }`}
                        onClick={() => setActiveTab("tab1")}>
                        Places to visit
                      </Tab>
                      <Tab
                        className={`font-semibold cursor-pointer ${
                          activeTab === "tab2" &&
                          "!text-color10 !border-b-2 pb-1 !border-color10"
                        }`}
                        onClick={() => setActiveTab("tab2")}>
                        Restaurants
                      </Tab>
                      <Tab
                        className={`font-semibold cursor-pointer ${
                          activeTab === "tab3" &&
                          "!text-color10 !border-b-2 pb-1 !border-color10"
                        }`}
                        onClick={() => setActiveTab("tab3")}>
                        Transportation
                      </Tab>
                    </TabList>

                    <div className='flex gap-5'>
                      <div className='lg:w-[45%]'>
                        <TabPanel className='mt-3'>
                          <ul className='space-y-2'>
                            <li className='flex gap-5 justify-between items-center'>
                              <p className='font-semibold text-sm'>
                                The Majestic Suites
                              </p>
                              <p className='text-sm text-color6'>2.0kms</p>
                            </li>
                            <li className='flex gap-5 justify-between items-center'>
                              <p className='font-semibold text-sm'>
                                The Orient City Center 2 Chinar Park NewTown
                              </p>
                              <p className='text-sm text-color6'>3.9kms</p>
                            </li>
                            <li className='flex gap-5 justify-between items-center'>
                              <p className='font-semibold text-sm'>
                                Golden Heaven Hotel & Restaurant
                              </p>
                              <p className='text-sm text-color6'>5.8kms</p>
                            </li>
                            <li className='flex gap-5 justify-between items-center'>
                              <p className='font-semibold text-sm'>
                                Netaji Subhash Chandra Bose International
                                Airport
                              </p>
                              <p className='text-sm text-color6'>5.0kms</p>
                            </li>
                            <li className='flex gap-5 justify-between items-center'>
                              <p className='font-semibold text-sm'>Teghoria</p>
                              <p className='text-sm text-color6'>5.7kms</p>
                            </li>
                            <li className='flex gap-5 justify-between items-center'>
                              <p className='font-semibold text-sm'>
                                Tata Medical Centre
                              </p>
                              <p className='text-sm text-color6'>5.8kms</p>
                            </li>
                          </ul>
                        </TabPanel>
                        <TabPanel className='mt-3'>
                          <ul className='space-y-2'>
                            <li className='flex gap-5 justify-between items-center'>
                              <p className='font-semibold text-sm'>
                                The Majestic Suites
                              </p>
                              <p className='text-sm text-color6'>2.0kms</p>
                            </li>
                            <li className='flex gap-5 justify-between items-center'>
                              <p className='font-semibold text-sm'>
                                The Orient City Center 2 Chinar Park NewTown
                              </p>
                              <p className='text-sm text-color6'>3.9kms</p>
                            </li>
                            <li className='flex gap-5 justify-between items-center'>
                              <p className='font-semibold text-sm'>
                                Golden Heaven Hotel & Restaurant
                              </p>
                              <p className='text-sm text-color6'>5.8kms</p>
                            </li>
                            <li className='flex gap-5 justify-between items-center'>
                              <p className='font-semibold text-sm'>
                                California Restaurent Cum Bar
                              </p>
                              <p className='text-sm text-color6'>6.6kms</p>
                            </li>
                            <li className='flex gap-5 justify-between items-center'>
                              <p className='font-semibold text-sm'>
                                Sher E Punjab
                              </p>
                              <p className='text-sm text-color6'>6.9kms</p>
                            </li>
                          </ul>
                        </TabPanel>
                        <TabPanel className='mt-3'>
                          <ul className='space-y-2'>
                            <li className='flex gap-5 justify-between items-center'>
                              <p className='font-semibold text-sm'>
                                Netaji Subhash Chandra Bose International
                                Airport
                              </p>
                              <p className='text-sm text-color6'>5.0kms</p>
                            </li>
                            <li className='flex gap-5 justify-between items-center'>
                              <p className='font-semibold text-sm'>Teghoria</p>
                              <p className='text-sm text-color6'>5.7kms</p>
                            </li>
                            <li className='flex gap-5 justify-between items-center'>
                              <p className='font-semibold text-sm'>
                                Tata Medical Centre
                              </p>
                              <p className='text-sm text-color6'>5.8kms</p>
                            </li>
                            <li className='flex gap-5 justify-between items-center'>
                              <p className='font-semibold text-sm'>
                                Netaji Subhash Chandra Bose International
                                Airport
                              </p>
                              <p className='text-sm text-color6'>5.0kms</p>
                            </li>
                            <li className='flex gap-5 justify-between items-center'>
                              <p className='font-semibold text-sm'>
                                Dum Dum Airport 1 No. Gate
                              </p>
                              <p className='text-sm text-color6'>6.0kms</p>
                            </li>
                            <li className='flex gap-5 justify-between items-center'>
                              <p className='font-semibold text-sm'>
                                Shree Balaji Computers
                              </p>
                              <p className='text-sm text-color6'>5.9kms</p>
                            </li>
                            <li className='flex gap-5 justify-between items-center'>
                              <p className='font-semibold text-sm'>
                                Madhyamgram Chowrasta
                              </p>
                              <p className='text-sm text-color6'>7.4kms</p>
                            </li>
                            <li className='flex gap-5 justify-between items-center'>
                              <p className='font-semibold text-sm'>
                                Durganagar
                              </p>
                              <p className='text-sm text-color6'>7.4kms</p>
                            </li>
                          </ul>
                        </TabPanel>
                      </div>
                      <div className='lg:w-[55%]'>
                        <iframe
                          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.516092394622!2d90.3627763!3d23.8066807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c709b35123df%3A0x6b77ed6f8ff908b5!2sSuper%20OYO%20Prafula%20Devi%20Near%20Rajarhat%20Chowmatha!5e0!3m2!1sen!2sbd!4v1659270734142!5m2!1sen!2sbd'
                          width='100%'
                          height={300}
                          allowFullScreen=''
                          loading='lazy'
                          className='border-0'></iframe>
                      </div>
                    </div>
                  </Tabs>
                </div>
              </div>
            </div>
          </div> */}
          <div className='mt-5'>
            <Nearby activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </div>
        {/* Booking Section */}
        <div className='lg:w-[384px] shadow rounded h-fit sticky right-[5%] top-8 z-40 bg-color4'>
          <div>
            <div className='bg-gradient-to-r rounded-t from-[#D72E5E] to-[#F15439] flex items-center justify-between gap-6 px-5 py-2'>
              <p className='text-xs font-medium flex items-center gap-1 text-color4'>
                <span className='p-1 text-[10px] bg-color4 text-[#D72E5E] rounded-full'>
                  <FaPercentage />
                </span>
                LOGIN NOW TO GET UPTO 15% LOWER PRICES
              </p>
              <button className='px-2 py-1 text-sm text-color4 bg-[#F58774]'>
                LOGIN
              </button>
            </div>
            <div className='p-5'>
              <p className='font-bold text-2xl'>${room.price}</p>
              <p className='text-color8 text-xs'>+taxes & fees: $10</p>
              <div className='flex justify-between text-sm items-center font-medium shadow p-4 mt-3'>
                <p>Mon, 15 Jul - Tue, 16 Jul</p>
                <p>1 Room, 1 Guest</p>
              </div>
              <div className='flex justify-between items-center font-medium shadow p-4 mt-3'>
                <p className='flex items-center gap-1 text-sm font-medium'>
                  <MdOutlineDoorFront className='text-color8 text-2xl' />{" "}
                  Classic
                </p>
                <p>
                  <FaPencilAlt className='text-color2' />
                </p>
              </div>
              <div className='py-5 flex justify-between items-start border-b border-dashed border-color8'>
                <div>
                  <p className='flex text-sm gap-3 items-center'>
                    <span className='p-1 text-sm bg-color2 text-color4 rounded-full'>
                      <FaPercentage />
                    </span>
                    WELCOME75 coupon applied
                  </p>
                  <div>
                    <div className='drawer drawer-end'>
                      <input
                        id='my-drawer-4'
                        type='checkbox'
                        className='drawer-toggle'
                      />
                      <div className='drawer-content'>
                        {/* Page content here */}
                        <label
                          onClick={() => setClose(true)}
                          htmlFor='my-drawer-4'
                          className='bg-[#EFFCF5] font-semibold text-color6 rounded-sm cursor-pointer p-1 inline-block mt-2 ml-8 text-xs border border-[#97E1BB]'>
                          MORE OFFERS
                        </label>
                      </div>
                      <div className='drawer-side'>
                        <label
                          onClick={() => setClose(false)}
                          htmlFor='my-drawer-4'
                          aria-label='close sidebar'
                          className='drawer-overlay cursor-default text-color4 text-xl pt-5 pl-[880px]'>
                          {close && <ImCross className='cursor-pointer' />}
                        </label>
                        <ul className='menu bg-color4 text-base-content min-h-full w-[40%] p-10'>
                          {/* Sidebar content here */}
                          <h2 className='font-bold mb-4 text-2xl'>
                            More Offers
                          </h2>
                          <div className='border rounded-sm flex justify-between border-color7 px-6 py-3 '>
                            <p className='text-xs'>WELCOME75 coupon applied</p>
                            <button className='text-color10 font-semibold'>
                              Remove
                            </button>
                          </div>
                          <div className='py-8'>
                            <h2 className='text-xl font-bold mb-4'>
                              Available Coupons
                            </h2>
                            <div className='space-y-3'>
                              <div className='p-5 border rounded-sm border-color7'>
                                <div className='flex justify-between items-center'>
                                  <div className='flex gap-2'>
                                    <h1 className='text-color10 font-black text-2xl'>
                                      OYO
                                    </h1>
                                    <button className='px-2 text-xs font-semibold uppercase py-1 border border-dashed rounded-[1px] bg-[#f5a62333] border-[#F5A623]'>
                                      WELCOME75
                                    </button>
                                  </div>
                                  <button className='rounded text-xs px-2 py-1 border border-[#97979733] bg-[#cfccdb33]'>
                                    Applied
                                  </button>
                                </div>
                                <p className='my-3 text-sm font-semibold'>
                                  upto 75% off
                                </p>
                                <p className='font-medium text-xs text-[#00000080]'>
                                  Get upto 75% off using code WELCOME75
                                </p>
                              </div>
                              <div className='p-5 border rounded-sm border-color7'>
                                <div className='flex justify-between items-center'>
                                  <div className='flex gap-2'>
                                    <h1 className='text-color10 font-black text-2xl'>
                                      OYO
                                    </h1>
                                    <button className='px-2 text-xs font-semibold uppercase py-1 border border-dashed rounded-[1px] bg-[#f5a62333] border-[#F5A623]'>
                                      WELCOME75
                                    </button>
                                  </div>
                                  <button className='rounded font-semibold text-xs px-3 py-1 border border-[#E6E6F6] text-[#EE2E24] bg-color4'>
                                    Apply
                                  </button>
                                </div>
                                <p className='my-3 text-sm font-semibold'>
                                  upto 75% off
                                </p>
                                <p className='font-medium text-xs text-[#00000080]'>
                                  Get upto 75% off using code WELCOME75
                                </p>
                              </div>
                              <div className='p-5 border rounded-sm border-color7'>
                                <div className='flex justify-between items-center'>
                                  <div className='flex gap-2'>
                                    <h1 className='text-color10 font-black text-2xl'>
                                      OYO
                                    </h1>
                                    <button className='px-2 text-xs font-semibold uppercase py-1 border border-dashed rounded-[1px] bg-[#f5a62333] border-[#F5A623]'>
                                      WELCOME75
                                    </button>
                                  </div>
                                  <button className='rounded font-semibold text-xs px-3 py-1 border border-[#E6E6F6] text-[#EE2E24] bg-color4'>
                                    Apply
                                  </button>
                                </div>
                                <p className='my-3 text-sm font-semibold'>
                                  upto 75% off
                                </p>
                                <p className='font-medium text-xs text-[#00000080]'>
                                  Get upto 75% off using code WELCOME75
                                </p>
                              </div>
                              <div className='p-5 border rounded-sm border-color7'>
                                <div className='flex justify-between items-center'>
                                  <div className='flex gap-2'>
                                    <h1 className='text-color10 font-black text-2xl'>
                                      OYO
                                    </h1>
                                    <button className='px-2 text-xs font-semibold uppercase py-1 border border-dashed rounded-[1px] bg-[#f5a62333] border-[#F5A623]'>
                                      WELCOME75
                                    </button>
                                  </div>
                                  <button className='rounded font-semibold text-xs px-3 py-1 border border-[#E6E6F6] text-[#EE2E24] bg-color4'>
                                    Apply
                                  </button>
                                </div>
                                <p className='my-3 text-sm font-semibold'>
                                  upto 75% off
                                </p>
                                <p className='font-medium text-xs text-[#00000080]'>
                                  Get upto 75% off using code WELCOME75
                                </p>
                              </div>
                              <div className='p-5 border rounded-sm border-color7'>
                                <div className='flex justify-between items-center'>
                                  <div className='flex gap-2'>
                                    <h1 className='text-color10 font-black text-2xl'>
                                      OYO
                                    </h1>
                                    <button className='px-2 text-xs font-semibold uppercase py-1 border border-dashed rounded-[1px] bg-[#f5a62333] border-[#F5A623]'>
                                      WELCOME75
                                    </button>
                                  </div>
                                  <button className='rounded font-semibold text-xs px-3 py-1 border border-[#E6E6F6] text-[#EE2E24] bg-color4'>
                                    Apply
                                  </button>
                                </div>
                                <p className='my-3 text-sm font-semibold'>
                                  upto 75% off
                                </p>
                                <p className='font-medium text-xs text-[#00000080]'>
                                  Get upto 75% off using code WELCOME75
                                </p>
                              </div>
                              <div className='p-5 border rounded-sm border-color7'>
                                <div className='flex justify-between items-center'>
                                  <div className='flex gap-2'>
                                    <h1 className='text-color10 font-black text-2xl'>
                                      OYO
                                    </h1>
                                    <button className='px-2 text-xs font-semibold uppercase py-1 border border-dashed rounded-[1px] bg-[#f5a62333] border-[#F5A623]'>
                                      WELCOME75
                                    </button>
                                  </div>
                                  <button className='rounded font-semibold text-xs px-3 py-1 border border-[#E6E6F6] text-[#EE2E24] bg-color4'>
                                    Apply
                                  </button>
                                </div>
                                <p className='my-3 text-sm font-semibold'>
                                  upto 75% off
                                </p>
                                <p className='font-medium text-xs text-[#00000080]'>
                                  Get upto 75% off using code WELCOME75
                                </p>
                              </div>
                              <div className='p-5 border rounded-sm border-color7'>
                                <div className='flex justify-between items-center'>
                                  <div className='flex gap-2'>
                                    <h1 className='text-color10 font-black text-2xl'>
                                      OYO
                                    </h1>
                                    <button className='px-2 text-xs font-semibold uppercase py-1 border border-dashed rounded-[1px] bg-[#f5a62333] border-[#F5A623]'>
                                      WELCOME75
                                    </button>
                                  </div>
                                  <button className='rounded font-semibold text-xs px-3 py-1 border border-[#E6E6F6] text-[#EE2E24] bg-color4'>
                                    Apply
                                  </button>
                                </div>
                                <p className='my-3 text-sm font-semibold'>
                                  upto 75% off
                                </p>
                                <p className='font-medium text-xs text-[#00000080]'>
                                  Get upto 75% off using code WELCOME75
                                </p>
                              </div>
                              <div className='p-5 border rounded-sm border-color7'>
                                <div className='flex justify-between items-center'>
                                  <div className='flex gap-2'>
                                    <h1 className='text-color10 font-black text-2xl'>
                                      OYO
                                    </h1>
                                    <button className='px-2 text-xs font-semibold uppercase py-1 border border-dashed rounded-[1px] bg-[#f5a62333] border-[#F5A623]'>
                                      WELCOME75
                                    </button>
                                  </div>
                                  <button className='rounded font-semibold text-xs px-3 py-1 border border-[#E6E6F6] text-[#EE2E24] bg-color4'>
                                    Apply
                                  </button>
                                </div>
                                <p className='my-3 text-sm font-semibold'>
                                  upto 75% off
                                </p>
                                <p className='font-medium text-xs text-[#00000080]'>
                                  Get upto 75% off using code WELCOME75
                                </p>
                              </div>
                              <div className='p-5 border rounded-sm border-color7'>
                                <div className='flex justify-between items-center'>
                                  <div className='flex gap-2'>
                                    <h1 className='text-color10 font-black text-2xl'>
                                      OYO
                                    </h1>
                                    <button className='px-2 text-xs font-semibold uppercase py-1 border border-dashed rounded-[1px] bg-[#f5a62333] border-[#F5A623]'>
                                      WELCOME75
                                    </button>
                                  </div>
                                  <button className='rounded font-semibold text-xs px-3 py-1 border border-[#E6E6F6] text-[#EE2E24] bg-color4'>
                                    Apply
                                  </button>
                                </div>
                                <p className='my-3 text-sm font-semibold'>
                                  upto 75% off
                                </p>
                                <p className='font-medium text-xs text-[#00000080]'>
                                  Get upto 75% off using code WELCOME75
                                </p>
                              </div>
                              <div className='p-5 border rounded-sm border-color7'>
                                <div className='flex justify-between items-center'>
                                  <div className='flex gap-2'>
                                    <h1 className='text-color10 font-black text-2xl'>
                                      OYO
                                    </h1>
                                    <button className='px-2 text-xs font-semibold uppercase py-1 border border-dashed rounded-[1px] bg-[#f5a62333] border-[#F5A623]'>
                                      WELCOME75
                                    </button>
                                  </div>
                                  <button className='rounded font-semibold text-xs px-3 py-1 border border-[#E6E6F6] text-[#EE2E24] bg-color4'>
                                    Apply
                                  </button>
                                </div>
                                <p className='my-3 text-sm font-semibold'>
                                  upto 75% off
                                </p>
                                <p className='font-medium text-xs text-[#00000080]'>
                                  Get upto 75% off using code WELCOME75
                                </p>
                              </div>
                            </div>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <button >
                  </button> */}
                </div>
                <div className='flex items-center gap-3'>
                  <p className='font-semibold text-sm'>-$10</p>
                  <span className=' text-color4 font-light text-base bg-color1'>
                    <TiTick />
                  </span>
                </div>
              </div>
              <div className='pt-5 flex text-sm justify-between'>
                <p>Your savings</p>
                <p className='font-semibold'>$10</p>
              </div>
              <div className='pt-5 text-sm flex justify-between'>
                <p>Total Price:</p>
                <p className='font-semibold'>${room.price}</p>
              </div>
              <p className='text-color8 text-xs'>Includes taxes & fees</p>
              <button className='mt-5 px-5 py-3 w-full font-medium bg-color1 rounded text-color4'>
                Continue to Book
              </button>
              <p className='flex items-center gap-1 my-5 text-color10 font-medium'>
                <AiFillThunderbolt /> 2k+ people booked this OYO in last 6
                months
              </p>
              <div className='space-y-2 font-medium text-color10'>
                <p>Cancellation Policy</p>
                <p>Follow safety measures advised at the hotel</p>
                <p>
                  <span className='text-color6'>
                    By proceeding, you agree to our
                  </span>{" "}
                  Guest Policies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <dialog id='my_modal_3' className='modal'>
        <div className='bg-[#000000] flex justify-center bg-opacity-90 items-center  min-w-full mx-auto h-screen'>
          <div className='modal-box bg-transparent min-w-full h-screen rounded-none p-0'>
            <form method='dialog'>
              <button className='btn z-50 text-color4 text-2xl font-bold btn-sm btn-circle btn-ghost absolute right-16 top-2'>
                ✕
              </button>
            </form>
            {/* {Object.keys(room).length !== 0 && <ImageSlider room={room} categories={room.categories} />} */}
            {Object.keys(room).length !== 0 && <ImageSliderPro room={room} />}
          </div>
        </div>
      </dialog>
      <ToastContainer />
    </div>
  );
};

export default DetailsPage;
