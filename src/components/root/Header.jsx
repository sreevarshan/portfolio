import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Tech Stacks", id: "techstacks" },
  { name: "Work Experience", id: "workexperience" },
  { name: "More About Me", path: "/more-about-me" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (item) => {
    if (item.path) {
      navigate(item.path);
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
    } else {
      if (location.pathname === "/home") {
        // Scroll if already on /home
        document
          .getElementById(item.id)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // Navigate to /home and scroll after render
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

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white dark:bg-gray-800">
      <nav className="flex items-center justify-between p-2 lg:px-8">
        {/* Left - Logo */}
        <div className="flex lg:flex-1">
          <button onClick={() => {
            if (location.pathname !== "/home") {
              navigate("/home");
              setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }} className="-m-1.5 p-1.5">
            <img alt="Logo" src="/sv_svg.svg" className="h-12 w-auto" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
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
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item)}
              className="text-sm font-semibold text-gray-900 dark:text-gray-300 hover:text-gray-400 dark:hover:text-white"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Contact Me Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            onClick={() => navigate("/contact")}
            className="text-sm font-semibold text-gray-900 dark:text-gray-300 hover:text-gray-300 dark:hover:text-white"
          >
            Contact Me <span aria-hidden="true">&rarr;</span>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-md transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
        <div
          className={`fixed inset-y-0 right-0 z-50 w-64 bg-white dark:bg-gray-800 p-6 shadow-lg transition-transform duration-300 transform ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
            >
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 space-y-4">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className="block text-lg font-semibold text-gray-900 dark:text-gray-300"
              >
                {item.name}
              </button>
            ))}
            {/* Mobile Contact Me Button */}
            <button
              onClick={() => navigate("/contact")}
              className="block text-lg font-semibold text-gray-900 dark:text-gray-300"
            >
              Contact Me
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
