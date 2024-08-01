import React from "react";
import styles from "./printStyle.module.css";
import Image from "next/image";

const PrintPage = () => {
  return (
    <div className='max-w-screen-xl mx-auto py-16'>
      <div className='p-2 m-2'>
        <h2 className='text-[#1ab64f] text-[28px] font-extrabold'>
          Great! Your stay is confirmed.
        </h2>
        <p className='text-base text-[#222] font-semibold'>
          You will soon receive an email confirmation on rocky@dey.com
        </p>
        <button className='mt-8 text-base font-bold border-2 border-[#222] rounded-sm px-16 py-2'>
          Print
        </button>
      </div>
      <div className={`${styles.print_div}`}>
        <div className='text-[#222] flex justify-between'>
          <div>
            <h3 className='text-2xl font-bold mb-3'>Booking Id</h3>
            <h4 className='text-2xl'>TM9Z3861</h4>
          </div>
          <div>
            <p className='text-sm'>Booked by Cold on Thu, 1 Aug 2024</p>
          </div>
        </div>
        <div className='border border-[#d6d6d6] my-6'></div>
        <div className='flex'>
          <div className='flex-1 max-w-[75%] text-[#222]'>
            <h3 className='text-lg font-bold'>
              Collection O Pixel Avenue near Embassy Tech Village
            </h3>
            <h3 className='text-lg font-bold mt-10'>
              Townhouse Pixel Avenue Near Embassy Tech Park
            </h3>
            <p className='text-sm mt-2'>
              No 1, Bhoganahalli,Survey 128/6, Near Flipkart, Varth Hobli,
              Bangalore
            </p>
            <div className='mt-10 text-sm font-bold'>
              <span>Hotel Direction</span>
            </div>
            <div className='mt-10 text-sm font-bold'>
              <span>Landmark:</span>
            </div>
          </div>
          <div className='flex-1 max-w-[25%]'>
            <Image
              width={400}
              height={400}
              className='w-fit '
              src='https://i.ibb.co/hx6dnbj/room5img1.jpg'
              alt=''
            />
          </div>
        </div>
        <div className='border border-[#d6d6d6] my-6'></div>
        <div className='flex'>
          <div className='flex-1 max-w-[75%] text-[#222] grid grid-cols-3 gap-5'>
            <div>
              <p className='text-sm'>Primary Guest</p>
              <h5 className='mt-1 text-base font-semibold'>Cold</h5>
            </div>
            <div>
              <p className='text-sm'>Check In</p>
              <h5 className='mt-1 text-base font-semibold'>2024-08-01</h5>
            </div>
            <div>
              <p className='text-sm'>Check In Time</p>
              <h5 className='mt-1 text-base font-semibold'>12:00 PM</h5>
            </div>
            <div>
              <p className='text-sm'>Mobile Number</p>
              <h5 className='mt-1 text-base font-semibold'>7543074253</h5>
            </div>
            <div>
              <p className='text-sm'>Check Out</p>
              <h5 className='mt-1 text-base font-semibold'>2024-08-02</h5>
            </div>
            <div>
              <p className='text-sm'>Check Out Time</p>
              <h5 className='mt-1 text-base font-semibold'>11:00 AM</h5>
            </div>
            <div>
              <p className='text-sm'>Email Address</p>
              <h5 className='mt-1 text-base font-semibold'>rocky@dey.com</h5>
            </div>
          </div>
          <div className='flex-1 max-w-[25%] text-[#222] space-y-5'>
            <div>
              <h3 className='text-[32px] font-semibold'>1 Night</h3>
            </div>
            <div className='text-sm flex'>
              <div className='max-w-[50%] flex-auto'>
                <p>1 Guest</p>
              </div>
              <div className='max-w-[50%]'>
                <p>1 Room</p>
                <h5 className='text-base font-semibold'>Classic</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintPage;
