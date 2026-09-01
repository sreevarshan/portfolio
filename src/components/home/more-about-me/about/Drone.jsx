import React from "react";

const Drone = () => {
  return (
    <div className="w-full bg-gray-50/50 dark:bg-gray-800/30 border-y border-gray-100 dark:border-gray-800/30 py-12 sm:py-16 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left - Image */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <img
              src="/more-about-me/drone_cover_2.jpg"
              alt="Drone photography cover"
              className="w-full max-w-xs md:max-w-sm h-auto rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300 object-cover"
            />
          </div>

          {/* Right - Text Details */}
          <div className="w-full lg:w-2/3 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Capturing Buildings from the Skies with Drones 🏙️
            </h2>
            <p className="mt-6 text-base leading-7 text-gray-650 dark:text-gray-300">
              With years of experience in aerial photography and videography, I specialize in <b>capturing buildings, construction sites, and large-scale infrastructure projects.</b> I have collaborated with reputed <b>construction companies, builders, and real estate firms</b> to create high-quality visuals for <b>promotions, approvals, and progress tracking</b>.
            </p>
            <p className="mt-4 text-base leading-7 text-gray-650 dark:text-gray-300">
              Beyond just stunning imagery, my drone work plays a crucial role in <b>documenting each stage of construction, from the foundation to final completion</b>. Whether it's a <b>high-rise building, sports arena, or industrial facility</b>, my goal is to provide detailed and dynamic aerial perspectives that add value to every project.
            </p>
            <div className="mt-8">
              <a
                href="https://www.behance.net/sreevarshan1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-x-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 transition-colors"
              >
                Check out my works
                <img
                  src="/tech_stack/logos/social/behance.svg"
                  alt="Behance logo"
                  className="h-5 w-5 invert"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drone;
