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
import { MdOutlineStar } from "react-icons/md";
import { AiFillThunderbolt } from "react-icons/ai";
import styles from "./styles.module.css";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const DetailsPage = ({ params }) => {
  const [room, setRoom] = useState({});
  // const [isFixed, setIsFixed] = useState(false);
  // const [scrollDirection, setScrollDirection] = useState(null);
  // const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState("tab1");

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

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const offset = window.scrollY;
  //     if (offset > 0) {
  //       setIsSticky(true);
  //     } else {
  //       setIsSticky(false);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   let lastScrollTop =
  //     window.pageYOffset || document.documentElement.scrollTop;

  //   const handleScroll = () => {
  //     const currentScrollTop =
  //       window.pageYOffset || document.documentElement.scrollTop;
  //     const offsetTop = sectionRef.current.offsetTop;

  //     if (currentScrollTop > offsetTop && currentScrollTop > lastScrollTop) {
  //       setIsFixed(true);
  //       setScrollDirection("down");
  //     } else if (currentScrollTop < lastScrollTop) {
  //       setIsFixed(false);
  //       setScrollDirection("up");
  //     }

  //     lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className=''>
      {/* Carousel */}
      <div className='relative'>
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          loop={true}
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
          <div className='flex items-center justify-between'>
            <h1 className='text-3xl font-bold'>{room.room_name}</h1>
            <div className=''>
              <div className='flex items-center bg-[#58AC00] w-fit gap-1 font-semibold text-color9 rounded-t p-2 text-xl'>
                <span className='text-xl'>4.4</span> <FaStar />
              </div>
              <p className='bg-color9 rounded-b w-fit text-xs p-[2px]'>
                455 Ratings
              </p>
            </div>
          </div>
          <p className='text-color8 lg:w-[85%] text-base font-medium mt-4'>
            {room.description}
          </p>
          {/* Amenities */}
          <h3 className='text-2xl font-bold my-5'>Amenities</h3>
          <div className='grid grid-cols-3 gap-4 text-xl'>
            <div className='flex items-center gap-2'>
              <TbAirConditioning />
              <span>{room.room_type}</span>
            </div>
            <div className='flex items-center gap-2'>
              <PiTelevisionSimpleFill />
              <span>{room.tv}</span>
            </div>
            <div className='flex items-center gap-2'>
              <FaWifi />
              <span>{room.wifi}</span>
            </div>
            <div className='flex items-center gap-2'>
              <FaKitchenSet />
              <span>{room.kitchen}</span>
            </div>
            <div className='flex items-center gap-2'>
              <MdOutlineElevator />
              <span>{room.elevator}</span>
            </div>
          </div>
          <p className='mt-5 font-semibold text-color10'>Show More</p>
          {/* About */}
          <div className='my-5'>
            <h3 className='font-bold text-2xl'>About this BeachBliss</h3>
            <p className='mt-4 text-base text-color6'>
              Affordable hotels at prime location.
            </p>
          </div>
          {/* Choose your room */}
          <div className='my-5'>
            <h3 className='font-bold text-2xl'>Choose your room</h3>
            <div className='mt-5 shadow'>
              <p className='bg-gradient-to-r text-color4 text-sm px-5 py-1 rounded-t from-color6 font-semibold to-color8 flex items-center gap-1'>
                <span className='text-color2'>
                  <MdOutlineStar />
                </span>
                SELECTED CATEGORY
              </p>
              <div className='p-5 border-b border-color8'>
                <div className='flex justify-between'>
                  <div className='flex flex-col justify-between'>
                    <div>
                      <h3 className='text-2xl font-medium flex items-center gap-2'>
                        Classic
                        <span className='p-1 text-color4 font-light text-xs bg-color1 rounded-full'>
                          <TiTick />
                        </span>
                      </h3>
                      <p className='mt-3 text-color6'>Room size: 99 sqft</p>
                    </div>
                    <div className='flex items-center gap-6'>
                      <div className='flex  items-center gap-2'>
                        <TbAirConditioning />
                        <span>{room.room_type}</span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <PiTelevisionSimpleFill />
                        <span>{room.tv}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Image
                      className='rounded'
                      src={room?.categories?.room[0]}
                      alt={room.name_type}
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
              </div>
              <div className='p-5 flex justify-between items-center'>
                <div>
                  <h4 className='font-bold text-2xl'>${room.price}</h4>
                  <p className='text-sm text-color8'>+taxes & fees: $10</p>
                </div>
                <div>
                  <button className='px-8 flex items-center gap-1 text-sm font-semibold py-3 border border-color8 rounded'>
                    <span className='p-[2px] text-color4 text-xs bg-color1 rounded-full'>
                      <TiTick />
                    </span>
                    SELECTED
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Ratings */}
          <div>
            <h2 className='text-2xl font-bold mb-5'>Ratings and reviews</h2>
            <div className='shadow rounded border border-color9 flex items-center'>
              <div className='flex justify-center lg:w-2/5 items-center'>
                <div className='text-center'>
                  <div className='flex items-center bg-[#58AC00] w-fit gap-1 font-semibold text-color9 p-2 rounded text-xl'>
                    <span className='text-xl'>4.4</span> <FaStar />
                  </div>
                  <p className='font-semibold text-xs mt-2 mb-1'>VERY GOOD</p>
                  <p className='text-xs'>455 ratings</p>
                </div>
              </div>
              <div className='lg:w-3/5 py-3 border-s border-color8 flex justify-center items-center'>
                <div className='space-y-2'>
                  <div className='flex items-center gap-1 text-xs'>
                    5{" "}
                    <span className='text-color8'>
                      <FaStar />
                    </span>
                    <progress
                      className='progress progress-warning w-80'
                      value={58}
                      max='100'></progress>
                    <span className='text-color8'>58%</span>
                  </div>
                  <div className='flex items-center gap-1 text-xs'>
                    4{" "}
                    <span className='text-color8'>
                      <FaStar />
                    </span>
                    <progress
                      className='progress progress-warning w-80'
                      value={15}
                      max='100'></progress>
                    <span className='text-color8'>15%</span>
                  </div>
                  <div className='flex items-center gap-1 text-xs'>
                    3{" "}
                    <span className='text-color8'>
                      <FaStar />
                    </span>
                    <progress
                      className='progress progress-warning w-80'
                      value={11}
                      max='100'></progress>
                    <span className='text-color8'>11%</span>
                  </div>
                  <div className='flex items-center gap-1 text-xs'>
                    2{" "}
                    <span className='text-color8'>
                      <FaStar />
                    </span>
                    <progress
                      className='progress progress-warning w-80'
                      value={2}
                      max='100'></progress>
                    <span className='text-color8'>2%</span>
                  </div>
                  <div className='flex items-center gap-1 text-xs'>
                    1{" "}
                    <span className='text-color8'>
                      <FaStar />
                    </span>
                    <progress
                      className='progress progress-warning w-80'
                      value={11}
                      max='100'></progress>
                    <span className='text-color8'>11%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Reviews */}
          <div>
            <div className='py-5 border-b border-color7'>
              <div>
                <div className='flex justify-between items-center mb-5'>
                  <div className='flex items-center gap-3'>
                    <div className='avatar'>
                      <div className='w-10 rounded-full'>
                        <Image
                          src='https://i.ibb.co/hCsWc0x/teacher2.jpg'
                          alt=''
                          width={200}
                          height={200}
                        />
                      </div>
                    </div>
                    <p className='font-semibold text-sm'>Somnath Chatterjee</p>
                    <p className='font-bold'>·</p>
                    <p className='text-xs'>21 Jun 2024</p>
                  </div>
                  <div>
                    <p className='flex items-center gap-1 text-color4 text-sm bg-[#346000] w-fit px-2 py-1'>
                      5 <FaStar className='text-xs' />
                    </p>
                  </div>
                </div>
                <div>
                  <Image
                    className='rounded'
                    src={room?.categories?.room[1]}
                    alt=''
                    width={150}
                    height={100}
                  />
                </div>
              </div>
            </div>
            <div className='py-5'>
              <div>
                <div className='flex justify-between items-center mb-5'>
                  <div className='flex items-center gap-3'>
                    <div className='avatar'>
                      <div className='w-10 rounded-full'>
                        <Image
                          src='https://i.ibb.co/P9fq2dg/alex-suprun-ZHv-M3-XIOHo-E-unsplash.jpg'
                          alt=''
                          width={200}
                          height={200}
                        />
                      </div>
                    </div>
                    <p className='font-semibold text-sm'>Sagar Sinha</p>
                    <p className='font-bold'>·</p>
                    <p className='text-xs'>11 Jul 2024</p>
                  </div>
                  <div>
                    <p className='flex items-center gap-1 text-color4 text-sm bg-[#346000] w-fit px-2 py-1'>
                      5 <FaStar className='text-xs' />
                    </p>
                  </div>
                </div>
                <div>
                  <Image
                    className='rounded'
                    src={room?.categories?.washroom[0]}
                    alt=''
                    width={150}
                    height={100}
                  />
                </div>
              </div>
            </div>
            <p className='font-semibold text-color10 cursor-pointer'>
              See all reviews
            </p>
          </div>
          {/* Hotel Policies */}
          <div className='my-5 border-b border-color7'>
            <div className=''>
              <h1 className='text-2xl font-bold'>Hotel policies</h1>
              <div className='py-4 flex items-center '>
                <div className='space-y-3 lg:px-5 border-r border-color7'>
                  <p className=''>Check-in</p>
                  <button className='font-semibold px-4 py-1 border border-color7'>
                    12.00PM
                  </button>
                </div>
                <div className='space-y-3 lg:pl-5'>
                  <p className=''>Check-out</p>
                  <button className='font-semibold border px-4 py-1 border-color7'>
                    11.00AM
                  </button>
                </div>
              </div>
              <div className='py-5'>
                <ul className='text-sm space-y-3'>
                  <li>Couples are welcome</li>
                  <li>
                    Guests can check in using any local or outstation ID proof
                    (PAN card not accepted).
                  </li>
                  <li>Only Indian Nationals allowed</li>
                  <li className='text-'>
                    This hotel is serviced under the trade name of Prafulla Devi
                    Guest House Rajarhat Chomatta as per quality standards of
                    OYO
                  </li>
                </ul>
                <div className='flex justify-between items-center mt-5'>
                  <p className='font-semibold text-color10'>
                    View Guest Policy
                  </p>
                  <p className='font-semibold text-color10 flex items-center gap-2'>
                    <CiSearch />
                    Find OYOs without these rules
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* What's nearby */}
          <div className='my-5'>
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
          </div>
        </div>
        {/* Booking Section */}
        <div className='lg:w-2/5 shadow rounded h-fit sticky right-[5%] top-8 z-40 bg-color4'>
          <div>
            <div className='bg-gradient-to-r rounded-t from-[#D72E5E] to-[#F15439] flex items-center justify-between px-5 py-2'>
              <p className='text-sm font-medium flex items-center gap-1 text-color4'>
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
              <p className='font-bold text-3xl'>${room.price}</p>
              <p className='text-color8 text-xs'>+taxes & fees: $10</p>
              <div className='flex justify-between items-center font-medium shadow p-4 mt-3'>
                <p>Mon, 15 Jul - Tue, 16 Jul</p>
                <p>1 Room, 1 Guest</p>
              </div>
              <div className='flex justify-between items-center font-medium shadow p-4 mt-3'>
                <p className='flex items-center gap-1 font-medium'>
                  <MdOutlineDoorFront className='text-color8 text-xl' /> Classic
                </p>
                <p>
                  <FaPencilAlt className='text-color2' />
                </p>
              </div>
              <div className='py-5 flex justify-between items-start border-b border-dashed border-color8'>
                <div>
                  <p className='flex text-sm gap-3 items-center'>
                    <span className='p-1 text-[10px] bg-color2 text-color4 rounded-full'>
                      <FaPercentage />
                    </span>
                    WELCOME75 coupon applied
                  </p>
                  <button className='bg-[#EFFCF5] font-semibold text-color6 rounded-sm p-1 mt-2 ml-8 text-xs border border-[#97E1BB]'>
                    MORE OFFERS
                  </button>
                </div>
                <div className='flex items-center gap-3'>
                  <p className='font-semibold'>-$10</p>
                  <span className=' text-color4 font-light text-base bg-color1'>
                    <TiTick />
                  </span>
                </div>
              </div>
              <div className='pt-5 flex justify-between'>
                <p>Your savings</p>
                <p className='font-semibold'>$10</p>
              </div>
              <div className='pt-5 flex justify-between'>
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
        <div className='bg-[#000000e6] flex justify-center items-center bg-opacity-50 min-w-full mx-auto h-screen'>
          <div className='modal-box bg-transparent min-w-full h-screen rounded-none p-0'>
            <form method='dialog'>
              <button className='btn z-50 text-color4 text-2xl font-bold btn-sm btn-circle btn-ghost absolute right-16 top-2'>
                ✕
              </button>
            </form>
            <ImageSlider room={room} />
          </div>
        </div>
      </dialog>
      <ToastContainer />
    </div>
  );
};

export default DetailsPage;
