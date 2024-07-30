"use client";
import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Collections = () => {
  const [collection, setCollection] = useState([]);
  const [show, setShow] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [idx, setIdx] = useState(null);

  useEffect(() => {
    fetch("collections.json")
      .then((res) => res.json())
      .then((data) => setCollection(data));
  }, []);

  return (
    <div>
      <h3 className='text-sm font-bold text-[#222] mb-4'>Collections</h3>
      <div
        style={{ display: "flex", flexDirection: "column", gap: "18px" }}
        className=''>
        {show
          ? collection.map((c, index) => (
              <div className='flex items-center gap-2' key={index}>
                <input
                  checked={index === idx && isChecked}
                  type='checkbox'
                  name=''
                  id=''
                />
                <p
                  onClick={() => {
                    setIsChecked(!isChecked);
                    setIdx(index);
                  }}
                  className='text-sm font-normal text-[#222] cursor-pointer'>
                  {c}
                </p>
              </div>
            ))
          : collection.slice(0, 5).map((c, index) => (
              <div className='flex items-center gap-2' key={index}>
                <input
                  checked={index === idx && isChecked}
                  className=''
                  type='checkbox'
                  name=''
                  id=''
                />
                <p
                  onClick={() => {
                    setIsChecked(!isChecked);
                    setIdx(index);
                  }}
                  className='text-sm font-normal text-[#222] cursor-pointer'>
                  {c}
                </p>
              </div>
              // <div key={index} className='form-control'>
              //   <label className='label justify-start gap-2'>
              //     <input type='checkbox' className='checkbox !w-3 !h-3' />
              //     <span className='label-text text-sm font-normal text-[#222] cursor-pointer'>
              //       {c}
              //     </span>
              //   </label>
              // </div>
            ))}
      </div>
      <div>
        {show ? (
          <button
            onClick={() => setShow(false)}
            style={{ color: "#ee2a24", marginTop: "18px" }}
            className='flex items-center gap-1 text-sm font-semibold'>
            <FaMinus /> View Less
          </button>
        ) : (
          <button
            onClick={() => setShow(true)}
            style={{ color: "#ee2a24", marginTop: "18px" }}
            className='flex items-center gap-1 text-sm font-semibold'>
            <FaPlus /> View More
          </button>
        )}
      </div>
    </div>
  );
};

export default Collections;
