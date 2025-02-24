"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import banner from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";

const Banner = () => {
  let banners = [
    { image: banner },
    { image: banner2 },
    { image: banner },
    { image: banner2 },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <>
      <div className="w-full ">
        <div className="slider-container ">
          <Slider {...settings}>
            {banners.map((item, index) => (
              <div className=" aspect-[16/12] sm:aspect-video  " key={index}>
                <Image
                  className=" h-full w-full object-cover"
                  src={item.image}
                  alt={item.image}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Banner;
