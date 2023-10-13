import React from "react";
import "./Cards.css";
const Header = () => {
  return (
    <div className="flex flex-row justify-center max-w-[95%]">
      <button class="border mx-2 border-gray-500 bg-purple-700 text-white hover:bg-blue-100 hover:text-black font-bold py-2 px-4 rounded-[20px]">
        Outlined Button
      </button>{" "}
      <button class="border mx-2 border-gray-500 text-white hover:bg-blue-100 hover:text-black font-bold py-2 px-4 rounded-[20px]">
        Outlined Button
      </button>{" "}
      <button class="border mx-2 border-gray-500 text-white hover:bg-blue-100 hover:text-black font-bold py-2 px-4 rounded-[20px]">
        Outlined Button
      </button>{" "}
      <button class="border mx-2 border-gray-500 text-white hover:bg-blue-100 hover:text-black font-bold py-2 px-4 rounded-[20px]">
        Outlined Button
      </button>
    </div>
  );
};

export default Header;
