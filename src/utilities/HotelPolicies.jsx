import React from "react";

const HotelPolicies = () => {
  return (
    <div className=''>
      <h1 className='text-2xl font-bold'>Hotel policies</h1>
      <div className='py-4 flex items-center gap-8'>
        <div className='space-y-3'>
          <p className=''>Check-in</p>
          <button className='font-semibold border border-color7'>
            12.00PM
          </button>
        </div>
        <div className='space-y-3'>
          <p className=''>Check-out</p>
          <button className='font-semibold border border-color7'>
            11.00AM
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelPolicies;
