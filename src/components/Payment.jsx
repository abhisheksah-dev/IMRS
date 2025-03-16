import React from "react";
import { useState } from "react";
class StationNode {
  constructor(name, distancePrev, distanceNext) {
    this.name = name;
    this.distancePrev = distancePrev;
    this.distanceNext = distanceNext;
    this.prev = null;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(name, distancePrev, distanceNext) {
    const newNode = new StationNode(name, distancePrev, distanceNext);
    this.head = newNode;
    this.tail = newNode;
  }

  insertEnd(name, distancePrev, distanceNext) {
    if (this.head === null) {
      this.insertFirst(name, distancePrev, distanceNext);
    } else {
      const newNode = new StationNode(name, distancePrev, distanceNext);
      this.tail.next = newNode;
      newNode.prev = this.tail;
      newNode.next = this.head;
      this.head.prev = newNode;
      this.tail = newNode;
    }
  }

  countStations(startStation, endStation) {
    let current = this.head;
    let startFound = null;
    let endFound = null;

    while (current.name != startStation) {
      current = current.next;
    }
    startFound = current;
    current = this.head;
    while (current.name != endStation) {
      current = current.next;
    }
    endFound = current;

    let forward = startFound;
    let backward = startFound;
    let fcount = 0;
    let bcount = 0;
    while (forward != endFound) {
      fcount++;
      forward = forward.next;
    }
    while (backward != endFound) {
      bcount++;
      backward = backward.prev;
    }
    // fcount--;
    // bcount--;
    if (fcount > bcount) {
      return bcount;
    } else {
      return fcount;
    }
  }

  calculateFare(stops) {
    if (stops <= 1) {
      return 10;
    } else if (stops <= 3) {
      return 20;
    } else if (stops <= 5) {
      return 30;
    } else if (stops <= 7) {
      return 40;
    } else if (stops <= 9) {
      return 50;
    } else if (stops <= 11) {
      return 60;
    } else if (stops <= 13) {
      return 70;
    } else {
      return 80;
    }
  }

  calculateDistance(startStation, endStation) {
    let current = this.head;
    let totalDistance = 0;
    let startFound = null;
    let endFound = null;
    while (current.name != startStation) {
      current = current.next;
    }
    startFound = current;
    current = this.head;
    while (current.name != endStation) {
      current = current.next;
    }
    endFound = current;

    let forward = startFound;
    let backward = startFound;
    let fcount = 0;
    let bcount = 0;
    while (forward != endFound) {
      fcount++;
      forward = forward.next;
    }
    while (backward != endFound) {
      bcount++;
      backward = backward.prev;
    }
    if (fcount < bcount) {
      forward = startFound;
      while (forward != endFound) {
        totalDistance = totalDistance + forward.distanceNext;
        forward = forward.next;
      }
    } else {
      backward = startFound;
      while (backward != endFound) {
        totalDistance = totalDistance + backward.distancePrev;
        backward = backward.prev;
      }
    }

    return totalDistance;
  }

  calculateTime(startStation, endStation) {
    const distance = this.calculateDistance(startStation, endStation);
    const stops = this.countStations(startStation, endStation);

    const stoppageTime = 20;
    const distanceInKm = distance / 1000;

    const NoncrowdedStations = [
      "BSF/ Kalani Nagar",

      "Airport",
      "Gandhi Nagar/Nanod",
      "Super Corridor 6",
      "Super Corridor 5",
      "Super Corridor 4",
      "Super Corridor 3",
      "Super Corridor 2",
      "Super Corridor 1",
      "Bhawarshala Square",
      "MR 10 Road",
      "ISBT/ MR 10 Flyover",
      "Chandragupta Square",
      "Hira Nagar",
    ];

    let speed =
      NoncrowdedStations.includes(startStation) ||
      NoncrowdedStations.includes(endStation)
        ? 100
        : 40;
    const speedInMps = speed * (1000 / 3600);

    const travelTime = distance / speedInMps + stops * stoppageTime;

    return (travelTime / 60).toFixed(0);
  }
}

const metroRoute = new CircularLinkedList();
metroRoute.insertFirst("Super Corridor 1", 1000, 1500);
metroRoute.insertEnd("Super Corridor 2", 1500, 1000);
metroRoute.insertEnd("Super Corridor 3", 1000, 1250);
metroRoute.insertEnd("Super Corridor 4", 1250, 1250);
metroRoute.insertEnd("Super Corridor 5", 1250, 990);
metroRoute.insertEnd("Super Corridor 6", 990, 650);
metroRoute.insertEnd("Gandhi Nagar/Nanod", 650, 1400);
metroRoute.insertEnd("Airport", 1400, 1620);
metroRoute.insertEnd("BSF/ Kalani Nagar", 1620, 1140);
metroRoute.insertEnd("Ramchandra Nagar Square", 1140, 875);
metroRoute.insertEnd("Bada Ganpati", 875, 600);
metroRoute.insertEnd("Chota Ganpati", 600, 900);
metroRoute.insertEnd("Rajwada Palace", 900, 1170);
metroRoute.insertEnd("Indore Railway Station", 1170, 650);
metroRoute.insertEnd("High Court", 650, 1200);
metroRoute.insertEnd("Palasia Square", 1200, 900);
metroRoute.insertEnd("Patrakar Colony", 900, 1200);
metroRoute.insertEnd("Bengali Square", 1200, 1400);
metroRoute.insertEnd("Khajrana Square", 1400, 1000);
metroRoute.insertEnd("Mumtaj Bag Colony", 1000, 800);
metroRoute.insertEnd("Radisson Square", 800, 1150);
metroRoute.insertEnd("Vijay Nagar Square", 1150, 620);
metroRoute.insertEnd("Meghdoot Garden", 620, 860);
metroRoute.insertEnd("Bapat Square", 860, 780);
metroRoute.insertEnd("Hira Nagar", 780, 850);
metroRoute.insertEnd("Chandragupta Square", 850, 780);
metroRoute.insertEnd("ISBT/ MR 10 Flyover", 780, 1760);
metroRoute.insertEnd("MR 10 Road", 1760, 1250);
metroRoute.insertEnd("Bhawarshala Square", 1250, 1000);

const Payment = () => {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");


    const handleCalculate = () => {
      if (from && to && from !== to) {
        const stopsCount = metroRoute.countStations(from, to);
        const calculatedFare = metroRoute.calculateFare(stopsCount);
        const calculatedDistance = metroRoute.calculateDistance(from, to);
        const calculatedTime = metroRoute.calculateTime(from, to);
  
        if (calculatedDistance > 1000) {
          setDistance(`${calculatedDistance / 1000} km`);
        } else {
          setDistance(`${calculatedDistance} m`);
        }
  
        setFare(`₹${calculatedFare}`);
  
        setTime(`${calculatedTime} min`);
        setStops(stopsCount);
      } else {
        alert("Please select valid source and destination stations.");
      }
    };

    const stations = [
      "Vijay Nagar Square",
      "Radisson Square",
      "Mumtaj Bag Colony",
      "Khajrana Square",
      "Bengali Square",
      "Patrakar Colony",
      "Palasia Square",
      "High Court",
      "Indore Railway Station",
      "Rajwada Palace",
      "Chota Ganpati",
      "Bada Ganpati",
      "Ramchandra Nagar Square",
      "BSF/ Kalani Nagar",
      "Airport",
      "Gandhi Nagar/Nanod",
      "Super Corridor 6",
      "Super Corridor 5",
      "Super Corridor 4",
      "Super Corridor 3",
      "Super Corridor 2",
      "Super Corridor 1",
      "Bhawarshala Square",
      "MR 10 Road",
      "ISBT/ MR 10 Flyover",
      "Chandragupta Square",
      "Hira Nagar",
      "Bapat Square",
      "Meghdoot Garden",
    ];
    
  return (
    <>
      <div className="flex justify-center items-center py-4 bg-gray-100 ">
        {/* Outer container (centered, with some padding) */}
        <div className="bg-[#b8dfee] border border-gray-300 rounded-lg shadow-md p-6 w-full max-w-md">
          {/* Title */}
          <h1 className="text-3xl font-bold text-center bg-blue-900 mb-8 text-white rounded-lg p-3">
            Online Ticket Booking
          </h1>

          {/* Booking Form */}
          <form className="space-y-4">
            {/* FROM */}
            <div>
            <label
                    htmlFor="to"
                    className="block font-semibold mb-2 text-blue-900 text-xl"
                  >
                    FROM
                  </label>
                  <select
                    id="from"
                    className="w-full px-4 py-3 rounded-lg border border-blue-300 focus:outline-none focus:ring focus:ring-blue-500"
                    onChange={(e) => setFrom(e.target.value)}
                  >
                    <option value="">Select Station</option>
                    {stations.map((station) => (
                      <option key={station} value={station}>
                        {station}
                      </option>
                    ))}
                  </select>
            </div>

            {/* TO */}
            <div>
            <label
                    htmlFor="to"
                    className="block font-semibold mb-2 text-blue-900 text-xl"
                  >
                    To
                  </label>
                  <select
                    id="to"
                    className="w-full px-4 py-3 rounded-lg border border-blue-300 focus:outline-none focus:ring focus:ring-blue-500"
                    onChange={(e) => setTo(e.target.value)}
                  >
                    <option value="">Select Station</option>
                    {stations.map((station) => (
                      <option key={station} value={station}>
                        {station}
                      </option>
                    ))}
                  </select>
            </div>

            {/* Mobile Number */}
            <div>
              <label
                htmlFor="mobileNumber"
                className="block font-semibold mb-1"
              >
                Mobile Number
              </label>
              <input
                type="text"
                id="mobileNumber"
                placeholder="+91 XXXXX XXXXX"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Ticket Type */}
            <div>
              <label htmlFor="ticketType" className="block font-semibold mb-1">
                Ticket Type
              </label>
              <select
                id="ticketType"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="single">Single Journey</option>
                <option value="return">Return Journey</option>
              </select>
            </div>

            {/* Number of Tickets */}
            <div>
              <label
                htmlFor="ticketsCount"
                className="block font-semibold mb-1"
              >
                Number of Tickets
              </label>
              <input
                type="number"
                id="ticketsCount"
                placeholder="1"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Total Fare */}
            <div>
              <label htmlFor="totalFare" className="block font-semibold mb-1">
                Total Fare
              </label>
              <input
                type="text"
                id="totalFare"
                placeholder="₹0.00"
                disabled
                className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* PAYMENT Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="block w-full py-2 bg-blue-600 text-white text-xl font-bold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 font-sans"
              >
                PAYMENT
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Payment;
