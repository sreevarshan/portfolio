import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

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
    const resumePath = "/assets/sree_varshan_resume_2025_test.pdf";
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
              Software Engineer 👨🏻‍💻 with {experience}+ years of experience in
              designing and developing scalable applications.
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
          <div className="flex justify-center">
            <img
              src="/sree_pfp_l.png"
              alt="Placeholder"
              className="w-full max-w-lg rounded-lg dark:shadow-gray-800"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
