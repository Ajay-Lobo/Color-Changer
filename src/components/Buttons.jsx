import { useState } from "react";

function Buttons() {
  const [bgColor, setBgColor] = useState("");

  const colors = [
    { name: "Blue", color: "blue", classes: "bg-blue-500 hover:bg-blue-700" },
    { name: "Red", color: "red", classes: "bg-red-500 hover:bg-red-700" },
    {
      name: "Green",
      color: "green",
      classes: "bg-green-500 hover:bg-green-700",
    },
    {
      name: "Yellow",
      color: "yellow",
      classes: "bg-yellow-500 hover:bg-yellow-700",
    },
    {
      name: "Purple",
      color: "purple",
      classes: "bg-purple-500 hover:bg-purple-700",
    },
    { name: "Pink", color: "pink", classes: "bg-pink-500 hover:bg-pink-700" },
    {
      name: "Orange",
      color: "orange",
      classes: "bg-orange-500 hover:bg-orange-700",
    },
    { name: "Teal", color: "teal", classes: "bg-teal-500 hover:bg-teal-700" },
    {
      name: "Indigo",
      color: "indigo",
      classes: "bg-indigo-500 hover:bg-indigo-700",
    },
    { name: "Cyan", color: "cyan", classes: "bg-cyan-500 hover:bg-cyan-700" },
    { name: "Lime", color: "lime", classes: "bg-lime-500 hover:bg-lime-700" },
    { name: "Gray", color: "gray", classes: "bg-gray-500 hover:bg-gray-700" },
    {
      name: "Black",
      color: "black",
      classes: "bg-black hover:bg-gray-800 text-white",
    },
  ];

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: bgColor }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {colors.map((color) => (
            <button
              key={color.color}
              className={`${color.classes} text-white font-bold py-2 px-4 rounded-full outline-none`}
              onClick={() => setBgColor(color.color)}
            >
              {color.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Buttons;
