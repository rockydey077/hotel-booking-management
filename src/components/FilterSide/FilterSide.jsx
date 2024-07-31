"use client";
import Categories from "@/utilities/Categories";
import Collections from "@/utilities/Collections";
import Facilities from "@/utilities/Facilities";
import FilterResult from "@/utilities/FilterResult";
import React, { useEffect, useState } from "react";
import { Range, getTrackBackground } from "react-range";

const features = [{ id: "payHotel", label: "Pay at Hotel" }];

const FilterSide = () => {
  const [clear, setClear] = useState(false);
  const [values, setValues] = useState([395, 2605]);
  const [cFilters, setCFilters] = useState({});
  const [cFilterList, setCFilterList] = useState([]);
  const [fcFilters, setFcFilters] = useState({});
  const [fcFilterList, setFcFilterList] = useState([]);
  const [acFilters, setAcFilters] = useState({});
  const [acFilterList, setAcFilterList] = useState([]);
  const [cateFilters, setCateFilters] = useState({});
  const [cateFilterList, setCateFilterList] = useState([]);
  const [payFilters, setPayFilters] = useState({});
  const MIN = 0;
  const MAX = 3000;

  useEffect(() => {
    setPayFilters(
      features.reduce((acc, filter) => {
        acc[filter.id] = false;
        return acc;
      }, {})
    );
  }, []);

  useEffect(() => {
    fetch("collections.json")
      .then((res) => res.json())
      .then((data) => {
        const initialFilters = data.reduce((acc, filter) => {
          acc[filter.id] = false;
          return acc;
        }, {});
        setCFilters(initialFilters);
        setCFilterList(data);
      });
  }, []);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => {
        const initialFilters = data.reduce((acc, filter) => {
          acc[filter.id] = false;
          return acc;
        }, {});
        setCateFilters(initialFilters);
        setCateFilterList(data);
      });
  }, []);

  useEffect(() => {
    fetch("facilities.json")
      .then((res) => res.json())
      .then((data) => {
        const initialFilters = data.reduce((acc, filter) => {
          acc[filter.id] = false;
          return acc;
        }, {});
        setFcFilters(initialFilters);
        setFcFilterList(data);
      });
  }, []);

  useEffect(() => {
    fetch("accomodation.json")
      .then((res) => res.json())
      .then((data) => {
        const initialFilters = data.reduce((acc, filter) => {
          acc[filter.id] = false;
          return acc;
        }, {});
        setAcFilters(initialFilters);
        setAcFilterList(data);
      });
  }, []);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setAcFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
    setClear(true);
  };

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setPayFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
    setClear(true);
  };

  const handleClearAll = () => {
    const clearedFilters = cFilterList.reduce((acc, filter) => {
      acc[filter.id] = false;
      return acc;
    }, {});
    setCFilters(clearedFilters);

    setCateFilters(
      cateFilterList.reduce((acc, filter) => {
        acc[filter.id] = false;
        return acc;
      }, {})
    );

    setFcFilters(
      fcFilterList.reduce((acc, filter) => {
        acc[filter.id] = false;
        return acc;
      }, {})
    );

    setAcFilters(
      acFilterList.reduce((acc, filter) => {
        acc[filter.id] = false;
        return acc;
      }, {})
    );

    setPayFilters(
      features.reduce((acc, filter) => {
        acc[filter.id] = false;
        return acc;
      }, {})
    );
  };

  return (
    <div className=''>
      <div className='flex justify-between items-end'>
        <h1 className='text-[26px] font-bold text-[#333]'>Filters</h1>
        {clear && (
          <p
            onClick={() => {
              handleClearAll();
              setClear(false);
              setValues([395, 2605]);
            }}
            className='text-sm cursor-pointer font-semibold text-[#ee2a24]'>
            Clear All
          </p>
        )}
      </div>
      <h4 className='text-sm font-bold mt-1 mb-4 text-[#222]'>
        Popular locations in Kolkata, <br /> West Bengal, India
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
            onChange={(values) => {
              setValues(values);
              setClear(true);
            }}
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
        <Collections
          cFilterList={cFilterList}
          cFilters={cFilters}
          setCFilters={setCFilters}
          setClear={setClear}
        />
      </div>
      <div className='my-6 border-b border-color8'></div>
      <div className=''>
        <Categories
          cateFilters={cateFilters}
          setCateFilters={setCateFilters}
          cateFilterList={cateFilterList}
          setClear={setClear}
        />
      </div>
      <div className='my-6 border-b border-color8'></div>
      <div>
        <h3 className='text-sm font-bold text-[#222] mb-4'>
          Accomodation Type
        </h3>
        <div className='space-y-[10px]'>
          {acFilterList.map((filter) => (
            <div key={filter.id} className='form-control'>
              <label className='label justify-start gap-2'>
                <input
                  name={filter.id}
                  checked={acFilters[filter.id] || false}
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
      </div>
      <div className='my-6 border-b border-color8'></div>
      <div>
        <Facilities
          fcFilters={fcFilters}
          setFcFilters={setFcFilters}
          fcFilterList={fcFilterList}
          setClear={setClear}
        />
      </div>
      <div className='my-6 border-b border-color8'></div>
      <div className='pb-6'>
        <h3 className='text-sm font-bold text-[#222] mb-4'>
          Check-in features
        </h3>
        <div className='form-control'>
          {features.map((filter) => (
            <div key={filter.id} className='form-control'>
              <label className='label justify-start gap-2'>
                <input
                  name={filter.id}
                  checked={payFilters[filter.id] || false}
                  onChange={handleChange}
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
      </div>
    </div>
  );
};

export default FilterSide;
