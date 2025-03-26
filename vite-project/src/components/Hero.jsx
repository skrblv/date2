import React, { useState, useEffect } from "react";
import {
  calculateTimeLeft,
  getStoredDate,
  storeDate,
} from "../features/Hero.model";

function Hero() {
  const [targetDate, setTargetDate] = useState(getStoredDate());
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setTargetDate(newDate);
    storeDate(newDate);
  };

  return (
    <section
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center text-white text-center overflow-x-hidden"
      style={{ backgroundImage: "url('/Hero.jpg')" }}
    >
      <div className="backdrop-blur-sm  w-[90%] sm:w-[60%] md:w-[40%] lg:w-[30%] h-auto p-6 flex flex-col justify-center items-center rounded-lg ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
          Date Planner
        </h1>
        <p className="text-lg sm:text-xl mb-4 drop-shadow-lg">
          Time left until {targetDate}:
        </p>
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 drop-shadow-lg">
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
          {timeLeft.seconds}s
        </p>
        <input
          type="datetime-local"
          value={targetDate}
          onChange={handleDateChange}
          className="w-full sm:w-auto border border-gray-300 rounded-lg p-3 drop-shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md text-white"
        />
      </div>
    </section>
  );
}

export default Hero;
