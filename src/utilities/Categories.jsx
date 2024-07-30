"use client";
import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Categories = ({
  cateFilters,
  setCateFilters,
  cateFilterList,
  setClear,
}) => {
  const [show, setShow] = useState(false);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCateFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
    setClear(true);
  };

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <div>
      <h3 className='text-sm font-bold text-[#222] mb-4'>Categories</h3>
      <div
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        className=''>
        {show
          ? cateFilterList.map((filter) => (
              <div key={filter.id} className='form-control'>
                <label className='label justify-start gap-2'>
                  <input
                    name={filter.id}
                    checked={cateFilters[filter.id] || false}
                    onChange={handleCheckboxChange}
                    type='checkbox'
                    className='checkbox mb-5'
                  />
                  <p className='label-text text-sm font-normal text-[#222] cursor-pointer'>
                    <span className='font-semibold'>{filter.title}</span> -{" "}
                    <span>{filter.description}</span>
                  </p>
                </label>
              </div>
            ))
          : cateFilterList.slice(0, 5).map((filter) => (
              <div key={filter.id} className='form-control'>
                <label className='label justify-start gap-2'>
                  <input
                    name={filter.id}
                    checked={cateFilters[filter.id] || false}
                    onChange={handleCheckboxChange}
                    type='checkbox'
                    className='checkbox mb-5'
                  />
                  <p className='label-text text-sm font-normal text-[#222] cursor-pointer'>
                    <span className='font-semibold'>{filter.title}</span> -{" "}
                    <span>{filter.description}</span>
                  </p>
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

export default Categories;
