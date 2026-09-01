import React, { useRef } from "react";

const CrossfitCarousel = () => {
  const scrollContainerRef = useRef(null);

  const images = [
    "/carousel/crossfit/c1.jpg",
    "/carousel/crossfit/c2.JPEG",
    "/carousel/crossfit/c3.jpg",
    "/carousel/crossfit/c4.jpg",
    "/carousel/crossfit/c5.jpg",
    "/carousel/crossfit/c6.jpg",
    "/carousel/crossfit/c7.jpg"
  ];

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.6; // Scroll 60% of container width
      scrollContainerRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full bg-gray-50/50 dark:bg-gray-800/30 pb-16 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center">
          
          {/* Scroll Hint Badge */}
          <div className="inline-flex items-center gap-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-150/45 dark:border-indigo-900/30 mb-6">
            <svg className="w-3.5 h-3.5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            Swipe left/right or use arrows
          </div>

          {/* Carousel container with Controls */}
          <div className="relative w-full group">
            {/* Left Button */}
            <button
              onClick={() => handleScroll("left")}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 rounded-full bg-white/90 dark:bg-gray-900/90 text-gray-850 dark:text-white shadow-md border border-gray-150/50 dark:border-gray-850 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300 hover:scale-105 cursor-pointer"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Button */}
            <button
              onClick={() => handleScroll("right")}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 rounded-full bg-white/90 dark:bg-gray-900/90 text-gray-850 dark:text-white shadow-md border border-gray-150/50 dark:border-gray-850 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300 hover:scale-105 cursor-pointer"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Scroll port */}
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 px-2 scrollbar-none"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {images.map((src, index) => (
                <div
                  key={index}
                  className="shrink-0 w-full sm:w-[60%] md:w-[45%] lg:w-[31%] snap-center rounded-2xl overflow-hidden shadow-md bg-white dark:bg-gray-900 border border-gray-150 dark:border-gray-800/80 hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={src}
                    alt={`Crossfit training slide ${index + 1}`}
                    className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CrossfitCarousel;
