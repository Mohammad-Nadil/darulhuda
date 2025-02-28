import Container from "@/components/layer/Container";
import React from "react";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { useSelector } from "react-redux";

const Footer = () => {
  let english = useSelector((state) => state.language.english);
  return (
    <footer className=" pt-20 md:pt-24 lg:pt-32 ">
      <div className="bg-primary">
        <Container
          className={` py-3 md:py-6 flex flex-col sm:flex-row lg:flex-col xl:flex-row justify-between sm:items-end lg:items-center xl:items-center gap-y-5 `}
        >
          <div className="info flex flex-col lg:flex-row gap-y-2 gap-x-3 lg:items-center ">
            <div className="name flex items-center gap-x-2">
              <p className="text-gray-600">©</p>{" "}
              <h2 className="text-black text-lg">
                {english ? "Madrasah e Darul Huda" : "মাদ্রাসা ই দারুল হুদা"}
              </h2>
            </div>
            <div className="rights text-gray-500">
              <p>
                {english
                  ? " , All Rights Reserved"
                  : " , সমস্ত অধিকার সংরক্ষিত"}
              </p>
            </div>
            <div className="address flex gap-x-2 items-center">
              <FaMapMarkerAlt />
              {english
                ? "209/4 BGB 2no Gate, Lalbagh, Dhaka"
                : "২০৯/৪ বিজিবি ২নং গেট, লালবাগ, ঢাকা"}
              <a href=""></a>
            </div>
            <div className="tel flex gap-x-2 items-center">
              <FaPhone />
              <a href="tel:01970867755">
                <p>01970867755</p>
              </a>
            </div>
          </div>
          <div className="design flex flex-col sm:flex-row items-end sm:items-center gap-x-5 justify-end ">
            <div className="designBy flex items-center gap-x-2">
              <p>Design By</p>
              <a href="https://htmlcodex.com/" target="_blank">
                HTML Codex
              </a>
            </div>
            <div className="developBy flex items-center gap-x-2">
              <p>Develop By</p>
              <a
                className="hidden xl:flex"
                href="https://nadil.vercel.app/"
                target="_blank"
              >
                Nadil
              </a>
              <a
                className="xl:hidden flex"
                href="https://nadil.vercel.app/"
                target="_blank"
              >
                Mohammad Nadil
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
