import React, { useEffect, useState, useRef } from "react";

function Home() {
  const images = [
    "./public/images/quote1.png",
    "./public/images/quote2.png",
    "./public/images/quote4.png",
    "./public/images/quote3.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef(null);

  // Function to handle next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Automatic sliding every 3 seconds
  useEffect(() => {
    slideInterval.current = setInterval(nextSlide, 3000); // Slide every 3 seconds
    return () => clearInterval(slideInterval.current); // Cleanup interval on unmount
  }, []);

  // Handle swipe functionality for mobile devices
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      nextSlide(); // Swipe left to go to the next slide
    }
    if (touchEndX - touchStartX > 50) {
      prevSlide(); // Swipe right to go to the previous slide
    }
  };

  return (
    <>
      <div>
        <img src="./public/images/head1home.png" alt="Header" />
      </div>

      <div
        className="flex flex-col flex-grow bg-cover bg-center py-10 h-[40vh] gap-3"
        style={{
          backgroundImage: "url('./public/images/black.png')",
        }}
      >
        <div className="flex items-center justify-center">
          <img src="./public/images/imrsimage.png" alt="IMRS Logo" />
        </div>
        <div className="flex items-center justify-center">
          <img src="./public/images/imrsbigimage.png" alt="IMRS Big Image" />
        </div>
      </div>

      <div
        className="relative w-full h-screen sm:h-[400px] md:h-[500px] lg:h-[80vh] overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out flex-row flex-nowrap h-[80vh]"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-screen sm:h-[400px] md:h-[500px] object-cover flex-shrink-0 lg:h-[80vh]"
            />
          ))}
        </div>

        {/* Previous and Next buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 sm:p-3 md:p-4 rounded-full"
        >
          ❮
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 sm:p-3 md:p-4 rounded-full"
        >
          ❯
        </button>

        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
      <div
        className="flex items-center justify-center bg-cover bg-center py-10 h-[10vh] gap-3"
        style={{
          backgroundImage: "url('./public/images/black.png')",
        }}
      >
        <p className="flex text-5xl font-bold text-white items-center justify-center">
          INSIDERS OF IMRS
        </p>
      </div>
      {/* insider od imrs ka nicha */}

      {/* first page 1 */}
      <div className="bg-[#C9EAF6]">
        <h1 className="text-4xl font-bold text-center ">
          Confused how to reach your destination easily?
        </h1>
        <div className="flex items-center justify-center">
          <div className="flex-1">
            <img src="./public/images/studious.png" alt="" />
          </div>
          <div className="flex-1  ">
            <div className="flex flex-col items-center gap-3">
              <h1 className="text-3xl font-bold">Here's the solution,</h1>
              <p className="text-center text-lg">
                Just enter your source and destination location and get time to
                reach, fare, duration of journey and number of stops to your
                destination in one click.
              </p>
              <button
                type="button"
                className="bg-[#03045E] text-white text-xl py-2 px-3 rounded-2xl flex items-center justify-center hover:bg-[#1A1F7E] hover:text-[#C9EAF6] hover:scale-105 transition-transform duration-100 ease-in-out"
              >
                Explore Now
                <span className="ml-2 text-3xl">&#8594;</span>{" "}
                {/* Increased arrow size and spacing */}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* first page 2 */}
      <div className="bg-[#D9AAFF]">
        <h1 className="text-4xl font-bold text-center ">
          Wanted to know your nearest metro stations ?{" "}
        </h1>
        <div className="flex items-center justify-center">
          <div className="flex-1  ">
            <div className="flex flex-col items-center gap-3">
              <h1 className="text-3xl font-bold"> Here’s the way to it,</h1>
              <p className="text-center text-lg">
                Just enter your location and get all the nearest stations
                available with their respective distances from your station in
                one click.
              </p>
              <button
                type="button"
                className="bg-[#03045E] text-white text-xl py-2 px-3 rounded-2xl flex items-center justify-center hover:bg-[#1A1F7E] hover:text-[#C9EAF6] hover:scale-105 transition-transform duration-100 ease-in-out"
              >
                Explore Now
                <span className="ml-2 text-3xl">&#8594;</span>{" "}
                {/* Increased arrow size and spacing */}
              </button>
            </div>
          </div>
          <div className="flex-1">
            <img src="./public/images/central.png" alt="" />
          </div>
        </div>
      </div>
      {/* first page 3 */}
      <div className="bg-[#C9EAF6]">
        <h1 className="text-4xl font-bold text-center ">
          Lost your valuables or found someone’s essentials ?
        </h1>
        <div className="flex items-center justify-center">
          <div className="flex-1">
            <img src="./public/images/pocket.png" alt="" />
          </div>
          <div className="flex-1  ">
            <div className="flex flex-col items-center gap-3">
              <h1 className="text-3xl font-bold"> Reach out to us,</h1>
              <p className="text-center text-lg">
                If you have lost your valuables or found someone’s essentials
                please feel free to contact us. We care for you and will try our
                best to reach it to you.
              </p>
              <button
                type="button"
                className="bg-[#03045E] text-white text-xl py-2 px-3 rounded-2xl flex items-center justify-center hover:bg-[#1A1F7E] hover:text-[#C9EAF6] hover:scale-105 transition-transform duration-100 ease-in-out"
              >
                Explore Now
                <span className="ml-2 text-3xl">&#8594;</span>{" "}
                {/* Increased arrow size and spacing */}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* first page 4 */}
      <div className="bg-[#C9EAF6]">
        <h1 className="text-4xl font-bold text-center ">
          Wanted to get the most interactive metro map ?
        </h1>
        <div className="flex items-center justify-center">
          <div className="flex-1  ">
            <div className="flex flex-col items-center gap-3">
              <h1 className="text-3xl font-bold"> Have a sneak-peek,</h1>
              <p className="text-center text-lg">
                Get the most interactive metro map with railway station, bus
                station, airport and i-bus connectivity to the metro lines and
                elevated/ underground stations
              </p>
              <button
                type="button"
                className="bg-[#03045E] text-white text-xl py-2 px-3 rounded-2xl flex items-center justify-center hover:bg-[#1A1F7E] hover:text-[#C9EAF6] hover:scale-105 transition-transform duration-100 ease-in-out"
              >
                Explore Now
                <span className="ml-2 text-3xl">&#8594;</span>{" "}
                {/* Increased arrow size and spacing */}
              </button>
            </div>
          </div>
          <div className="flex-1">
            <img src="./public/images/map.png" alt="" />
          </div>
        </div>
      </div>
      <div
        className="flex items-center justify-center bg-cover bg-center py-10 h-[10vh] gap-3"
        style={{
          backgroundImage: "url('./public/images/black.png')",
        }}
      >
        <p className="text-4xl font-bold text-white text-center">
          INDORE METRO RAIL STATIONS
        </p>
      </div>
    </>
  );
}

export default Home;
