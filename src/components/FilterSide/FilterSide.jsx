"use client";
import Categories from "@/utilities/Categories";
import Collections from "@/utilities/Collections";
import Facilities from "@/utilities/Facilities";
import FilterResult from "@/utilities/FilterResult";
import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";

const FilterSide = () => {
  const [values, setValues] = useState([397, 2603]);
  const MIN = 0;
  const MAX = 3000;

  return (
    <div className=''>
      <h1 className='text-[26px] font-bold text-[#333]'>Filters</h1>
      <h4 className='text-sm font-bold mt-1 mb-4 text-[#222]'>
        Popular locations in Kolkata, West Bengal, India
      </h4>
      <input
        type='text'
        placeholder='Search..'
        className='w-full text-sm outline-none p-[10px] border border-[#c9c9c9]'
      />
      <div className='mt-4'>
        <FilterResult />
      </div>
      <div className='my-6 border-b border-color8'></div>
      <div>
        <h4 className='text-sm font-bold mb-4 text-[#222]'>Price</h4>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}>
          <Range
            values={values}
            step={1}
            min={MIN}
            max={MAX}
            onChange={(values) => setValues(values)}
            renderTrack={({ props, children }) => (
              <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                style={{
                  ...props.style,
                  height: "36px",
                  display: "flex",
                  width: "100%",
                }}>
                <div
                  ref={props.ref}
                  style={{
                    height: "5px",
                    width: "100%",
                    borderRadius: "4px",
                    background: getTrackBackground({
                      values,
                      colors: ["#ccc", "#FF5733", "#ccc"],
                      min: MIN,
                      max: MAX,
                    }),
                    alignSelf: "center",
                  }}>
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ props, isDragged }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "18px",
                  width: "18px",
                  borderRadius: "50%",
                  backgroundColor: "#FFF",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // boxShadow: "0px 2px 6px #AAA",
                  border: "1px solid #AAA",
                }}>
                {/* <div
                  style={{
                    height: "16px",
                    width: "5px",
                    backgroundColor: isDragged ? "#FF5733" : "#CCC",
                  }}
                /> */}
              </div>
            )}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}>
            <output style={{ marginTop: "0px" }}>₹{values[0]}</output>
            <output style={{ marginTop: "0px" }}>₹{values[1]}</output>
          </div>
        </div>
      </div>
      <div className='my-6 border-b border-color8'></div>
      <div className=''>
        <Collections />
      </div>
      <div className='my-6 border-b border-color8'></div>
      <div className=''>
        <Categories />
      </div>
      <div className='my-6 border-b border-color8'></div>
      <div>
        <h3 className='text-sm font-bold text-[#222] mb-4'>
          Accomodation Type
        </h3>
        <div className='space-y-[10px]'>
          <div className='form-control'>
            <label className='label justify-start gap-2'>
              <input type='checkbox' className='checkbox' />
              <span className='label-text text-sm font-normal text-[#222] cursor-pointer'>
                Resort
              </span>
            </label>
          </div>
          <div className='form-control'>
            <label className='label justify-start gap-2'>
              <input type='checkbox' className='checkbox' />
              <span className='label-text text-sm font-normal text-[#222] cursor-pointer'>
                OYO Home
              </span>
            </label>
          </div>
          <div className='form-control'>
            <label className='label justify-start gap-2'>
              <input type='checkbox' className='checkbox' />
              <span className='label-text text-sm font-normal text-[#222] cursor-pointer'>
                Hotel
              </span>
            </label>
          </div>
        </div>
      </div>
      <div className='my-6 border-b border-color8'></div>
      <div>
        <Facilities />
      </div>
      <div className='my-6 border-b border-color8'></div>
      <div className='pb-6'>
        <h3 className='text-sm font-bold text-[#222] mb-4'>Home Facilities</h3>
        <div className='form-control'>
          <label className='label justify-start gap-2'>
            <input type='checkbox' className='checkbox' />
            <span className='label-text text-sm font-normal text-[#222] cursor-pointer'>
              Pay at Hotel
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterSide;
