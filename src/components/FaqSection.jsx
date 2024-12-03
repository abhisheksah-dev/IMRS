import React, { useState } from "react";

const FaqSection = () => {
  // State to track which FAQ is open
  const [activeFaq, setActiveFaq] = useState(null);

  // FAQ categories and their dummy content
  const faqs = [
    { title: "General Queries", content: "Details about general queries." },
    { title: "Train", content: "Details about trains and schedules." },
    { title: "Tickets & Fare", content: "Information on tickets and fare." },
    { title: "Station", content: "Station-related information." },
    { title: "Safety & Security", content: "Safety and security measures." },
    { title: "Luggage", content: "Luggage rules and policies." },
    { title: "Lost & Found", content: "Lost and found procedures." },
  ];

  // Toggle FAQ open/close
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="bg-purple-100 p-8 mx-auto w-11/12 md:w-9/12 rounded-xl shadow-lg">
      <div className="flex flex-col space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-lg">
            {/* FAQ Button */}
            <button
              className={`w-full text-left p-4 flex justify-between items-center ${
                activeFaq === index
                  ? "bg-blue-500 text-white"
                  : "bg-blue-700 text-white"
              } rounded-lg`}
              onClick={() => toggleFaq(index)}
            >
              <span>{faq.title}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transform ${
                  activeFaq === index ? "rotate-180" : "rotate-0"
                } transition-transform`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* FAQ Content */}
            {activeFaq === index && (
              <div className="p-4 bg-white text-gray-700">
                <p>{faq.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
