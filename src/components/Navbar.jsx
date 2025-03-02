"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../assets/logo.png";
import Link from "next/link";
import Container from "./layer/Container";
import { IoMenu } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/features/theme/themeSlice";
import { setEnglish } from "../features/language/languageSlice";
import { FaGear } from "react-icons/fa6";

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
  let english = useSelector((state) => state.language.english);
  let darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
  let [show, setShow] = useState(false);
  let [settings, setSettings] = useState(false);
  let menus = [
    { english: "Home", bangla: "হোম" },
    { english: "About", bangla: "পরিচিতি" },
    { english: "Activities", bangla: "কার্যক্রম" },
    { english: "Events", bangla: "ইভেন্টস" },
    { english: "Sermons", bangla: "বক্তৃতা" },
    { english: "Contact", bangla: "যোগাযোগ" },
  ];
  return (
    <nav className="absolute top-0 bg-white/30 sm:bg-white/15 backdrop-blur-sm w-full z-20 ">
      <Container className="">
        <div className="flex items-center justify-between py-2">
          <div className="logo w-10 sm:w-14 aspect-square ">
            <Image className="w-full h-full" src={logo} alt={logo} />
          </div>
          <ul
            className={` menu flex flex-col sm:flex-row items-end sm:items-center gap-y-4 gap-x-6  absolute sm:static top-full right-0 border border-black rounded-[4px] sm:border-none w-1/2 sm:w-auto transition-all duration-300 px-3 ${
              show ? "opacity-100 visible " : "opacity-0 invisible "
            } sm:flex sm:opacity-100 sm:visible bg-white/70 backdrop-blur-sm sm:bg-transparent sm:backdrop-blur-none`}
          >
            {menus.map((menu, index) => (
              <Li key={index} liText={english ? menu.english : menu.bangla} />
            ))}
            <div className="english flex sm:hidden items-center gap-x-2">
              <p>English</p>
              <button
                onClick={() => dispatch(setEnglish())}
                className="body w-11 aspect-[2/1] rounded-full bg-gray-300 relative z-40"
              >
                <div
                  className={`button aspect-square z-50 border-[3px]  border-gray-300 absolute top-1/2 -translate-y-1/2 h-full  rounded-full duration-300 ${
                    english
                      ? "bg-primary right-0"
                      : "bg-gray-400 right-full translate-x-full"
                  }`}
                ></div>
              </button>
            </div>
            <div className="darkMode text-nowrap flex sm:hidden items-center gap-x-2 ">
              <p>Dark Mode</p>
              <button
                onClick={() => dispatch(toggleTheme())}
                className="body w-11 aspect-[2/1] rounded-full bg-gray-300 relative z-40"
              >
                 <div
                  className={`button aspect-square z-50 border-[3px]  border-gray-300 absolute top-1/2 -translate-y-1/2 h-full  rounded-full duration-300  ${
                    darkMode
                      ? "bg-primary right-0"
                      : "bg-gray-400 right-full translate-x-full"
                  }`}
                ></div>
              </button>
            </div>
          </ul>
          <div
            onClick={() => setShow(!show)}
            className="btn sm:hidden text-3xl"
          >
            <IoMenu />
          </div>
          <div className="btn relative hidden sm:flex">
            <div onClick={() => setSettings(!settings)} >
              <FaGear className="text-xl" />
            </div>
          </div>
          <div className={`hidden sm:flex flex-col absolute right-0 top-full -translate-y-1/4 gap-x-4 gap-y-2 bg-black/60 rounded p-4 text !backdrop-blur-sm duration-300 ${settings ? "visible opacity-100" : "invisible opacity-0"}`}>
            <div className="english flex justify-between items-center gap-x-2 text-white">
              <p>English</p>
              <button
                onClick={() => dispatch(setEnglish())}
                className="body w-11 aspect-[2/1] rounded-full bg-gray-300 relative z-40"
              >
                <div
                  className={`button aspect-square z-50 border-[3px]  border-gray-300 absolute top-1/2 -translate-y-1/2 h-full  rounded-full duration-300 text-[10px] grid place-content-center ${
                    english
                      ? "bg-primary right-0"
                      : "bg-gray-400 right-full translate-x-full"
                  }`}
                >  </div>
              </button>
            </div>
            <div className="darkMode flex justify-between items-center gap-x-2 text-white ">
              <p>Dark Mode</p>
              <button
                onClick={() => dispatch(toggleTheme())}
                className="body w-11 aspect-[2/1] rounded-full bg-gray-300 relative z-40"
              >
                <div
                  className={`button aspect-square z-50 border-[3px] border-gray-300 absolute top-1/2 -translate-y-1/2 h-full  rounded-full duration-300 ${
                    darkMode
                      ? "bg-primary right-0"
                      : "bg-gray-400 right-full translate-x-full"
                  }`}
                ></div>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
