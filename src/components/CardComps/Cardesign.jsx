import React, { useState } from "react";
import data from "../../assets/car.json";
import Button from "./Button";
import ScrollReveal from "scrollreveal";
import "./design.css";

// PropertyDetails Component
const PropertyDetails = (props) => {
  return (
    <div className="text-white flex flex-col justify-start  mx-5 mt-3">
      <p className="flex items-center text-lg gap-1 font-[900]  ">
        {props.name}
      </p>
      <p className="flex text-gray-400 items-center text-md gap-1 font-[300]  ">
        {props.year}
      </p>
    </div>
  );
};

// PriceAndReadMore Component
const PriceAndReadMore = () => {
  return (
    <div className="flex justify-between mx-5 items-center mt-4 ">
      <p>
        <span className="text-purple-300 text-xl font-[900] ">2.53 ETH</span>
      </p>
      <p>
        <span className="text-white text-md font-[900] ">$4487</span>
      </p>
    </div>
  );
};

function Cardesign({ cardsToShow }) {
  return (
    <>
      {cardsToShow.map((item) => (
        <div
          key={item.id}
          className="this-is-card select-none tilted-card w-[250px] h-[365px] hover:bg-gray-800 glassmorphism rounded-2xl flex flex-col "
        >
          <div className="rounded-xl overflow-hidden z-10 mt-[10px] relative mx-2">
            <img
              src={item.image_url}
              alt="image1"
              className="w-full h-[220px] object-cover "
            />
          </div>

          <PropertyDetails name={item.car_name} year={item.make_year} />
          <PriceAndReadMore />
        </div>
      ))}
    </>
  );
}

export default Cardesign;
