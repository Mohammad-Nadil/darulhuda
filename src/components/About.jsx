import React from "react";
import Container from "./layer/Container";
import { useSelector } from "react-redux";
import Image from "next/image";
import first from "../assets/firstLong.png";
import second from "../assets/second.png";
import third from "../assets/third.png";

const About = () => {
  let english = useSelector((state) => state.language.english);
  let darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <div>
      <Container
        className={` flex flex-col-reverse gap-y-10 xl:flex-row gap-x-6 items-center py-6 md:py-12`}
      >
        <div className="gallery w-full xl:w-1/2  gap-2 gap-y-5 grid grid-cols-2 grid-rows-2 xl:!aspect-square ">
          <div className="first col-span-1 row-span-2 !aspect-[1/2.05]  ">
            <Image
              src={first}
              alt="first image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="second col-span-1 row-span-1  aspect-square">
            <Image
              src={second}
              alt="second image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="third col-span-1 row-span-1  aspect-square">
            <Image
              src={third}
              alt="third image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="main xl:w-1/2 flex flex-col gap-y-3 md:gap-y-3.5">
          <p className="text-xl text-primary !m-0">
            {english ? "About" : " পরিচিতি "}
          </p>
          <p
            className={`text-3xl font-semibold !m-0 ${
              darkMode ? "text-white " : "text-black"
            } ${english ? "md:text-4xl" : "md:text-5xl"}`}
          >
            {english
              ? "History of Madrasa-e-Darul Huda"
              : "মাদ্রাসা-ই-দারুল হুদার ইতিহাস"}
          </p>
          <h2
            className={`md:leading-7 !m-0 ${
              darkMode ? "text-white/70 " : "text-black/70"
            } `}
          >
            {english
              ? `Madrasa-e-Darul Huda was established with the mission to provide quality Islamic education to students, enabling them to gain knowledge that will help them in both their spiritual and worldly lives. Founded in the early years of the 21st century, the madrasa has grown to become one of the most respected and recognized institutions in the region.

The madrasa’s core focus is on the teachings of the Holy Quran, Hadith, and other Islamic sciences. In addition to religious education, the madrasa also places great importance on modern subjects like mathematics, science, and the English language. The vision of the madrasa is to produce individuals who are well-versed in both religious and secular knowledge, so they can serve their communities in various professional and social capacities.......

`
              : `মাদ্রাসা-ই-দারুল হুদা প্রতিষ্ঠিত হয়েছিল একটি উদ্দেশ্য নিয়ে, যা হল মানসম্পন্ন ইসলামিক শিক্ষা প্রদান করা, যাতে ছাত্ররা তাদের আধ্যাত্মিক ও দুনিয়াবি জীবনে সমৃদ্ধ হতে পারে। ২১ শতকের শুরুর দিকে প্রতিষ্ঠিত হওয়া এই মাদ্রাসাটি এখন এলাকার অন্যতম শ্রদ্ধেয় ও প্রশংসিত প্রতিষ্ঠান হিসেবে পরিণত হয়েছে।

মাদ্রাসার মূল উদ্দেশ্য হল পবিত্র কোরআন, হাদীস এবং অন্যান্য ইসলামিক বিজ্ঞানের পাঠদান। ধর্মীয় শিক্ষার পাশাপাশি, মাদ্রাসাটি আধুনিক বিষয়গুলির ওপরও গুরুত্ব দেয়, যেমন গণিত, বিজ্ঞান এবং ইংরেজি ভাষা। মাদ্রাসার দৃষ্টিভঙ্গি হল এমন ব্যক্তিদের তৈরি করা, যারা ধর্মীয় এবং দুনিয়াবি জ্ঞানে অভিজ্ঞ, যাতে তারা তাদের কমিউনিটিতে বিভিন্ন পেশাদার এবং সামাজিক ভূমিকা পালন করতে পারে। ......

`}
          </h2>
        </div>
      </Container>
    </div>
  );
};

export default About;
