import React from "react";
import Banner from "./Banner";
import OurRooms from "./OurRooms";

const HomePage = () => {
  return (
    <div className='px-2 md:px-4 lg:px-0'>
      <Banner />
      <OurRooms />
    </div>
  );
};

export default HomePage;
