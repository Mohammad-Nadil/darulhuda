import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Container from "./layer/Container";
import img1 from "../assets/teacher1.png";
import img2 from "../assets/teacher2.png";
import img3 from "../assets/teacher3.png";
import img4 from "../assets/teacher4.png";
import Image from "next/image";

const Teacher = () => {
  let darkMode = useSelector((state) => state.theme.darkMode);
  let english = useSelector((state) => state.language.english);
  let [active, setActive] = useState(0);
  const sliderRef = useRef(null);
  useEffect(() => {
    const handleWheel = (e) => {
      if (sliderRef.current) {
        e.preventDefault();
        sliderRef.current.scrollLeft += e.deltaY * 0.8; // Adjust scroll speed
      }
    };
    const slider = sliderRef.current;
    slider?.addEventListener("wheel", handleWheel);
    return () =>
      slider?.removeEventListener("wheel", handleWheel);
  }, []);

  // Center Active Slide
  useEffect(() => {
    if (sliderRef.current) {
      const activeElement = sliderRef.current.children[active];
      if (activeElement) {
        activeElement.scrollIntoView({ behavior: "smooth", inline: "center" });
      }
    }
  }, [active]);

  let teachers = [
    {
      name: { english: "Maulana Abdul Rahman", bangla: "মাওলানা আবদুর রহমান" },
      designation: {
        english: "Senior Islamic Studies Teacher",
        bangla: "সিনিয়র ইসলামিক স্টাডিজ শিক্ষক",
      },
      info: {
        english:
          "Graduated from Al-Jamiatul Ahlia Darul Ulum Moinul Islam with specialization in Tafsir and Hadith. Has over 15 years of experience in teaching Islamic jurisprudence and Arabic grammar.",
        bangla:
          "আল-জামিয়াতুল আহলিয়া দারুল উলুম মইনুল ইসলাম থেকে তাফসির ও হাদিসে বিশেষায়িত। ইসলামিক আইন ও আরবি ব্যাকরণ শিক্ষায় ১৫ বছরের অভিজ্ঞতা।",
      },
      image: img1,
    },
    {
      name: { english: "Mufti Saiful Islam", bangla: "মুফতি সাইফুল ইসলাম" },
      designation: {
        english: "Head of Fiqh Department",
        bangla: "ফিকহ বিভাগের প্রধান",
      },
      info: {
        english:
          "Completed Dawrah Hadith from Jamiatul Uloom Al-Islamia and obtained Ifta degree. Expert in Islamic law and counseling, with 10 years of experience in Madrasa education.",
        bangla:
          "জামিয়াতুল উলূম আল-ইসলামিয়া থেকে দাওরায়ে হাদিস সম্পন্ন করেছেন এবং ইফতা ডিগ্রি অর্জন করেছেন। ইসলামী আইন ও পরামর্শের বিশেষজ্ঞ, ১০ বছরের মাদ্রাসা শিক্ষার অভিজ্ঞতা।",
      },
      image: img2,
    },
    {
      name: { english: "Qari Mahmudul Hasan", bangla: "কারী মাহমুদুল হাসান" },
      designation: {
        english: "Quran Recitation & Tajweed Instructor",
        bangla: "কুরআন তেলাওয়াত ও তাজবিদ প্রশিক্ষক",
      },
      info: {
        english:
          "Graduated from Darul Uloom Deoband with specialization in Tajweed and Qira'at. Holds 8 years of experience in teaching Quran recitation with proper articulation.",
        bangla:
          "দারুল উলূম দেওবন্দ থেকে তাজবিদ ও ক্বিরাআতে বিশেষায়িত। সঠিক উচ্চারণসহ কুরআন তেলাওয়াত শিক্ষায় ৮ বছরের অভিজ্ঞতা।",
      },
      image: img3,
    },
    {
      name: { english: "Hafiz Abdul Karim", bangla: "হাফিজ আবদুল করিম" },
      designation: {
        english: "Hifz Program Supervisor",
        bangla: "হিফজ বিভাগের তত্ত্বাবধায়ক",
      },
      info: {
        english:
          "Memorized the entire Quran at an early age and received Ijazah from renowned scholars. Has been mentoring Hifz students for 12 years.",
        bangla:
          "ছোটবেলায় পুরো কুরআন মুখস্থ করেছেন এবং প্রসিদ্ধ উলামাদের কাছ থেকে ইজাজাহ পেয়েছেন। ১২ বছর ধরে হিফজ ছাত্রদের পরামর্শ দিচ্ছেন।",
      },
      image: img4,
    },
    {
      name: { english: "Maulana Yusuf Ali", bangla: "মাওলানা ইউসুফ আলী" },
      designation: {
        english: "Arabic Language Lecturer",
        bangla: "আরবি ভাষার প্রভাষক",
      },
      info: {
        english:
          "Graduated from Madinah University with a degree in Arabic linguistics. Fluent in classical and modern Arabic, with 9 years of teaching experience.",
        bangla:
          "মদিনা বিশ্ববিদ্যালয় থেকে আরবি ভাষাতত্ত্বে স্নাতক। ক্লাসিক্যাল ও আধুনিক আরবিতে দক্ষ, ৯ বছরের শিক্ষাদানের অভিজ্ঞতা।",
      },
      image: img2,
    },
    {
      name: { english: "Mufti Anwar Hossain", bangla: "মুফতি আনোয়ার হোসেন" },
      designation: {
        english: "Hadith Studies Professor",
        bangla: "হাদিস স্টাডিজ প্রফেসর",
      },
      info: {
        english:
          "Completed Alim and Dawrah Hadith from Al-Jamiatul Arabia. Specializes in the study of Sahih Bukhari and Muslim, with 14 years of teaching experience.",
        bangla:
          "আল-জামিয়াতুল আরাবিয়া থেকে আলিম ও দাওরায়ে হাদিস সম্পন্ন করেছেন। সহিহ বুখারি ও মুসলিম স্টাডিজে বিশেষায়িত, ১৪ বছরের শিক্ষাদানের অভিজ্ঞতা।",
      },
      image: img4,
    },
  ];

  return (
    <div>
      <Container
        className={` py-20 md:py-24 lg:py-32 flex-col gap-y-10 sm:gap-y-20 flex `}
      >
        <div className="head flex flex-col  md:gap-y-5">
          <p className="title text-xl text-primary text-center">
            {english ? "Teachers" : "শিক্ষক"}
          </p>
          <h2
            className={`header text-[27px] lg:text-6xl font-semibold text-center ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            {english ? "Meet Our Teachers" : " আমাদের শিক্ষকদের পরিচয়"}
          </h2>
        </div>
        <div className="main flex flex-col sm:flex-row gap-6 ">
          <div className="image w-[70%] sm:w-2/5 aspect-[512/595] sm:aspect-[512/595] md:aspect-[512/400] mx-auto relative">
            <Image
            className=" "
              src={teachers[active].image}
              alt="teacher img"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="more sm:w-3/5 flex flex-col gap-y-2 md:gap-y-6 justify-between ">
            <div className="top  flex flex-col gap-y-2 sm:gap-y-3 justify-between">
              <div
                className={`name text-3xl lg:text-6xl ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                {english
                  ? teachers[active].name.english
                  : teachers[active].name.bangla}
              </div>
              <div className="role lg:text-4xl text-primary">
                {english
                  ? teachers[active].designation.english
                  : teachers[active].designation.bangla}
              </div>
              <div
                className={`info w-5/6 text-sm lg:text-lg ${
                  darkMode ? "text-white/70" : " text-black/70"
                }`}
              >
                {english
                  ? teachers[active].info.english
                  : teachers[active].info.bangla}
              </div>
            </div>
            <div className="h-0.5 bg-primary line"></div>
            {/* Scrollable Slider */}
            <div
              ref={sliderRef}
              className="flex gap-1 sm:gap-2 lg:gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
            >
              {teachers.map((teacher, index) => (
                <div
                  key={index}
                  onClick={() => setActive(index)}
                  className={`cursor-pointer relative snap-center w-[28%] sm:w-[27%] aspect-[512/595] flex-shrink-0 border-2   transition-all ${
                    active === index ? "border-primary " : "border-transparent"
                  }`}
                >
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Teacher;
