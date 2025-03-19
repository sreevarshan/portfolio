import React from "react";

const CrossFit = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-800">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-2 sm:py-4 lg:py-5">
          <div className="hero-content flex flex-col lg:flex-col items-center text-center lg:text-left">
            {/* Heading on Top */}
            <h1 className="text-5xl font-bold w-full text-center lg:text-left">
              CrossFit Athlete 💪🏻
            </h1>

            {/* Large Screen Layout: Image Left, Text Right */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start w-full mt-6">
              {/* Image (Between h1 and p on small screens, Left on Large Screens) */}
              <img
                src="/more-about-me/crossfit_cover.jpg"
                className="w-55 h-auto rounded-lg shadow-2xl my-6 lg:mr-8"
              />

              {/* Paragraph and Button (Right on Large Screens) */}
              <div className="sm:py-10 flex flex-col items-center lg:items-start">
                <p className="py-6">
                  Amidst my packed schedule, fitness is my{" "}
                  <b>non-negotiable commitment</b>. Every day, I hit the gym,
                  pushing my limits with strength training and heavy lifting. On
                  days I miss a workout, I feel like something is
                  incomplete—it's not just a routine but a part of who I am.{" "}
                  <br />
                  <br />
                  My fitness journey is not just about lifting weights; it's
                  about building resilience, discipline, and mental toughness.
                  Recently, I’ve been stepping into the world of calisthenics,
                  embracing bodyweight movements to develop greater control,
                  mobility, and functional strength.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CrossFit;
