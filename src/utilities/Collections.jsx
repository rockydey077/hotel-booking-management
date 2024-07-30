"use client";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import "./Collections.css";

const Collections = ({ cFilters, setCFilters, cFilterList, setClear }) => {
  const [show, setShow] = useState(false);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
    setClear(true);
  };

  return (
    <div>
      <h3 className='text-sm font-bold text-[#222] mb-4'>Collections</h3>
      <div
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        className=''>
        {show
          ? cFilterList.map((filter) => (
              <div key={filter.id} className='form-control'>
                <label className='label justify-start gap-2'>
                  <input
                    name={filter.id}
                    checked={cFilters[filter.id] || false}
                    onChange={handleCheckboxChange}
                    type='checkbox'
                    className='checkbox'
                  />
                  <span className='label-text text-sm font-normal text-[#222] cursor-pointer'>
                    {filter.label}
                  </span>
                </label>
              </div>
            ))
          : cFilterList.slice(0, 5).map((filter) => (
              <div key={filter.id} className='form-control'>
                <label className='label justify-start gap-2'>
                  <input
                    name={filter.id}
                    checked={cFilters[filter.id] || false}
                    onChange={handleCheckboxChange}
                    type='checkbox'
                    className='checkbox'
                  />
                  <span className='label-text text-sm font-normal text-[#222] cursor-pointer'>
                    {filter.label}
                  </span>
                </label>
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

export default Collections;
