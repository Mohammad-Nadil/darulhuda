import React, { useState } from "react";
import { useSelector } from "react-redux";
import Container from "./layer/Container";
import Slider from "react-slick";

const Blog = () => {
  let darkMode = useSelector((state) => state.theme.darkMode);
  let english = useSelector((state) => state.language.english);
  let [active, setActive] = useState(0);

  let items = [
    {
      title: {
        english: "Importance of the Pillars of Islam",
        bangla: "ইসলামের স্তম্ভগুলোর গুরুত্ব",
      },
      description: {
        english:
          "The five pillars of Islam are the foundation of a Muslim’s faith and practice. They guide every aspect of life, from prayer to charity.",
        bangla:
          "ইসলামের পাঁচটি স্তম্ভ মুসলমানদের বিশ্বাস ও আচার-আচরণের মূলভিত্তি। এগুলো নামাজ থেকে শুরু করে দান-সদকার প্রতিটি ক্ষেত্রে দিকনির্দেশনা দেয়।",
      },
    },
    {
      title: {
        english: "Islamic Charity: Zakat",
        bangla: "ইসলামিক দান: যাকাত",
      },
      description: {
        english:
          "Zakat is one of the five pillars of Islam, a mandatory form of charity aimed at alleviating poverty and helping the less fortunate.",
        bangla:
          "যাকাত ইসলামের পাঁচটি স্তম্ভের একটি, এটি একটি বাধ্যতামূলক দান যা দারিদ্র্য কমাতে এবং দুর্বলদের সাহায্য করতে লক্ষ্য রাখে।",
      },
    },
    {
      title: { english: "The Importance of Prayer", bangla: "নামাজের গুরুত্ব" },
      description: {
        english:
          "Salah, or prayer, is the second pillar of Islam, forming a direct link between the Muslim and Allah. It is performed five times a day and is essential for spiritual development.",
        bangla:
          "সালাহ, বা নামাজ, ইসলামের দ্বিতীয় স্তম্ভ, যা মুসলমান এবং আল্লাহর মধ্যে সরাসরি সংযোগ স্থাপন করে। এটি দিনে পাঁচবার পড়তে হয় এবং আত্মিক উন্নতির জন্য অপরিহার্য।",
      },
    },
  ];

  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    appendDots: (dots) => (
      <div className="w-full flex items-center justify-center">
        <ul
          className="w-full flex items-center gap-x-2 justify-center"
          style={{ margin: "0px" }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`bg-primary text-transparent w-3 h-3 rounded-full ${
          active === i ? "bg-primary" : "bg-primary/30"
        }`}
      >
        {i + 1}
      </div>
    ),
    beforeChange: (a, b) => {
      setActive(b);
    },
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
        },
      },
    ],
  };
  return (
    <div>
      <Container
        className={` pt-20 md:pt-24 lg:pt-32 flex flex-col gap-y-3 sm:gap-y-6  `}
      >
        <div className="heading text-[27px] font-semibold lg:text-6xl flex gap-x-2 md:gap-x-4">
          <h1 className={` ${darkMode ? "text-white" : "text-black"}`}>
            {english ? "Islamic Advice & " : "ইসলামিক উপদেশ ও "}
          </h1>
          <p className="text-primary">{english ? "Wisdom" : "জ্ঞান"}</p>
        </div>
        <div className="main ">
          <Slider {...settings}>
            {items.map((item, index) => (
              <div key={index} className="p-2">
                <div
                  className={`card p-3 md:p-6 rounded flex border flex-col justify-between gap-y-3 duration-500 !aspect-[5/3.75] h-full ${
                    darkMode
                      ? "bg-black text-white border-transparent hover:shadow-[0px_0px_70px_2px_rgba(255,255,255,0.1)]"
                      : "bg-white text-black hover:shadow-[0px_0px_50px_0px_rgba(0,0,0,0.15)] hover:border-transparent"
                  }`}
                >
                  <div className="text flex !h-3/4 flex-col gap-y-3 md:gap-y-5 overflow-y-hidden">
                    <p className="title text-2xl md:text-3xl font-semibold">
                      {english ? item.title.english : item.title.bangla}
                    </p>
                    <h2 className="description  md:text-lg text-opacity-70">
                      {english
                        ? item.description.english
                        : item.description.bangla}
                    </h2>
                  </div>
                  <div className="btn  !h-1/4">
                    <button
                      className={`md:mt-4 px-4 py-1.5 md:py-2 rounded duration-300 text-black bg-primary hover:bg-opacity-70 hover:text-white `}
                    >
                      {english ? "Read More" : "আরও পড়ুন"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
