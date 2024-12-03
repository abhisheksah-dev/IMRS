import { TfiAlarmClock } from "react-icons/tfi";
import { FaRoute, FaLocationDot } from "react-icons/fa6";

function Journey() {
  return (
    <>
      <div className="bg-white min-h-screen flex items-center justify-center p-6">
        <div className="shadow rounded-lg p-8 w-full max-w-6xl">
          <h2 className="bg-blue-900 text-center text-2xl font-bold text-white mb-8 uppercase h-12 rounded-xl">
            <p className="pt-2">Journey Details</p>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left: Form Section */}
            <div className="bg-blue-100 p-6 rounded-lg">
              <div className="mb-4">
                <label
                  className="block text-blue-900 font-semibold mb-2"
                  htmlFor="from"
                >
                  From
                </label>
                <select
                  id="from"
                  className="w-full px-4 py-3 rounded-lg border border-blue-300 focus:outline-none focus:ring focus:ring-blue-500"
                >
                  <option>Enter your source station</option>
                  <option>Vijayanagar</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  className="block text-blue-900 font-semibold mb-2"
                  htmlFor="to"
                >
                  To
                </label>
                <select
                  id="to"
                  className="w-full px-4 py-3 rounded-lg border border-blue-300 focus:outline-none focus:ring focus:ring-blue-500"
                >
                  <option>Enter your destination station</option>
                </select>
              </div>

              <div className="flex justify-center mt-4">
                <button className="bg-blue-600 text-xl text-white py-3 px-16 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                  Get Details
                </button>
              </div>
            </div>

            {/* Right: Details Section */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              <div className="bg-[#F1FDFF] p-6 shadow-lg rounded-lg flex flex-col items-center border-2 border-blue-600">
                <i className="text-4xl text-blue-600 mb-4">
                  <TfiAlarmClock />
                </i>
                <p className="text-gray-600 font-semibold text-lg">Duration</p>
                <p className="text-blue-900 font-bold text-2xl">---</p>
              </div>

              <div className="bg-[#F1FDFF] p-6 shadow-lg rounded-lg flex flex-col items-center border-2 border-blue-600">
                <i className="text-4xl text-blue-600 mb-4">💳</i>
                <p className="text-gray-600 font-semibold text-lg">Fare</p>
                <p className="text-blue-900 font-bold text-2xl">---</p>
              </div>

              <div className="bg-[#F1FDFF] p-6 shadow-lg rounded-lg flex flex-col items-center border-2 border-blue-600">
                <i className="text-4xl text-blue-600 mb-4">
                  <FaRoute />
                </i>
                <p className="text-gray-600 font-semibold text-lg">Distance</p>
                <p className="text-blue-900 font-bold text-2xl">---</p>
              </div>

              <div className="bg-[#F1FDFF] p-6 shadow-lg rounded-lg flex flex-col items-center border-2 border-blue-600">
                <i className="text-4xl text-blue-600 mb-4">
                  <FaLocationDot />
                </i>
                <p className="text-gray-600 font-semibold text-lg">Stops</p>
                <p className="text-blue-900 font-bold text-2xl">---</p>
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
}

export default Journey;
