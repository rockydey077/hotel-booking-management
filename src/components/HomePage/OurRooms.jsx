"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const OurRooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("rooms.json")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);

  return (
    <div className='my-24 max-w-screen-xl mx-auto'>
      <h1 className='text-center text-3xl font-medium mb-10'>Our Rooms</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {rooms.map((room) => (
          <div key={room.id}>
            <div className='card card-compact bg-base-100 w-96 shadow-xl'>
              <figure>
                <Image
                  src={room.image[0]}
                  alt={room.room_name}
                  width={500}
                  height={200}
                />
              </figure>
              <div className='card-body'>
                <h2 className='card-title text-xl font-bold'>
                  {room.room_name}
                </h2>
                <div className='flex justify-between my-2 text-base font-medium'>
                  <p>${room.price}/per day</p>
                  <p>
                    Room Condition:{" "}
                    <span className='text-color2'>{room.room_type}</span>
                  </p>
                </div>
                <div className='card-actions justify-start'>
                  <button className='btn bg-color1 text-color9 hover:bg-color1 hover:text-color9'>
                    <Link href={`/${room.id}`}>See Details</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurRooms;
