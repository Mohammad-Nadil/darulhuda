import React from "react";
import Container from "./layer/Container";
import { FaMosque } from "react-icons/fa";
import { useSelector } from "react-redux";

const Extra = () => {
  let english = useSelector((state) => state.language.english);
  return (
    <Container className="">
      <div className="w-full h-full py-2 sm:py-6 lg:py-12 px-3 sm:px-5 lg:px-14 bg-primary flex flex-col sm:flex-row justify-between items-center gap-y-4 rounded-sm md:rounded-md">
        <div className="left  w-11/12 sm:w-2/3 flex gap-x-5 lg:gap-x-8 items-center">
          <div className={`icon text-white text-5xl md:text-8xl`}>
            <FaMosque />
          </div>
          <p className="sm:text-xl lg:text-4xl">
            {english
              ? " Every Muslim needs to realize the importance of the 'Pillar' of Islam."
              : " প্রত্যেক মুসলমানের উচিত ইসলামের 'স্তম্ভ' এর গুরুত্ব উপলব্ধি করা।"}
          </p>
        </div>
        <div className="right sm:w-1/3 flex justify-end">
          <button className="bg-white  font-semibold text-lg px-3 sm:px-4 md:px-9  py-1.5 sm:py-3 md:py-4 hover:scale-110 duration-300">
            
            {english ? " Learn More" : " আরো পড়ুন "}
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Extra;
