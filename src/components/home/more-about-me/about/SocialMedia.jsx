import React from "react";

const SocialMedia = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-800">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 sm:py-4 lg:py-5">
          <div className="hero-content flex flex-col lg:flex-col items-center text-center lg:text-right">
            {/* Heading on Top (Aligned to the Right) */}
            <h1 className="text-4xl font-bold w-full text-center lg:text-right">
              Strategic Social Media Management for Business Growth 📱📈
            </h1>

            {/* Large Screen Layout: Image Right, Text Left */}
            <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start w-full mt-6">
              {/* Image (Between h1 and p on small screens, Right on Large Screens) */}
              <img
                src="/more-about-me/social_media.jpg"
                className="w-55 h-auto rounded-lg shadow-2xl my-6 lg:my-18 lg:ml-8"
              />

              {/* Paragraph and Button (Left on Large Screens) */}
              <div className="sm:py-10 flex flex-col items-center lg:items-end">
                <p className="py-6">
                  I bring hands-on experience in{" "}
                  <b>managing business profiles</b>, ensuring they stay{" "}
                  <b>active, engaging, and aligned with current trends</b>. From{" "}
                  <b>
                    scheduling posts and stories to planning content calendars
                    and shoot schedules
                  </b>
                  , I focus on creating a well-structured digital presence.{" "}
                  <br />
                  <br />
                  Beyond content planning, I have led content creation teams,
                  effectively utilizing their skills to produce high-quality,
                  trend-driven posts that keep audiences engaged. I specialize
                  in <b>influencer marketing campaigns</b>, carefully curating a
                  set of influencers based on their niche to drive the best
                  results. With a track record of successfully closing 5+
                  influencer campaigns at optimal pricing,{" "}
                  <b>
                    I ensure brands get maximum value from their marketing
                    investments.
                  </b>{" "}
                  <br />
                  <br />
                  To deliver the best results,{" "}
                  <b>
                    I work with a very limited number of clients (2-3 at a time)
                  </b>
                  , allowing me to dedicate more time and effort to crafting a
                  strong online presence that drives engagement and growth.
                </p>
                <a href="https://linktr.ee/sreevarshan">
                  <button className="btn btn-primary">See Profiles</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
