"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../assets/logo.png";
import Link from "next/link";
import Container from "./layer/Container";
import { IoMenu } from "react-icons/io5";
import { useSelector } from "react-redux";

const Li = ({ liText, className }) => {
  return (
    <li
      className={` font-semibold text-black font-bangla hover:text-primary duration-300 ${className}  `}
    >
      <Link href="/">{liText}</Link>
    </li>
  );
};

const Navbar = () => {
  const english = useSelector((state)=>state.language.english)
  let [show, setShow] = useState(false);
  let menus = [
    { english: "Home", bangla: "হোম" },
    { english: "About", bangla: "পরিচিতি" },
    { english: "Activities", bangla: "কার্যক্রম" },
    { english: "Events", bangla: "ইভেন্টস" },
    { english: "Sermons", bangla: "বক্তৃতা" },
    { english: "Contact", bangla: "যোগাযোগ" }
  ];
  return (
    <nav className="absolute top-0 bg-white/30 sm:bg-white/15 backdrop-blur-sm w-full z-20 ">
      <Container className="">
        <div className="flex items-center justify-between py-2">
          <div className="logo w-10 sm:w-14 aspect-square ">
            <Image className="w-full h-full" src={logo} alt={logo} />
          </div>
          <ul
            className={` menu flex flex-col sm:flex-row items-end sm:items-center gap-y-4 gap-x-6  absolute sm:static top-full right-0 border border-black rounded-[4px] sm:border-none w-1/3 sm:w-auto transition-all duration-300 px-3 ${
              show ? "opacity-100 visible " : "opacity-0 invisible "
            } sm:flex sm:opacity-100 sm:visible bg-white/70 backdrop-blur-sm sm:bg-transparent sm:backdrop-blur-none`}
          >
            {menus.map((menu, index) => (
              <Li key={index} liText={english ? menu.english : menu.bangla} />
            ))}
          </ul>
          <div
            onClick={() => setShow(!show)}
            className="btn sm:opacity-0 text-3xl"
          >
            <IoMenu />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
