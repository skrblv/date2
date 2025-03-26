import React from "react";
import { useState } from "react";


const Diagram = () => {
  const [activeGroup, setActiveGroup] = useState(null);

  const buttons = [
    { id: "group1", label: "Кнопка 1", sub: ["Подкнопка 1-1", "Подкнопка 1-2"] },
    { id: "group2", label: "Кнопка 2", sub: ["Подкнопка 2-1", "Подкнопка 2-2"] },
    { id: "group3", label: "Кнопка 3", sub: ["Подкнопка 3-1", "Подкнопка 3-2"] },
    { id: "group4", label: "Кнопка 4", sub: ["Подкнопка 4-1", "Подкнопка 4-2"] },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-80">
        {buttons.map(({ id, label, sub }, index) => (
          <div key={id} className="mb-4">
            <button
              className="w-full py-2 px-4 bg-purple-600 text-white rounded-md shadow-md hover:bg-purple-700 transition"
              onClick={() => setActiveGroup(activeGroup === id ? null : id)}
            >
              {label}
            </button>

            <div
  className={`mt-2 flex flex-col space-y-2 transition-all duration-500 ${
    activeGroup === id ? "opacity-100 scale-100" : "opacity-0 scale-95 h-0 overflow-hidden"
  }`}
>

            >
              {sub.map((subLabel, subIndex) => (
                <button key={subIndex} className="py-2 px-3 bg-teal-500 text-white rounded-md shadow-md hover:bg-teal-600">
                  {subLabel}
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Линии SVG */}
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {buttons.map(({ id }, index) => (
            <line
              key={id}
              x1="50%"
              y1="10"
              x2="50%"
              y2={activeGroup === id ? "60" : "10"}
              stroke="#6200ea"
              strokeWidth="2"
              strokeDasharray="100"
              strokeDashoffset={activeGroup === id ? "0" : "100"}
              className="transition-all duration-500"
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default Diagram;