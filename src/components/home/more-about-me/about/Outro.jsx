import React from "react";
import { useNavigate } from "react-router-dom";

const Outro = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white dark:bg-gray-900 transition-colors duration-300 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-lg leading-8 text-gray-650 dark:text-gray-300">
          By now, you’ve got a glimpse into what I do beyond coding. If you'd
          like to connect, collaborate, or just have a chat, feel free to
          check out the Contact section—I’d love to hear from you! 😊
        </p>
        <div className="mt-10">
          <button
            onClick={() => navigate("/contact")}
            className="rounded-xl bg-indigo-600 px-5 py-3 text-base font-semibold text-white shadow-xs hover:bg-indigo-500 transition-colors cursor-pointer"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Outro;
