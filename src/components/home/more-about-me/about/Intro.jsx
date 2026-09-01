import React from "react";

const Intro = () => {
  return (
    <div className="w-full bg-white dark:bg-gray-900 transition-colors duration-300 pt-28 pb-12 sm:pt-32 sm:pb-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          You’ve earned my ❤️ for making it here!
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-650 dark:text-gray-300 max-w-2xl mx-auto">
          Thanks for your interest in knowing more about what I do beyond
          coding. I’m a multi-passionate creator who loves to explore,
          experiment, and learn from every experience. Some of my hobbies have
          even turned into monetized ventures, and I’m excited to expand
          further.
        </p>
        <div className="mt-8 flex justify-center">
          <span className="inline-flex items-center gap-x-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 animate-bounce">
            Scroll down to discover my passions beyond coding
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Intro;
