"use client";
import React from "react";
import Container from "./layer/Container";
import { useSelector } from "react-redux";
import { Image } from "antd";
import { FaDownload } from "react-icons/fa";

const Announcements = () => {
  let english = useSelector((state) => state.language.english);
  let darkMode = useSelector((state) => state.theme.darkMode);
  let announcement = [
    {
      date: "01 Jan 2045",
      time: "Sat 08:00 am",
      title: { english: "Final exam", bangla: "ফাইনাল পরীক্ষা" },
      description: {
        english:
          "The final exam will be held as scheduled. Ensure your preparations are complete before the exam.",
        bangla:
          "ফাইনাল পরীক্ষা নির্ধারিত সময়ে অনুষ্ঠিত হবে। পরীক্ষা আগে আপনার প্রস্তুতি সম্পূর্ণ নিশ্চিত করুন।",
      },
      imgSrc: "/images/routine.jpg",
    },
    {
      date: "10 Jan 2045",
      time: "Mon 10:00 am",
      title: { english: "Mid-term exam", bangla: "মিড-টার্ম পরীক্ষা" },
      description: {
        english:
          "Prepare well for your mid-term exam. Review all topics covered in class.",
        bangla:
          "মিড-টার্ম পরীক্ষার জন্য ভালোভাবে প্রস্তুতি নিন। ক্লাসে আলোচনা করা সমস্ত বিষয় পুনরায় পড়ুন।",
      },
      imgSrc: "/images/routine.jpg",
    },
    {
      date: "15 Jan 2045",
      time: "Wed 02:00 pm",
      title: { english: "Islamic Quiz", bangla: "ইসলামিক কুইজ" },
      description: {
        english:
          "Join our Islamic Quiz event to test your knowledge. Prizes await the winners!",
        bangla:
          "আমাদের ইসলামিক কুইজ ইভেন্টে অংশগ্রহণ করুন আপনার জ্ঞান পরীক্ষা করার জন্য। বিজয়ীদের জন্য পুরষ্কার রয়েছে!",
      },
      imgSrc: "/images/routine.jpg",
    },
    {
      date: "20 Jan 2045",
      time: "Fri 04:00 pm",
      title: { english: "Sermon Session", bangla: "খুৎবা সেশন" },
      description: {
        english:
          "Attend the sermon session by our esteemed scholar. The topic will be about the importance of prayer.",
        bangla:
          "আমাদের সম্মানিত আলেম দ্বারা খুৎবা সেশনে অংশগ্রহণ করুন। বিষয়টি হবে নামাজের গুরুত্ব সম্পর্কে।",
      },
      imgSrc: "/images/routine.jpg",
    },
    {
      date: "30 Jan 2045",
      time: "Tue 06:30 pm",
      title: { english: "Community Gathering", bangla: "কমিউনিটি গ্যাদারিং" },
      description: {
        english:
          "Join us for a community gathering. Meet new people and engage in meaningful discussions.",
        bangla:
          "আমাদের কমিউনিটি গ্যাদারিংয়ে যোগ দিন। নতুন মানুষদের সাথে পরিচিত হোন এবং অর্থপূর্ণ আলোচনায় অংশগ্রহণ করুন।",
      },
      imgSrc: "/images/routine.jpg",
    },
  ];
  return (
    <div>
      <Container className={` pt-20 md:pt-24 lg:pt-32 flex flex-col gap-y-6`}>
        <div
          className={`heading text-3xl md:text-6xl flex gap-x-2 md:gap-x-5 ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          <p>{english ? "Latest " : "সাম্প্রতিক "}</p>
          <p className="text-primary">
            {english ? "Announcements" : "ঘোষণা সমূহ"}
          </p>
        </div>

        <div className="main flex flex-col gap-y-10">
          {announcement.map((event, index) => (
            <div key={index} className="card flex flex-col sm:flex-row ">
              <div className="sm:w-1/6 text-sm lg:text-base xl:text-lg">
                <div
                  className={`time&date w-full sm:border-b pb-4 px-4 ${
                    darkMode ? "border-white/70" : "border-black/70"
                  }`}
                >
                  <p
                    className={`date font-medium text-nowrap ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {event.date}
                  </p>
                  <div
                    className={`time  text-nowrap  ${
                      darkMode ? "text-white/70" : "text-black/70"
                    }`}
                  >
                    {event.time}
                  </div>
                </div>
              </div>
              <div
                className={` sm:w-5/6 contend flex justify-between gap-x-1 px-0.5 sm:px-0 border-b sm:border-l pb-2 sm:pb-5 ${
                  darkMode ? "border-white/70" : "border-black/70"
                }`}
              >
                <div
                  className={`details w-3/4 sm:w-[87%] flex flex-col gap-y-1 sm:gap-y-4 sm:px-5  ${
                    darkMode
                      ? "text-white border-white/70"
                      : "text-black border-black/70"
                  } `}
                >
                  <p className={`title text-xl sm:text-2xl lg:text-3xl`}>
                    {english ? event.title.english : event.title.bangla}
                  </p>
                  <p
                    className={`description text-xs sm:text-base lg:text-xl ${
                      darkMode ? "text-white/70" : "text-black/70"
                    }`}
                  >
                    {english
                      ? event.description.english
                      : event.description.bangla}
                  </p>
                </div>
                <div
                  className={`img w-1/4 sm:w-[13%]  relative ${
                    darkMode ? "border-white/70" : "border-black/70"
                  }`}
                >
                  <Image
                    className="aspect-[1/1.4] object-contain"
                    src={event.imgSrc}
                    alt="Event Image"
                  />
                  <button
                    className="absolute right-full top-0 sm:-translate-x-1/4 text-xs  bg-primary text-white p-2 rounded-full hover:bg-blue-700 transition-all"
                    onClick={() => {
                      const link = document.createElement("a");
                      const fileName = link.href.split("/").pop();
                      link.href = event.imgSrc;
                      link.download = fileName;
                      link.click();
                    }}
                  >
                    <FaDownload />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Announcements;
