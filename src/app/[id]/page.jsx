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
import { FaFacebook, FaWhatsapp, FaWifi } from "react-icons/fa";
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

const DetailsPage = ({ params }) => {
  const [room, setRoom] = useState({});
  const [isFixed, setIsFixed] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);
  const sectionRef = useRef(null);

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

  useEffect(() => {
    let lastScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const offsetTop = sectionRef.current.offsetTop;

      if (currentScrollTop > offsetTop && currentScrollTop > lastScrollTop) {
        setIsFixed(true);
        setScrollDirection("down");
      } else if (currentScrollTop < lastScrollTop) {
        setIsFixed(false);
        setScrollDirection("up");
      }

      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        <div className='absolute right-5 bg-color4 bottom-5 z-10'>
          <button
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className='flex p-3 border-2 border-color3 rounded items-center gap-2 font-medium text-lg'>
            <GrGallery className='text-xl' /> View all photos
          </button>
        </div>
        <div>
          <details className='dropdown dropdown-bottom dropdown-end bg-color4 absolute right-5 top-5 z-10'>
            <summary className='flex p-3 border-2 border-color3 rounded items-center gap-2 font-medium text-lg cursor-pointer'>
              <FaRegShareSquare />
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
          <div className='flex items-center gap-10 justify-between'>
            <h1 className='text-3xl font-bold'>{room.room_name}</h1>
            <div className=''>
              <div className='flex items-center bg-color1 w-fit gap-1 font-semibold text-color9 p-3 text-xl'>
                <span className='text-2xl'>4.4</span> <FaStar />
              </div>
              <p className='bg-color9 w-fit text-sm p-[3px]'>455 Ratings</p>
            </div>
          </div>
          <p className='text-color8 lg:w-3/4 text-base font-medium mt-4'>
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
          <div className='my-5'>
            <h3 className='font-bold text-2xl'>About this BeachBliss</h3>
            <p className='mt-4 text-base text-color6'>
              Affordable hotels at prime location.
            </p>
          </div>
          <div className='my-5'>
            <h3 className='font-bold text-2xl'>Choose your room</h3>
            <div className='mt-5 shadow'>
              <p className='bg-gradient-to-r text-color4 text-base px-5 py-1 rounded-t from-color6 to-color8 flex items-center gap-1'>
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
                        <span className='p-1 text-color4 text-lg bg-color1 rounded-full'>
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
                    <span className='p-[2px] text-color4 text-base bg-color1 rounded-full'>
                      <TiTick />
                    </span>
                    SELECTED
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className='text-2xl font-bold mb-5'>Ratings and reviews</h2>
            <div className='shadow rounded border border-color9 flex items-center'>
              <div className='flex justify-center lg:w-2/5 items-center'>
                <div className='text-center'>
                  <div className='flex items-center bg-color1 w-fit gap-1 font-semibold text-color9 p-2 rounded text-xl'>
                    <span className='text-2xl'>4.4</span> <FaStar />
                  </div>
                  <p className='font-semibold text-sm'>VERY GOOD</p>
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
                      className='progress progress-success w-56'
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
                      className='progress progress-success w-56'
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
                      className='progress progress-success w-56'
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
                      className='progress progress-success w-56'
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
                      className='progress progress-success w-56'
                      value={11}
                      max='100'></progress>
                    <span className='text-color8'>11%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Booking Section */}
        <div className='lg:w-2/5 shadow rounded h-fit'>
          <div
            className={`${
              isFixed &&
              scrollDirection === "down" &&
              "fixed top-0 z-40 w-[31%]"
            } border rounded border-color8`}
            ref={sectionRef}>
            <div className='bg-gradient-to-r rounded-t from-[#D72E5E] to-[#F15439] flex items-center justify-between px-3 py-2'>
              <p className='text-sm font-medium text-color4'>
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
              <div className='mt-3 flex justify-between'>
                <p>Total Price:</p>
                <p className='font-semibold'>${room.price + 10}</p>
              </div>
              <p className='text-color8 text-xs'>Includes taxes & fees</p>
              <button className='mt-3 px-5 py-3 w-full font-medium bg-color1 rounded text-color4'>
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
        <div className='bg-color3 flex justify-center items-center bg-opacity-50 min-w-full mx-auto h-screen'>
          <div className='modal-box bg-transparent min-w-full h-screen rounded-none p-0'>
            <form method='dialog'>
              <button className='btn z-50 bg-color4 btn-sm btn-circle btn-ghost absolute right-2 top-2'>
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
