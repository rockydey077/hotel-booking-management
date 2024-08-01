"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaStar, FaWifi } from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import { MdOutlineElevator, MdOutlineStar } from "react-icons/md";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { TbAirConditioning } from "react-icons/tb";
import { TiTick } from "react-icons/ti";

const RoomDetails = ({ room }) => {
  return (
    <div>
      <div className='flex items-start gap-8 justify-between'>
        <h1 className='text-[32px] font-bold'>{room.room_name}</h1>
        <Link href={"#review"} className='cursor-pointer'>
          <div className='flex items-center bg-[#58AC00] w-fit gap-1 font-semibold text-color9 rounded-t-[2px] p-2 text-xl'>
            <span className='text-xl'>4.4</span> <FaStar />
          </div>
          <p className='bg-color9 rounded-b-[2px] w-fit text-xs p-[2px]'>
            455 Ratings
          </p>
        </Link>
      </div>
      <p className='text-color8 lg:w-[85%] text-base font-normal mt-4'>
        {room.description}
      </p>
      {/* Amenities */}
      <h3 className='text-[22px] font-bold my-5'>Amenities</h3>
      <div className='grid grid-cols-3 gap-4 text-sm'>
        <div className='flex items-center gap-2'>
          <TbAirConditioning className='text-xl' />
          <span>{room.room_type}</span>
        </div>
        <div className='flex items-center gap-2'>
          <PiTelevisionSimpleFill className='text-xl' />
          <span>{room.tv}</span>
        </div>
        <div className='flex items-center gap-2'>
          <FaWifi className='text-xl' />
          <span>{room.wifi}</span>
        </div>
        <div className='flex items-center gap-2'>
          <FaKitchenSet className='text-xl' />
          <span>{room.kitchen}</span>
        </div>
        <div className='flex items-center gap-2'>
          <MdOutlineElevator className='text-xl' />
          <span>{room.elevator}</span>
        </div>
      </div>
      <p className='mt-5 font-semibold text-color10'>Show More</p>
      {/* About */}
      <div className='my-5'>
        <h3 className='font-bold text-[22px]'>About this BeachBliss</h3>
        <p className='mt-4 text-sm text-color6'>
          Affordable hotels at prime location.
        </p>
      </div>
      {/* Choose your room */}
      <div className='my-5'>
        <h3 className='font-bold text-[22px]'>Choose your room</h3>
        <div className='mt-5 shadow'>
          <p className='bg-gradient-to-r text-color4 text-[12px] px-5 py-1 rounded-t from-color6 font-bold to-color8 flex items-center gap-1'>
            <span className='text-color2'>
              <MdOutlineStar />
            </span>
            SELECTED CATEGORY
          </p>
          <div className='p-5 border-b border-color8'>
            <div className='flex justify-between'>
              <div className='flex flex-col justify-between'>
                <div>
                  <h3 className='text-[21px] font-semibold flex items-center gap-2'>
                    Classic
                    <span className='p-1 text-color4 font-light text-xs bg-color1 rounded-full'>
                      <TiTick />
                    </span>
                  </h3>
                  <p className='mt-3 text-sm text-color6'>Room size: 99 sqft</p>
                </div>
                <div className='flex text-sm items-center gap-6'>
                  <div className='flex  items-center gap-2'>
                    <TbAirConditioning className='text-xl' />
                    <span>{room.room_type}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <PiTelevisionSimpleFill className='text-xl' />
                    <span>{room.tv}</span>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  className='rounded'
                  src={room?.image[0]}
                  alt={room.name_type}
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
          <div className='p-5 flex justify-between items-center'>
            <div>
              <h4 className='font-bold text-lg'>${room.price}</h4>
              <p className='text-[13px] text-color8'>+taxes & fees: $10</p>
            </div>
            <div>
              <button className='px-8 flex items-center gap-1 text-xs font-bold py-3 border border-color8 rounded'>
                <span className='p-[2px] text-color4 text-[10px] bg-color1 rounded-full'>
                  <TiTick />
                </span>
                SELECTED
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Ratings */}
      <div id='review'>
        <h2 className='text-[22px] font-bold mb-5'>Ratings and reviews</h2>
        <div className='shadow rounded border border-color9 flex items-center'>
          <div className='flex justify-center lg:w-2/5 items-center'>
            <div className='text-center'>
              <div className='flex items-center bg-[#58AC00] w-fit gap-1 font-semibold text-color9 p-2 rounded text-xl'>
                <span className='text-xl'>4.4</span> <FaStar />
              </div>
              <p className='font-bold text-xs mt-2 mb-1'>VERY GOOD</p>
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
                src={room?.image[0]}
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
                src={room?.image[5]}
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
          <h1 className='text-[22px] font-bold'>Hotel policies</h1>
          <div className='py-4 flex items-center '>
            <div className='space-y-3 lg:px-5 border-r border-color7'>
              <p className='text-sm'>Check-in</p>
              <div className='relative'>
                <div className='absolute content-none w-[14px] h-[14px] -top-[7px] left-[10px] bg-color4 rotate-45 border-color7 z-10 border-t border-l'></div>
                <button className='font-semibold bg-color4 border px-4 py-1 border-color7'>
                  12.00 PM
                </button>
              </div>
            </div>
            <div className='space-y-3 lg:pl-5'>
              <p className='text-sm'>Check-out</p>
              <div className='relative'>
                <div className='absolute content-none w-[14px] h-[14px] -top-[7px] left-[10px] bg-color4 rotate-45 border-color7 z-10 border-t border-l'></div>
                <button className='font-semibold bg-color4 border px-4 py-1 border-color7'>
                  11.00 AM
                </button>
              </div>
            </div>
          </div>
          <div className='py-5'>
            <ul className='text-sm space-y-3 list-disc list-inside'>
              <li>Couples are welcome</li>
              <li>
                Guests can check in using any local or outstation ID proof (PAN
                card not accepted).
              </li>
              <li>Only Indian Nationals allowed</li>
              <li className=''>
                This hotel is serviced under the trade name of Prafulla Devi
                Guest House Rajarhat Chomatta as per quality standards of OYO
              </li>
            </ul>
            <div className='flex justify-between items-center mt-5'>
              <p className='font-semibold text-color10'>View Guest Policy</p>
              <p className='font-semibold text-color10 flex items-center gap-2'>
                <CiSearch />
                Find OYOs without these rules
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
