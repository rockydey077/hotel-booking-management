import React from "react";
import { FaStar } from "react-icons/fa";
import hand from "../../public/assets/icons/handwriting.png";
import camera from "../../public/assets/icons/camera.png";
import friend from "../../public/assets/icons/friends.png";
import Image from "next/image";

const MorePoints = () => {
  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-4'>
          <div className='p-2 bg-[#F8F4F2] rounded-xl w-fit'>
            <Image
              className='w-5'
              width={200}
              height={200}
              src={hand}
              alt='hand'
            />
          </div>
          <div>
            <p className='font-bold'>Take a quiz</p>
            <div className='flex items-center gap-2'>
              <div className='text-[#FFC102] text-[10px] p-[2px] border-2 border-[#FFD24D] rounded-full w-fit'>
                <FaStar />
              </div>
              <p className='text-[#FFC102] font-medium text-base'>500</p>
            </div>
          </div>
        </div>
        <div>
          <button className='px-3 py-1 border-2 border-slate-200 rounded-lg text-sm font-bold'>
            Earn
          </button>
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-4'>
          <div className='p-2 bg-[#F8F4F2] rounded-xl w-fit'>
            <Image
              className='w-5'
              width={200}
              height={200}
              src={camera}
              alt='camera'
            />
          </div>
          <div>
            <p className='font-bold'>Watch a video</p>
            <div className='flex items-center gap-2'>
              <div className='text-[#FFC102] text-[10px] p-[2px] border-2 border-[#FFD24D] rounded-full w-fit'>
                <FaStar />
              </div>
              <p className='text-[#FFC102] font-medium text-base'>50</p>
            </div>
          </div>
        </div>
        <div>
          <button className='px-3 py-1 border-2 border-slate-200 rounded-lg text-sm font-bold'>
            Earn
          </button>
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-4'>
          <div className='p-2 bg-[#F8F4F2] rounded-xl w-fit'>
            <Image
              className='w-5'
              width={200}
              height={200}
              src={friend}
              alt='friend'
            />
          </div>
          <div>
            <p className='font-bold'>Refer a friend</p>
            <div className='flex items-center gap-2'>
              <div className='text-[#FFC102] text-[10px] p-[2px] border-2 border-[#FFD24D] rounded-full w-fit'>
                <FaStar />
              </div>
              <p className='text-[#FFC102] font-medium text-base'>500</p>
            </div>
          </div>
        </div>
        <div>
          <button className='px-3 py-1 border-2 border-slate-200 rounded-lg text-sm font-bold'>
            Earn
          </button>
        </div>
      </div>
      <div className=''>
        <button className='py-1 w-full border-2 border-slate-200 rounded-xl text-sm font-bold'>
          View 13 More
        </button>
      </div>
    </div>
  );
};

export default MorePoints;
