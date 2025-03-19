import React from "react";

const Drone = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-800">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-2 sm:py-4 lg:py-5">
          <div className="hero-content flex flex-col lg:flex-col items-center text-center lg:text-left">
            {/* Heading on Top */}
            <h1 className="text-4xl font-bold w-full text-center lg:text-left">
              Capturing Buildings from the Skies with Drones 🏙️
            </h1>

            {/* Large Screen Layout: Image Left, Text Right */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start w-full mt-6">
              {/* Image (Between h1 and p on small screens, Left on Large Screens) */}
              <img
                src="/more-about-me/drone_cover_2.jpg"
                className="w-55 h-auto rounded-lg shadow-2xl my-6 lg:mr-8"
              />

              {/* Paragraph and Button (Right on Large Screens) */}
              <div className="sm:py-10 flex flex-col items-center lg:items-start">
                <p className="py-5">
                  With years of experience in aerial photography and
                  videography, I specialize in <b>capturing buildings, construction
                  sites, and large-scale infrastructure projects.</b> I have
                  collaborated with reputed <b>construction companies, builders,
                  and real estate firms</b> to create high-quality visuals for
                  <b>promotions, approvals, and progress tracking</b>. <br /><br />Beyond just
                  stunning imagery, my drone work plays a crucial role in
                  <b>documenting each stage of construction, from the foundation to
                  final completion</b>. Whether it's a <b>high-rise building, sports
                  arena, or industrial facility</b>, my goal is to provide detailed
                  and dynamic aerial perspectives that add value to every
                  project.
                </p>
                <a href="https://www.behance.net/sreevarshan1">
                  <button className="btn btn-primary">
                    Check out my works{" "}
                    <img
                      src="/tech_stack/logos/social/behance.svg"
                      alt="behance"
                      className="h-6 w-6 invert"
                    />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drone;
