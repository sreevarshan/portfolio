import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Tech Stacks", id: "techstacks" },
  { name: "Work Experience", id: "workexperience" },
  { name: "More About Me", path: "/more-about-me" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Theme state logic
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      );
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Intersection Observer for scroll-spy active highlighting
  useEffect(() => {
    if (location.pathname !== "/home" && location.pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sections = ["techstacks", "workexperience"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -50% 0px", // triggers when section is in the middle of viewport
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, [location]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const handleNavClick = (item) => {
    if (item.path) {
      navigate(item.path);
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
    } else {
      if (location.pathname === "/home" || location.pathname === "/") {
        document
          .getElementById(item.id)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        navigate(`/home?section=${item.id}`);
        setTimeout(
          () =>
            document
              .getElementById(item.id)
              ?.scrollIntoView({ behavior: "smooth", block: "start" }),
          300
        );
      }
    }
    setMobileMenuOpen(false);
  };

  // Helper to check if a navigation item is active
  const isItemActive = (item) => {
    if (item.path) {
      return location.pathname === item.path;
    }
    return (location.pathname === "/home" || location.pathname === "/") && activeSection === item.id;
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 transition-all duration-300 bg-white/85 dark:bg-gray-900/85 backdrop-blur-md border-b border-gray-200/30 dark:border-gray-800/30 shadow-xs">
        <nav className="flex items-center justify-between p-3 lg:px-8 max-w-7xl mx-auto">
          {/* Left - Logo */}
          <div className="flex lg:flex-1">
            <button
              onClick={() => {
                if (location.pathname !== "/home" && location.pathname !== "/") {
                  navigate("/home");
                  setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="-m-1.5 p-1.5 transition-transform duration-200 hover:scale-105"
            >
              <img alt="Logo" src="/sv_svg.svg" className="h-10 w-auto" />
            </button>
          </div>

          {/* Mobile menu and Theme Toggle */}
          <div className="flex lg:hidden items-center gap-x-4">
            <button
              onClick={toggleTheme}
              className="rounded-lg p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5 text-amber-400" />
              ) : (
                <MoonIcon className="h-5 w-5 text-indigo-600" />
              )}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-10">
            {navigation.map((item) => {
              const active = isItemActive(item);
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={`text-sm font-semibold transition-all duration-200 relative py-1.5 px-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/60 ${
                    active
                      ? "text-indigo-600 dark:text-indigo-400 font-bold"
                      : "text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400"
                  }`}
                >
                  {item.name}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-indigo-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Desktop Theme Toggle & Contact Me Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-6">
            <button
              onClick={toggleTheme}
              className="rounded-lg p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <SunIcon className="h-5.5 w-5.5 text-amber-400 transition-transform duration-300 hover:rotate-45" />
              ) : (
                <MoonIcon className="h-5.5 w-5.5 text-indigo-600 transition-transform duration-300 hover:-rotate-12" />
              )}
            </button>
            <button
              onClick={() => navigate("/contact")}
              className={`text-sm font-semibold transition-all duration-200 py-1.5 px-3.5 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/60 ${
                location.pathname === "/contact"
                  ? "text-indigo-600 dark:text-indigo-400 font-bold"
                  : "text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400"
              }`}
            >
              Contact Me <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Drawer & Backdrop outside the header element */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity z-50"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-64 bg-white dark:bg-gray-900 p-6 shadow-xl border-l border-gray-100 dark:border-gray-800 transition-transform duration-300 transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center">
          <span className="text-md font-bold text-gray-800 dark:text-gray-200">Menu</span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <XMarkIcon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="mt-8 flex flex-col space-y-3">
          {navigation.map((item) => {
            const active = isItemActive(item);
            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`w-full text-left py-2 px-3 rounded-lg text-base font-semibold transition-colors ${
                  active
                    ? "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400"
                    : "text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-850"
                }`}
              >
                {item.name}
              </button>
            );
          })}
          <button
            onClick={() => {
              navigate("/contact");
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left py-2 px-3 rounded-lg text-base font-semibold transition-colors ${
              location.pathname === "/contact"
                ? "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400"
                : "text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-850"
            }`}
          >
            Contact Me
          </button>
        </div>
      </div>
    </>
  );
}

