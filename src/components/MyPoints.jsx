import React from "react";
import { FaStar } from "react-icons/fa";

const MyPoints = () => {
  return (
    <div className='text-center'>
      <div>
        <div className='text-[#FFC102] text-xl p-1 border-4 border-[#FFD24D] rounded-full w-fit mx-auto'>
          <FaStar />
        </div>
        <h3 className='text-3xl font-black text-[#FFC101] my-2'>600</h3>
      </div>
      <div>
        <h5 className='text-base font-bold mb-1'>Your Balance</h5>
        <p className='text-base text-slate-600 font-bold'>
          Earn more points, redeem exciting gifts and enjoy your tbh experience
        </p>
      </div>
    </div>
  );
};

export default MyPoints;
