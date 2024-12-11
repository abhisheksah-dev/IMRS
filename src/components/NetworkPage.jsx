import React from "react";

const NetworkPage = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-[70vh]  md:min-h-[80vh] bg-white font-sans">
        <div className="w-full max-w-4xl p-8 bg-white rounded-2xl shadow">
          <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
            NETWORK
          </h1>
          <div className="space-y-5">
            {/* Button 1 */}
            <button className="flex items-center justify-between w-full px-4 py-3 text-lg md:text-2xl font-semibold text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700">
              <span className="ml-4">RAILWAY STATION CONNECTIVITY</span>
              <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full">
                <span className="text-3xl text-blue-600">🚉</span>
              </div>
            </button>
            {/* Button 2 */}
            <button className="flex items-center justify-between w-full px-4 py-3 text-lg md:text-2xl font-semibold text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700">
              <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full">
                <span className="text-3xl text-blue-600">🚌</span>
              </div>
              <span className="mr-4">BUS STATION CONNECTIVITY</span>
            </button>
            {/* Button 3 */}
            <button className="flex items-center justify-between w-full px-4 py-3 text-lg md:text-2xl font-semibold text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700">
              <span className="ml-4">AIRPORT CONNECTIVITY</span>
              <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full">
                <span className="text-3xl text-blue-600">✈️</span>
              </div>
            </button>
            {/* Button 4 */}
            <button className="flex items-center justify-between w-full px-4 py-3 text-lg md:text-2xl font-semibold text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700">
              <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full">
                <span className="text-3xl text-blue-600">🚍</span>
              </div>
              <span className="mr-4">I-BUS ROUTE CONNECTIVITY</span>
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

export default NetworkPage;
