import React from "react";

const DroneCarousel = () => {
  return (
    <>
      <p className="pt-5 py-5 text-gray-600 dark:text-gray-200">swipe left - right</p>
      <div className="carousel rounded-box md:w-4xl lg:w-6xl mx-1 pb-10">
        <div className="carousel-item w-1/2">
          <img src="/carousel/drone/c1.JPEG" className="w-full" />
        </div>
        <div className="carousel-item w-1/2">
          <img src="/carousel/drone/c2.JPEG" className="w-full" />
        </div>
        <div className="carousel-item w-1/2">
          <img src="/carousel/drone/c3.JPEG" className="w-full" />
        </div>
        <div className="carousel-item w-1/2">
          <img src="/carousel/drone/c4.jpg" className="w-full" />
        </div>
        <div className="carousel-item w-1/2">
          <img src="/carousel/drone/c5.JPEG" className="w-full" />
        </div>
        <div className="carousel-item w-1/2">
          <img src="/carousel/drone/c6.JPEG" className="w-full" />
        </div>
        <div className="carousel-item w-1/2">
          <img src="/carousel/drone/c7.jpg" className="w-full" />
        </div>
      </div>
    </>
  );
};

export default DroneCarousel;
