import React, { useState } from "react";
import { useSelector } from "react-redux";
import Container from "./layer/Container";
import Image from "next/image";
import event from "../assets/events.png";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2  md:text-3xl bg-primary p-0.5 md:p-2 rounded-full cursor-pointer z-50 ${className}`}
      onClick={onClick}
    >
      <FaAngleRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2  md:text-3xl bg-primary p-0.5 md:p-2 rounded-full cursor-pointer z-50 ${className}`}
      onClick={onClick}
    >
      <FaAngleLeft />
    </div>
  );
}

const Events = () => {
  let darkMode = useSelector((state) => state.theme.darkMode);
  let english = useSelector((state) => state.language.english);
  let [active, setActive] = useState(0);

  const events = [
    {
      title: { english: "Graduation Ceremony", bangla: "পাগড়ি অনুষ্ঠান" },
      description: {
        english:
          "Our madrasa's Pagri Ceremony is a special event where students are honored for completing their Islamic education.",
        bangla:
          "আমাদের মাদ্রাসার পাগড়ি অনুষ্ঠান একটি বিশেষ আয়োজন, যেখানে ছাত্রদের ইসলামিক শিক্ষা সমাপ্তির জন্য সম্মানিত করা হয়।",
      },
      image: "/images/graduation.jpg",
    },
    {
      title: {
        english: "Annual Islamic Conference",
        bangla: "বার্ষিক ইসলামিক সম্মেলন",
      },
      description: {
        english:
          "An enlightening gathering where scholars share their knowledge and inspire students and the community.",
        bangla:
          "একটি জ্ঞানবর্ধক সমাবেশ যেখানে স্কলাররা তাদের জ্ঞান শেয়ার করেন এবং ছাত্র ও সম্প্রদায়কে অনুপ্রাণিত করেন।",
      },
      image: "/images/conference.jpg",
    },
    {
      title: {
        english: "Quran Recitation Competition",
        bangla: "কুরআন তেলাওয়াত প্রতিযোগিতা",
      },
      description: {
        english:
          "A competition where students showcase their beautiful recitation of the Holy Quran.",
        bangla:
          "একটি প্রতিযোগিতা যেখানে ছাত্ররা পবিত্র কুরআনের সুন্দর তেলাওয়াত উপস্থাপন করে।",
      },
      image: "/images/quran.jpg",
    },
    {
      title: {
        english: "Islamic Knowledge Quiz",
        bangla: "ইসলামিক জ্ঞান কুইজ",
      },
      description: {
        english:
          "A quiz competition to test students' knowledge about Islamic history, teachings, and values.",
        bangla:
          "একটি কুইজ প্রতিযোগিতা যেখানে ছাত্রদের ইসলামিক ইতিহাস, শিক্ষা ও মূল্যবোধ সম্পর্কে জ্ঞান পরীক্ষা করা হয়।",
      },
      image: "/images/quiz.jpg",
    },
    {
      title: { english: "Eid Celebration", bangla: "ঈদ উদযাপন" },
      description: {
        english:
          "A joyous celebration with prayers, feasts, and community gatherings to mark the blessed occasion of Eid.",
        bangla:
          "একটি আনন্দঘন উদযাপন যেখানে নামাজ, ভোজ এবং সম্প্রদায়ের একত্রিত হওয়ার মাধ্যমে ঈদের পবিত্র দিন পালন করা হয়।",
      },
      image: "/images/eid.jpg",
    },
    {
      title: {
        english: "Charity and Food Distribution",
        bangla: "দান ও খাদ্য বিতরণ",
      },
      description: {
        english:
          "A noble initiative where students and staff come together to help those in need by distributing food and essentials.",
        bangla:
          "একটি মহৎ উদ্যোগ যেখানে ছাত্র ও স্টাফ একত্রিত হয়ে দুস্থদের সাহায্য করতে খাদ্য ও প্রয়োজনীয় সামগ্রী বিতরণ করে।",
      },
      image: "/images/charity.jpg",
    },
    {
      title: {
        english: "Hadith Learning Session",
        bangla: "হাদীস শিক্ষার সেশন",
      },
      description: {
        english:
          "A session dedicated to learning and understanding the sayings and teachings of Prophet Muhammad (PBUH).",
        bangla:
          "একটি সেশন যেখানে রাসূল (সাঃ) এর হাদীস ও শিক্ষা সম্পর্কে শেখানো ও বোঝানো হয়।",
      },
      image: "/images/hadith.jpg",
    },
    {
      title: { english: "Annual Sports Day", bangla: "বার্ষিক ক্রীড়া দিবস" },
      description: {
        english:
          "A day filled with sports activities promoting physical fitness, teamwork, and discipline among students.",
        bangla:
          "একটি দিন যেখানে ক্রীড়া কার্যক্রমের মাধ্যমে ছাত্রদের শারীরিক ফিটনেস, দলগত কাজ ও শৃঙ্খলা উন্নত করা হয়।",
      },
      image: "/images/sports.jpg",
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
          appendDots: (dots) => (
            <div className="w-full flex items-center justify-center"            >
              <ul className="w-full flex items-center gap-x-2 justify-center" style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
             className={`bg-primary text-transparent w-3 h-3 rounded-full ${active === i ? "bg-primary" : "bg-primary/30"}`}
            >
              {i + 1}
            </div>
          ),
          beforeChange: (a, b) => {
            setActive(b);
          },
        },
      },
    ],
  };

  return (
    <div>
      <Container
        className={` pt-20 md:pt-24 lg:pt-32 flex flex-col gap-y-3 sm:gap-y-6  `}
      >
        <h2 className="heading text-primary text-lg sm:text-xl font-semibold text-center">
          {english ? "Programs & Events" : "মাদ্রাসার অনুষ্ঠানসমূহ"}
        </h2>
        <p
          className={`title text-center font-medium text-2xl sm:text-3xl md:text-4xl xl:text-5xl leading-tight sm:w-9/12 mx-auto ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          {english
            ? "Here are the various events and programs held at our madrasa."
            : "এখানে আমাদের মাদ্রাসায় অনুষ্ঠিত বিভিন্ন অনুষ্ঠান ও কার্যক্রম রয়েছে।"}
        </p>

        <div className="main gap-2 xl:gap-4 px-0 md:px-5">
          <div className="slider-container ">
            <Slider {...settings}>
              {events.map((item, index) => (
                <div
                  key={index}
                  className=" p-0 sm:p-2 xl:p-3 my-5 !aspect-[415/500] "
                >
                  <div
                    className={`card p-3 !pb-2 md:p-4 lg:p-6 h-full  rounded-md duration-300 flex flex-col gap-y-5 cursor-pointer border border-black   ${
                      darkMode
                        ? " bg-black hover:shadow-[0px_0px_70px_2px_rgba(255,255,255,0.1)]"
                        : "hover:shadow-[0px_0px_50px_0px_rgba(0,0,0,0.15)] border hover:border-transparent"
                    }`}
                  >
                    <div className="image w-full aspect-[368/267] relative bg-gray-500">
                      <Image
                        className="w-full h-full object-contain"
                        src={event}
                        alt="event img"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <div className="text flex flex-col gap-y-3 lg:gap-y-6 overflow-auto scrollbar-hide">
                      <p
                        className={`title md:text-xl font-semibold ${
                          darkMode ? "text-white" : "text-black"
                        }`}
                      >
                        {english ? item.title.english : item.title.bangla}
                      </p>
                      <h2
                        className={`description text-sm lg:text-base ${
                          darkMode ? "text-white/70" : "text-black/70"
                        }`}
                      >
                        {english
                          ? item.description.english
                          : item.description.bangla}
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Events;
