import React, { useState } from "react";

const MetroPage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleAboutUsClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-end bg-gray-200 text-white px-6">
        <ul className="flex space-x-6 mt-2 text-xl">
          <li className="hover:underline cursor-pointer">
            <a className="text-gray-900" href="/home">
              Home
            </a>
          </li>
          <li className="hover:underline cursor-pointer">
            <a className="text-gray-900" href="/services">
              Services
            </a>
          </li>

          {/* About Us Dropdown */}
          <li className="relative">
            <div
              onClick={handleAboutUsClick}
              className="flex items-center cursor-pointer space-x-2 text-gray-900 hover:underline"
            >
              <span> About Us</span>
              <span className="text-gray-900 mt-1 ">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer"
                >
                  <path
                    d="M10 15.1787L18 2.67871H2L10 15.1787Z"
                    fill="black"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>

            {/* Dropdown */}
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-1 bg-white text-gray-900 p-4 space-y-2 rounded-lg shadow-lg z-10">
                <li className="hover:text-blue-500 cursor-pointer">
                  <a className="text-gray-900" href="/project">
                    Project
                  </a>
                </li>
                <li className="hover:text-blue-500 cursor-pointer">
                  <a className="text-gray-900" href="/media">
                    Media
                  </a>
                </li>
                <li className="hover:text-blue-500 cursor-pointer">
                  <a className="text-gray-900" href="/contact-us">
                    Contact Us
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li className="hover:underline cursor-pointer">
            <a className="text-gray-900" href="/faqs">
              FAQs
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MetroPage;
