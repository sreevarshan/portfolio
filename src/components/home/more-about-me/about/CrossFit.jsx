import React from "react";

const CrossFit = () => {
  return (
    <div className="w-full bg-gray-50/50 dark:bg-gray-800/30 border-y border-gray-100 dark:border-gray-800/30 py-12 sm:py-16 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left - Image */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <img
              src="/more-about-me/crossfit_cover.jpg"
              alt="CrossFit Athlete cover"
              className="w-full max-w-xs md:max-w-sm h-auto rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300 object-cover"
            />
          </div>

          {/* Right - Text Details */}
          <div className="w-full lg:w-2/3 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              CrossFit Athlete 💪🏻
            </h2>
            <p className="mt-6 text-base leading-7 text-gray-650 dark:text-gray-300">
              Amidst my packed schedule, fitness is my <b>non-negotiable commitment</b>. Every day, I hit the gym, pushing my limits with strength training and heavy lifting. On days I miss a workout, I feel like something is incomplete—it's not just a routine but a core part of who I am.
            </p>
            <p className="mt-4 text-base leading-7 text-gray-650 dark:text-gray-300">
              My fitness journey is not just about lifting weights; it's about building resilience, discipline, and mental toughness. Recently, I’ve been stepping into the world of calisthenics, embracing bodyweight movements to develop greater control, mobility, and functional strength.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrossFit;
