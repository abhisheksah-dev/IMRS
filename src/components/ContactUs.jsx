import React from "react";

const ContactUs = () => {
  return (
    <>
      <div
        className="font-sans flex items-center justify-start min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-800"
        style={{
          backgroundImage: `url("/public/images/contact.png")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="bg-blue-100 rounded-3xl shadow-lg p-5 w-full max-w-4xl bg-opacity-80 ml-5 font-sans relative  font-semibold text-2xl text-black"
          style={{ top: "-30px" }}
        >
          <div className="space-y-5 font-sans">
            <div className="flex items-start space-x-4">
              <span className="text-3xl">📧</span>
              <div>
                <p className="text-lg font-semibold text-black font-sans">
                  Email:
                </p>
                <p className="text-gray-700 text-lg">
                  indoremetrorailsaathi@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-3xl">📞</span>
              <div>
                <p className="text-lg font-semibold text-black">Contact No.:</p>
                <p className="text-gray-700 text-lg">+91 82505 05226</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-3xl">📱</span>
              <div>
                <p className="text-lg font-semibold text-black">
                  Social Media:
                </p>
                <p className="text-gray-700 text-lg">
                  https://www.instagram.com/indoremetrorailsaathi/
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-3xl text-black">🌐</span>
              <div>
                <p className="text-lg font-semibold text-black">Website:</p>
                <p className="text-gray-700 text-lg">www.imrs_indore.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Train Image */}
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

export default ContactUs;
