import React from "react";
import { FaSearchLocation } from "react-icons/fa";

const NearestStation = () => {
  return (
    <>
      <div className="bg-white min-h-screen flex items-center justify-center p-6">
        <div className="shadow-lg rounded-lg p-8 max-w-3xl w-full">
          {/* Page Header */}
          <h2 className="bg-blue-900 text-center text-2xl font-bold text-white mb-8 uppercase h-12 rounded-xl">
            <p className="pt-2">Nearest Station</p>
          </h2>

          {/* Location Input */}
          <div className="bg-blue-100 p-6 rounded-lg mb-8">
            <div className="mb-4">
              <label
                className="block text-blue-900 font-semibold mb-2"
                htmlFor="from"
              >
                <div className="flex items-center space-x-2">
                  <FaSearchLocation className="text-blue-900" />
                  <span>Location</span>
                </div>
              </label>
              <select
                id="from"
                className="w-full px-4 py-3 rounded-lg border border-blue-300 focus:outline-none focus:ring focus:ring-blue-500"
              >
                <option>Enter your source station</option>
                <option>Vijayanagar</option>
              </select>
            </div>
            <div className="flex justify-center mt-4">
              <button className="bg-blue-600 text-xl text-white py-3 px-16 rounded-lg font-semibold hover:bg-blue-800 transition duration-300">
                Search
              </button>
            </div>
          </div>

          {/* Nearest Station Display */}
          <div
            className="bg-[#D3D5FF] 
rounded-lg shadow-lg p-8 text-center mt-10"
          >
            <div className="grid grid-cols-2 items-center gap-4">
              {/* Middle Column (Nearest Station Title) */}
              <div>
                <div className="text-sm font-bold text-purple-700">
                  NEAREST STATION
                </div>
                <div className="text-gray-700 text-xl font-semibold">
                  ----------
                </div>
              </div>

              {/* Left Column (KM) */}
              <div className="text-lg font-bold text-purple-700">
                KM
                <div className="text-gray-700 text-2xl font-semibold">-</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <img
          src="./public/images/trainoriginal.png"
          alt="Train Image"
          className="w-full h-auto object-cover"
        />
      </div>
    </>
  );
};

export default NearestStation;
