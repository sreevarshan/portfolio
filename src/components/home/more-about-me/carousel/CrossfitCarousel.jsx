import React from "react";

const CrossfitCarousel = () => {
  return (
    <>
      <p className="pt-5 py-5 text-gray-600 dark:text-gray-200">swipe left - right</p>
      <div className="carousel rounded-box md:w-4xl lg:w-6xl mx-1 pb-10">
        <div className="carousel-item w-1/2">
          <img src="/carousel/crossfit/c1.jpg" className="w-full" />
        </div>
        <div className="carousel-item w-1/2">
          <img src="/carousel/crossfit/c2.JPEG" className="w-full" />
        </div>
        <div className="carousel-item w-1/2">
          <img src="/carousel/crossfit/c3.jpg" className="w-full" />
        </div>
        <div className="carousel-item w-1/2">
          <img src="/carousel/crossfit/c4.jpg" className="w-full" />
        </div>
        <div className="carousel-item w-1/2">
          <img src="/carousel/crossfit/c5.jpg" className="w-full" />
        </div>
        <div className="carousel-item w-1/2">
          <img src="/carousel/crossfit/c6.jpg" className="w-full" />
        </div>
        <div className="carousel-item w-1/2">
          <img src="/carousel/crossfit/c7.jpg" className="w-full" />
        </div>
      </div>
    </>
  );
};

export default CrossfitCarousel;
