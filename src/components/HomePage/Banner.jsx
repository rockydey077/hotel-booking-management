import React from "react";

const Banner = () => {
  return (
    <div>
      <div className='carousel w-full'>
        {banners.map((banner) => (
          <div
            key={banner.id}
            id={`item${banner.id}`}
            className='carousel-item relative w-full'>
            <div
              style={{
                backgroundImage: `linear-gradient(45deg, rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(assets/banner/${banner.id}.jpg)`,
              }}
              className='w-full rounded-xl flex items-center bg-cover bg-center bg-no-repeat h-[600px]'>
              <div className='text-color9 space-y-3 md:space-y-5 lg:space-y-7 ml-5 md:ml-20 lg:ml-24 md:w-[60%] lg:w-[40%]'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold '>
                  {banner.title}
                </h1>
                <p className='text-lg font-normal '>{banner.text}</p>
                <div className='space-y-3 md:space-y-0 md:space-x-5 font-semibold text-lg '>
                  <button className='px-6 py-4 rounded-md bg-color1 border-2 border-color1'>
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div className='absolute bottom-5 right-10 gap-6 flex -translate-y-1/2 transform justify-between'>
              <a href={banner.prev} className='btn btn-circle'>
                ❮
              </a>
              <a href={banner.next} className='btn btn-circle'>
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const banners = [
  {
    id: 1,
    title: "Discover Your Perfect Stay",
    text: "Find the best hotels tailored to your needs and enjoy a seamless booking experience.",
    next: "#item2",
    prev: "#item4",
  },
  {
    id: 2,
    title: "Luxury and Comfort Await",
    text: "Experience top-notch amenities and exquisite service at our handpicked hotels.",
    next: "#item3",
    prev: "#item1",
  },
  {
    id: 3,
    title: "Book with Confidence",
    text: "Secure your stay with our trusted platform and enjoy exclusive deals and offers.",
    next: "#item4",
    prev: "#item2",
  },
  {
    id: 4,
    title: "Your Dream Vacation Starts Here",
    text: "Explore diverse destinations and book the ideal hotel for your perfect getaway.",
    next: "#item1",
    prev: "#item3",
  },
];

export default Banner;
