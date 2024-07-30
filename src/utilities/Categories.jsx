"use client";
import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Categories = () => {
  const [category, setCategory] = useState([]);
  const [show, setShow] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [idx, setIdx] = useState(null);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <div>
      <h3 className='text-sm font-bold text-[#222] mb-4'>Categories</h3>
      <div
        style={{ display: "flex", flexDirection: "column", gap: "18px" }}
        className=''>
        {show
          ? category.map((c, index) => (
              <div className='flex gap-2' key={index}>
                <input
                  checked={index === idx && isChecked}
                  className='mb-5'
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
                  <span className='font-semibold'>{c.title}</span> -{" "}
                  <span>{c.description}</span>
                </p>
              </div>
            ))
          : category.slice(0, 5).map((c, index) => (
              <div className='flex gap-2' key={index}>
                <input
                  checked={index === idx && isChecked}
                  className='mb-5'
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
                  <span className='font-semibold'>{c.title}</span> -{" "}
                  <span>{c.description}</span>
                </p>
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
