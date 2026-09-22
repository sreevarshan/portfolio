import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const [tilt, setTilt] = useState({ x: 0, y: 0, active: false });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = -(y / (rect.height / 2)) * 12;
    const rotateY = (x / (rect.width / 2)) * 12;
    setTilt({ x: rotateX, y: rotateY, active: true });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, active: false });
  };

  const startDate = new Date("2021-05-28");
  const currentDate = new Date();

  let years = currentDate.getFullYear() - startDate.getFullYear();
  let months = currentDate.getMonth() - startDate.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const experience = `${years}.${months}`;

  const downloadResume = () => {
    const resumePath = "/assets/sree_varshan_resume_2025.pdf";
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "SreeVarshan_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white dark:bg-gray-800 pt-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-18 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Hi 👋 , <br />
              I'm{" "}
              <span className="text-indigo-500 dark:text-indigo-400">
                Sree Varshan
              </span>
            </h1>
            <br />
            <h4 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
              Software Engineer 👨🏻‍💻 with {experience} years of experience in
              designing and developing scalable applications
            </h4>
            <p className="mt-6 text-lg font-medium text-gray-600 dark:text-gray-400 sm:text-xl">
              I have experience across multiple domains, enabling me to adapt to
              diverse business needs and build robust, secure, and scalable
              applications. Explore other sections of the website to learn more
              about my work experience and get to know me better. Let’s build
              something great together 🚀
            </p>
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-x-6">
              <button
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm 
                           hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 
                           focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={downloadResume}
              >
                Download my Resume ↓
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="text-sm font-semibold text-gray-900 dark:text-gray-300 hover:text-gray-300 dark:hover:text-white"
              >
                Contact me <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center mt-12 lg:mt-0">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: tilt.active
                  ? `perspective(1000px) rotateX(${tilt.x.toFixed(2)}deg) rotateY(${tilt.y.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`
                  : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
                transition: tilt.active
                  ? "transform 0.1s ease-out"
                  : "transform 0.5s ease-out",
              }}
              className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg select-none flex items-center justify-center group"
            >
              {/* Ambient Glow Aura */}
              <div
                aria-hidden="true"
                className="absolute -inset-2 sm:-inset-6 rounded-full bg-gradient-to-tr from-indigo-500/30 via-purple-500/25 to-blue-500/20 dark:from-indigo-600/35 dark:via-purple-600/30 dark:to-cyan-400/20 blur-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow pointer-events-none"
              />

              {/* Option 2: Floating Mini Code Terminal / IDE Frame */}
              <div
                aria-hidden="true"
                style={{
                  transform: tilt.active
                    ? `translate3d(${tilt.y * 1.5}px, ${-tilt.x * 1.5}px, -20px) rotate(-3deg)`
                    : "rotate(-3deg)",
                  transition: tilt.active
                    ? "transform 0.1s ease-out"
                    : "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                className="absolute -top-6 -left-2 sm:-top-4 sm:-left-10 w-[215px] sm:w-[310px] scale-90 sm:scale-100 origin-top-left rounded-2xl bg-gray-900/85 dark:bg-gray-950/85 backdrop-blur-xl border border-indigo-500/20 dark:border-indigo-400/20 shadow-2xl shadow-indigo-900/20 p-3 sm:p-4 font-mono select-none pointer-events-none z-0 group-hover:rotate-0 transition-transform duration-500"
              >
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-2 sm:pb-3 mb-2 sm:mb-3 border-b border-gray-700/50">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-rose-500/90" />
                    <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-amber-500/90" />
                    <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-emerald-500/90" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-gray-400 font-medium">sree.config.ts</span>
                  <div className="w-6 sm:w-8" />
                </div>

                {/* Code Body */}
                <div className="space-y-0.5 sm:space-y-1 text-[9.5px] sm:text-[11px] leading-relaxed">
                  <div className="text-gray-400">
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-400">engineer</span> = &#123;
                  </div>
                  <div className="pl-2 sm:pl-3 text-gray-300">
                    <span className="text-indigo-300">name</span>:{" "}
                    <span className="text-emerald-300">"Sree Varshan"</span>,
                  </div>
                  <div className="pl-2 sm:pl-3 text-gray-300">
                    <span className="text-indigo-300">role</span>:{" "}
                    <span className="text-emerald-300">"Software Engineer"</span>,
                  </div>
                  <div className="pl-2 sm:pl-3 text-gray-300">
                    <span className="text-indigo-300">stack</span>: [
                    <span className="text-amber-300">"Java"</span>,{" "}
                    <span className="text-amber-300">"React"</span>,{" "}
                    <span className="text-amber-300">"Kafka"</span>],
                  </div>
                  <div className="pl-2 sm:pl-3 text-gray-300">
                    <span className="text-indigo-300">scalable</span>:{" "}
                    <span className="text-rose-400">true</span>
                  </div>
                  <div className="text-gray-400">&#125;;</div>
                </div>
              </div>

              {/* Floating Badge 1 - Top Right: Role & Status */}
              <div
                style={{
                  transform: tilt.active
                    ? `translate3d(${-tilt.y * 1.2}px, ${tilt.x * 1.2}px, 20px)`
                    : "translate3d(0, 0, 0)",
                  transition: tilt.active
                    ? "transform 0.1s ease-out"
                    : "transform 0.5s ease-out",
                }}
                className="absolute -top-6 right-0 sm:-top-2 sm:right-2 z-20 flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-4 sm:py-2 scale-90 sm:scale-100 origin-top-right rounded-xl sm:rounded-2xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-gray-200/80 dark:border-gray-700/80 shadow-lg shadow-indigo-500/5 dark:shadow-black/40 animate-float-slow cursor-default"
              >
                <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-emerald-500" />
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-gray-800 dark:text-gray-200 tracking-wide">
                  Software Engineer
                </span>
              </div>

              {/* Floating Badge 2 - Bottom Left: Experience */}
              <div
                style={{
                  transform: tilt.active
                    ? `translate3d(${-tilt.y * 1.2}px, ${tilt.x * 1.2}px, 20px)`
                    : "translate3d(0, 0, 0)",
                  transition: tilt.active
                    ? "transform 0.1s ease-out"
                    : "transform 0.5s ease-out",
                }}
                className="absolute bottom-2 left-0 sm:bottom-6 sm:left-2 z-20 flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-4 sm:py-2 scale-90 sm:scale-100 origin-bottom-left rounded-xl sm:rounded-2xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-gray-200/80 dark:border-gray-700/80 shadow-lg shadow-indigo-500/5 dark:shadow-black/40 animate-float-reverse cursor-default"
              >
                <span className="text-xs sm:text-sm">🚀</span>
                <span className="text-[11px] sm:text-xs font-semibold text-gray-800 dark:text-gray-200 tracking-wide">
                  {experience}+ Yrs Experience
                </span>
              </div>

              {/* Hero Portrait with soft bottom edge blend */}
              <div className="relative z-10 w-full flex justify-center [mask-image:linear-gradient(to_bottom,black_86%,transparent_100%)]">
                <img
                  src="/sree_pfp_new.png"
                  alt="Sree Varshan - Software Engineer"
                  width={1190}
                  height={1322}
                  fetchPriority="high"
                  loading="eager"
                  className="w-full h-auto max-h-[420px] sm:max-h-[500px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_25px_40px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-[1.01]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
