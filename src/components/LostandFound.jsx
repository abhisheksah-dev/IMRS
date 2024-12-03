import React from "react";

const LostAndFound = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="w-full max-w-3xl p-10 bg-white rounded-lg shadow">
          <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
            LOST & FOUND
          </h1>
          <p className="text-center text-lg text-gray-700 mb-10">
            Lost items? Don’t worry!!! We have a way for it ...
          </p>
          <div className="space-y-6">
            <button className="w-full py-4 text-lg font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700">
              <span className="mr-2">📢</span> REGISTER LOST ITEM
            </button>
            <button className="w-full py-4 text-lg font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700">
              <span className="mr-2">📢</span> REGISTER FOUND ITEM
            </button>
          </div>
          <div className="flex justify-between mt-8">
            <select className="flex-grow px-6 py-3 text-lg border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600">
              <option value="lost-items">Lost Items</option>
              <option value="found-items">Found Items</option>
            </select>
            <button className="ml-6 px-8 py-3 text-lg font-medium bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
              CLAIM
            </button>
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

export default LostAndFound;
