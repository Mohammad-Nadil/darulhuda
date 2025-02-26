import React from "react";
import { useSelector } from "react-redux";
import Container from "./layer/Container";
import {
  FaCalendarAlt,
  FaHandsHelping,
  FaSchool,
  FaUsers,
} from "react-icons/fa";
import { FaBookQuran, FaMosque } from "react-icons/fa6";
import Link from "next/link";

const Activities = () => {
  let english = useSelector((state) => state.language.english);
  let darkMode = useSelector((state) => state.theme.darkMode);

  let items = [
    {
      icon: <FaMosque />,
      title: { english: "Hifz Section", bangla: "হিফজ বিভাগ" },
      description: {
        english: "Students memorize the Quran with proper Tajweed.",
        bangla: "শিক্ষার্থীরা সঠিক তাজবিদসহ কুরআন মুখস্থ করে।",
      },
    },
    {
      icon: <FaBookQuran />,
      title: { english: "Najera Section", bangla: "নাজেরা বিভাগ" },
      description: {
        english: "Basic Quran recitation training for beginners.",
        bangla: "শিশুদের জন্য কুরআন তেলাওয়াত প্রশিক্ষণ।",
      },
    },
    {
      icon: <FaSchool />,
      title: {
        english: "Special Najera Section",
        bangla: "বিশেষ নাজেরা বিভাগ",
      },
      description: {
        english: "Advanced Quran recitation for selected students.",
        bangla: "নির্বাচিত শিক্ষার্থীদের জন্য উন্নত কুরআন তেলাওয়াত।",
      },
    },
    {
      icon: <FaHandsHelping />,
      title: { english: "Nurani Section", bangla: "নূরানী বিভাগ" },
      description: {
        english: "Teaches Arabic letters and basic Islamic studies.",
        bangla: "আরবি বর্ণ ও মৌলিক ইসলামিক শিক্ষা শেখানো হয়।",
      },
    },
    {
      icon: <FaUsers />,
      title: {
        english: "Adult Islamic Education",
        bangla: "প্রাপ্তবয়স্কদের ইসলামিক শিক্ষা",
      },
      description: {
        english: "Special classes for adults to learn Islam.",
        bangla: "প্রাপ্তবয়স্কদের জন্য ইসলাম শিক্ষার বিশেষ ক্লাস।",
      },
    },
    {
      icon: <FaCalendarAlt />,
      title: { english: "Islamic Events", bangla: "ইসলামিক অনুষ্ঠান" },
      description: {
        english: "Regular programs on Islamic teachings and culture.",
        bangla: "ইসলামিক শিক্ষা ও সংস্কৃতির উপর নিয়মিত অনুষ্ঠান।",
      },
    },
  ];

  return (
    <div>
      <Container
        className={` flex flex-col items-center justify-center gap-y-2 md:gap-y-6 pt-20 md:pt-24 lg:pt-32`}
      >
        <p className="text-xl text-primary font-medium">
          {english ? "Activities" : "কার্যক্রম"}
        </p>
        <h2
          className={`text-xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-semibold ${
            darkMode ? "text-white " : "text-black"
          }`}
        >
          {english
            ? "Here Are Our Activities"
            : "এখানে আমাদের কার্যক্রম রয়েছে"}
        </h2>
        <div className="main grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 xl:gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className={`card flex items-center gap-x-3 lg:gap-x-6 py-3 md:py-5 xl:py-9 px-3 lg:px-6 rounded md:rounded-lg ${
                darkMode
                  ? "bg-black text-white shadow-[0px_0px_50px_1px_rgba(255,255,255,0.1)]"
                  : "bg-white text-black shadow-[0px_0px_50px_0px_rgba(0,0,0,0.15)]"
              }`}
            >
              <div className="icon text-4xl md:text-5xl xl:text-7xl">
                {item.icon}
              </div>
              <div className="info flex flex-col gap-y-2 sm:gap-y-3 lg:gap-y-5">
                <div className="top flex flex-col gap-y-1 md:gap-y-2">
                  <h2
                    className={`title lg:text-2xl font-semibold ${
                      darkMode ? "text-white " : "text-black"
                    }`}
                  >
                    {english ? item.title.english : item.title.bangla}
                  </h2>
                  <p
                    className={`description text-xs lg:text-base font-medium ${
                      darkMode ? "text-white/70 " : "text-black/70"
                    }`}
                  >
                    {english
                      ? item.description.english
                      : item.description.bangla}
                  </p>
                </div>
                <div className="bottom">
                  <Link
                    href="/"
                    className="bg-primary text-black py-1 lg:py-2 px-2 lg:px-4 rounded-sm md:rounded hover:bg-primary/80 text-[10px] md:text-sm xl:text-base transition-all duration-300"
                  >
                    {english ? "Read More" : "আরো পড়ুন"}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
export default Activities;
