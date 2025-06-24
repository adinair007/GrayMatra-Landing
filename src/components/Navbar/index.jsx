import { useState } from "react";
import { Link } from "react-scroll";
import { GMLogo } from "../../assets";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-4 px-6 fixed w-full top-0 z-20 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src={GMLogo}
            alt="Gray Mātrā Logo"
            className="w-32 h-12 sm:w-40 sm:h-16 object-contain"
          />
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            className="hover:text-white hover:bg-saffron hover:scale-105 hover:shadow-md px-2 py-1 rounded transition-all duration-300 cursor-pointer"
            activeClass="text-saffron scale-105"
          >
            Home
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            className="hover:text-white hover:bg-saffron hover:scale-105 hover:shadow-md px-2 py-1 rounded transition-all duration-300 cursor-pointer"
            activeClass="text-saffron scale-105"
          >
            Services
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            className="hover:text-white hover:bg-saffron hover:scale-105 hover:shadow-md px-2 py-1 rounded transition-all duration-300 cursor-pointer"
            activeClass="text-saffron scale-105"
          >
            About
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            className="hover:text-white hover:bg-saffron hover:scale-105 hover:shadow-md px-2 py-1 rounded transition-all duration-300 cursor-pointer"
            activeClass="text-saffron scale-105"
          >
            Contact
          </Link>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-saffron hover:text-white transition"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <svg
                className="w-6 h-6 text-saffron"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-saffron dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
            aria-label="Toggle Mobile Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 py-4 px-6 flex flex-col space-y-4">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            className="shadow-sm hover:text-white hover:bg-saffron hover:scale-105 hover:shadow-md px-2 py-1 rounded transition-all duration-300 cursor-pointer"
            activeClass="text-saffron scale-105"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            className="shadow-sm hover:text-white hover:bg-saffron hover:scale-105 hover:shadow-md px-2 py-1 rounded transition-all duration-300 cursor-pointer"
            activeClass="text-saffron scale-105"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            className="shadow-sm hover:text-white hover:bg-saffron hover:scale-105 hover:shadow-md px-2 py-1 rounded transition-all duration-300 cursor-pointer"
            activeClass="text-saffron scale-105"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            className="shadow-sm hover:text-white hover:bg-saffron hover:scale-105 hover:shadow-md px-2 py-1 rounded transition-all duration-300 cursor-pointer"
            activeClass="text-saffron scale-105"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="flex items-center space-x-3">
            <svg
              className={`w-5 h-5 ${
                isDarkMode ? "text-gray-500" : "text-saffron"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <label
              className="relative inline-flex items-center cursor-pointer"
              aria-label="Toggle Dark Mode"
            >
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={toggleDarkMode}
                className="sr-only"
              />
              <div
                className={`w-10 h-6 rounded-full shadow-inner transition-colors duration-200 ${
                  isDarkMode ? "bg-green-600" : "bg-gray-300"
                }`}
              >
                <div
                  className={`absolute w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-200 ease-in-out ${
                    isDarkMode ? "translate-x-4" : "translate-x-0"
                  }`}
                ></div>
              </div>
            </label>
            <svg
              className={`w-5 h-5 ${
                isDarkMode ? "text-saffron" : "text-gray-500"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
