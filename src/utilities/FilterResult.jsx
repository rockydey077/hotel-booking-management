"use client";
import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const FilterResult = () => {
  const [filter, setFilter] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch("filter.json")
      .then((res) => res.json())
      .then((data) => {
        setFilter(data);
      });
  }, []);

  return (
    <div>
      <div
        style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
        className=''>
        {show
          ? filter.map((f, index) => (
              <p
                style={{
                  padding: "2px 10px 2px 10px",
                  backgroundColor: "#0000000d",
                }}
                className='cursor-pointer'
                key={index}>
                {f}
              </p>
            ))
          : filter.slice(0, 5).map((f, index) => (
              <p
                style={{
                  padding: "2px 10px 2px 10px",
                  backgroundColor: "#0000000d",
                }}
                className='cursor-pointer'
                key={index}>
                {f}
              </p>
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

export default FilterResult;
