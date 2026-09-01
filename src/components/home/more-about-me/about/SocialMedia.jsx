import React from "react";

const SocialMedia = () => {
  return (
    <div className="w-full bg-white dark:bg-gray-900 py-12 sm:py-16 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
          {/* Right - Image */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <img
              src="/more-about-me/social_media.jpg"
              alt="Social media strategy cover"
              className="w-full max-w-xs md:max-w-sm h-auto rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300 object-cover"
            />
          </div>

          {/* Left - Text Details */}
          <div className="w-full lg:w-2/3 flex flex-col items-center lg:items-end text-center lg:text-right">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Strategic Social Media Management 📱📈
            </h2>
            <p className="mt-6 text-base leading-7 text-gray-650 dark:text-gray-300">
              I bring hands-on experience in <b>managing business profiles</b>, ensuring they stay <b>active, engaging, and aligned with current trends</b>. From <b>scheduling posts and stories to planning content calendars and shoot schedules</b>, I focus on creating a well-structured digital presence.
            </p>
            <p className="mt-4 text-base leading-7 text-gray-650 dark:text-gray-300">
              Beyond content planning, I have led content creation teams, effectively utilizing their skills to produce high-quality, trend-driven posts. I specialize in <b>influencer marketing campaigns</b>, curating influencers to drive optimal results. With 5+ campaigns successfully closed, <b>I ensure brands get maximum value from their marketing investments.</b>
            </p>
            <p className="mt-4 text-base leading-7 text-gray-650 dark:text-gray-300">
              To deliver the best results, <b>I work with a very limited number of clients (2-3 at a time)</b>, allowing me to dedicate ample time and effort to crafting a strong online presence that drives engagement and growth.
            </p>
            <div className="mt-8">
              <a
                href="https://linktr.ee/sreevarshan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-x-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 transition-colors"
              >
                See Profiles & Links
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
