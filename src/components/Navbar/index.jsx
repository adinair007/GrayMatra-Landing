import { useState } from 'react';
import { GMLogo } from '../../assets';

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
          <a
            href="#home"
            className="hover:text-white hover:bg-saffron hover:scale-105 hover:shadow-md px-2 py-1 rounded transition-all duration-300"
          >
            Home
          </a>
          <a
            href="#services"
            className="hover:text-white hover:bg-saffron hover:scale-105 hover:shadow-md px-2 py-1 rounded transition-all duration-300"
          >
            Services
          </a>
          <a
            href="#about"
            className="hover:text-white hover:bg-saffron hover:scale-105 hover:shadow-md px-2 py-1 rounded transition-all duration-300"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-white hover:bg-saffron hover:scale-105 hover:shadow-md px-2 py-1 rounded transition-all duration-300"
          >
            Contact
          </a>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-saffron hover:text-white transition"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
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
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-500 py-4 px-6 flex flex-col space-y-4">
          <a
            href="#home"
            className="hover:text-white hover:bg-saffron hover:scale-105 hover:shadow-md px-2 py-1 rounded transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#services"
            className="hover:text-white hover:bg-saffron hover:scale-105 hover:shadow-md px-2 py-1 rounded transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#about"
            className="hover:text-white hover:bg-saffron hover:scale-105 hover:shadow-md px-2 py-1 rounded transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-white hover:bg-saffron hover:scale-105 hover:shadow-md px-2 py-1 rounded transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-saffron hover:text-white transition text-left"
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;