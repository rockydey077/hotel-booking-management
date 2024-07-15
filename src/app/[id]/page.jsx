"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DetailsPage = ({ params }) => {
  const [room, setRoom] = useState({});

  useEffect(() => {
    fetch("rooms.json")
      .then((res) => res.json())
      .then((data) => {
        setRoom(data.find((r) => r.id === parseInt(params.id)));
      });
  }, [params]);

  const handleBook = () => {
    const id = room.id;
    const booking = {
      room_type: room.room_type,
      room_name: room.room_name,
      price: room.price,
    };

    localStorage.setItem(JSON.stringify(id), JSON.stringify(booking));
    toast.success("Room booked successfully!");
  };

  return (
    <div className='max-w-screen-md mx-auto my-24 border-2 border-color6 rounded-xl p-10 text-center'>
      <Image
        src={room.image}
        alt={room.room_name}
        className='rounded-xl'
        width={768}
        height={200}
      />
      <h1 className='mt-10 text-3xl font-medium'>{room.room_name}</h1>
      <p className='text-lg my-3'>{room.description}</p>
      <div className='flex justify-evenly text-base'>
        <p>
          <span className='font-semibold'>Price: </span> ${room.price}/per day
        </p>
        <p>
          <span className='font-semibold'>Room Condition: </span>
          {room.room_type}
        </p>
      </div>
      <button
        onClick={handleBook}
        className='mt-5 bg-color1 px-5 py-3 text-color9 rounded font-medium'>
        Book Now
      </button>
      <ToastContainer />
    </div>
  );
};

export default DetailsPage;
