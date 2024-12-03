import React from "react";
import { useNavigate } from "react-router-dom";

function AboutUs() {
  const navigate = useNavigate();

  return (
    <>
      {/* Section with Background Image */}
      <section className="h-screen bg-cover bg-fixed bg-center bg-[url('./public/images/books1.png')]">
        <div className="container mx-auto py-5 h-full">
          <div className="flex justify-center items-center h-full">
            <div className="w-full max-w-4xl">
              <div className="rounded-3xl shadow-md text-black">
                <div className="flex flex-wrap">
                  {/* Our Project Section */}
                  <section className="py-2 md:py-10 bg-[#ffffff] bg-opacity-50 rounded-3xl">
                    <div className="text-center mb-2 md:mb-8">
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white bg-purple-800 bg-opacity-80 py-3 px-6 md:px-10 inline-block rounded-2xl shadow-md">
                        OUR PROJECT
                      </h2>
                    </div>
                    <div className="mx-auto max-w-full sm:max-w-3xl md:max-w-4xl px-5 sm:px-8 py-5 sm:py-8 rounded-xl shadow-lg text-justify bg-transparent bg-opacity-50">
                      <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Illo tempora cumque quos iste aspernatur?
                        Dignissimos natus nam facere dolorem magni aliquid,
                        fugit deleniti harum odit cupiditate quasi esse
                        assumenda odio unde quos eos, voluptatem similique in
                        nihil quaerat! Aliquam numquam consectetur saepe ipsam
                        cumque cupiditate quo et, fugit dolor adipisci rerum
                        unde deleniti totam quibusdam iure porro eius. Facilis
                        quos repellat animi nisi odit laborum! Perferendis
                        molestias, nobis aut neque cumque porro perspiciatis
                        debitis ex numquam aspernatur.
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Another Section with a Different Background */}
      <div className="h-3"></div>
      <section className="bg-cover bg-fixed bg-center bg-[url('./public/images/books2.jpg')] relative">
        <div className="container mx-auto py-5">
          <div className="flex justify-center items-center">
            <div className="w-full max-w-4xl">
              <div className="rounded-3xl shadow-md text-black">
                <div className="flex flex-wrap">
                  {/* Upcoming Section */}
                  <section className="bg-blue-100 bg-opacity-50 py-10 rounded-2xl">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl md:text-3xl font-bold text-white bg-purple-800 py-3 px-6 md:px-10 inline-block rounded-lg shadow-md bg-opacity-70">
                        UPCOMINGS
                      </h2>
                    </div>

                    {/* Enhanced Responsive Grid */}

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                      {[
                        // Map through cards with updated layout and sizes
                        {
                          img: "./public/images/mobileapplication.png",
                          alt: "Mobile Application",
                          title: "Mobile Application",
                        },
                        {
                          img: "./public/images/audio.png",
                          alt: "Audio Indication",
                          title: "Audio Indication",
                        },
                        {
                          img: "./public/images/onlineticket.png",
                          alt: "Online Ticket Booking",
                          title: "Online Ticket Booking",
                        },
                        {
                          img: "./public/images/stationinformation.png",
                          alt: "Station Information",
                          title: "Station Information",
                        },
                        {
                          img: "./public/images/smartcard.png",
                          alt: "Station Information",
                          title: "Station Information",
                        },
                        {
                          img: "./public/images/lastmile.png",
                          alt: "Station Information",
                          title: "Station Information",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="bg-[#D3D5FF] bg-opacity-80 rounded-xl shadow-xl p-10 flex flex-col items-center hover:scale-110 transition-transform duration-300 ease-in-out"
                        >
                          <img
                            src={item.img}
                            alt={item.alt}
                            className="w-32 h-32 lg:w-40 lg:h-40"
                          />
                          <h3 className="mt-6 text-xl lg:text-2xl font-bold text-blue-700 text-center">
                            {item.title}
                          </h3>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Train Images Positioned Between "Upcoming" and Footer */}

        <div className="w-full">
          <img
            src="./public/images/trainoriginal.png"
            alt="Train Image"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>
    </>
  );
}

export default AboutUs;
