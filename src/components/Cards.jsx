import React, { useState } from "react";
import "./CardComps/Cards.css";
import Cardesign from "./CardComps/Cardesign";
import Navigator from "./CardComps/Navigator";
import Header from "./CardComps/Header";
import data from "../assets/car.json";

const CardsPerPage = 8;
function Cards() {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsToShow, setCardsToShow] = useState(
    data.cars.slice(0, CardsPerPage)
  );

  const handlePageChange = (page) => {
    const startIndex = (page - 1) * CardsPerPage;
    const endIndex = startIndex + CardsPerPage;
    setCardsToShow(data.cars.slice(startIndex, endIndex));
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(data.cars.length / CardsPerPage);

  return (
    <section className="flex flex-col gap-5 justify-center items-center">
      <div className="">
        <h1 className="text-gradient font-Rose font-semibold ss:text-[52px] text-[35px] ss:leading-[55px] leading-[35px] mb-6">
          Top Collections
        </h1>
      </div>
      <Header />
      <div className="flex flex-col items-center justify-center ">
        <div className="grid grid-cols-1 ss:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-x-8">
          <Cardesign cardsToShow={cardsToShow} />
        </div>
      </div>
      <Navigator
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </section>
  );
}

export default Cards;
