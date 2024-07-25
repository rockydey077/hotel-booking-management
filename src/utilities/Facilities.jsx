"use client";
import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Facilities = () => {
  const [facility, setFacility] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch("facilities.json")
      .then((res) => res.json())
      .then((data) => setFacility(data));
  }, []);
  return (
    <div>
      <h3 className='text-sm font-bold text-[#222] mb-4'>Home Facilities</h3>
      <div
        style={{ display: "flex", flexDirection: "column", gap: "18px" }}
        className=''>
        {show
          ? facility.map((f, index) => (
              <div className='flex items-center gap-2' key={index}>
                <input type='checkbox' name='' id='' />
                <p className='text-sm font-normal text-[#222]'>{f}</p>
              </div>
            ))
          : facility.slice(0, 5).map((f, index) => (
              <div className='flex items-center gap-2' key={index}>
                <input className='' type='checkbox' name='' id='' />
                <p className='text-sm font-normal text-[#222]'>{f}</p>
              </div>
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

export default Facilities;
