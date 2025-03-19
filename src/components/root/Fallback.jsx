import { useNavigate } from "react-router-dom";

export default function Fallback() {
  const navigate = useNavigate();
  return (
    <>
      <main className="grid min-h-screen place-items-center bg-white dark:bg-gray-800 px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-500 dark:text-indigo-400">
            404
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 dark:text-white sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-500 dark:text-gray-400 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={() => navigate("/home")}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </button>
            <button
              // onClick={() => navigate("/contact")}
              className="text-sm font-semibold text-gray-900 dark:text-white"
            >
              Contact support <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
