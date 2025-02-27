import React from "react";
import { useSelector } from "react-redux";
import Container from "./layer/Container";

const Teacher = () => {
  let darkMode = useSelector((state) => state.theme.darkMode);
  let english = useSelector((state) => state.language.english);

  let teachers = [
    {
      name: { english: "Teacher Name 1", bangla: "শিক্ষকের নাম 1" },
      designation: {
        english: "Teacher Designation 1",
        bangla: "শিক্ষকের পদবী 1",
      },
      info: {
        english:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sed do eius tempor incididunt ut labore et dolore magna aliqua. aliquip ex ea commodo consequat.",
        bangla:
          "লোরেম ইপসাম ডলার সিট অ্যামেট, কনসেকটেটুর adipiscing এলিট, সেড ডু eiusmod tempor incididunt ut labore et dolore magna aliqua।",
      },
    },
    {
      name: { english: "Teacher Name 2", bangla: "শিক্ষকের নাম 2" },
      designation: {
        english: "Teacher Designation 2",
        bangla: "শিক্ষকের পদবী 2",
      },
      info: {
        english:
          "Nunc pulvinar dolor quis ligula euismod, ac egestas elit suscipit. Aenean sed dolor lorem, eu scelerisque nisi.",
        bangla:
          "নুনক পুলভিনার ডলার কুইস লিগুলা ইউসমড, এক ইগেস্টাস এলিট সাসপিট।",
      },
    },
    {
      name: { english: "Teacher Name 3", bangla: "শিক্ষকের নাম 3" },
      designation: {
        english: "Teacher Designation 3",
        bangla: "শিক্ষকের পদবী 3",
      },
      info: {
        english:
          "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada.",
        bangla:
          "কুরাবিটুর নন নুলা সিট অ্যামেট নিসল টেম্পাস কনভাল্লিস কুইস এক লেকটাস।",
      },
    },
    {
      name: { english: "Teacher Name 4", bangla: "শিক্ষকের নাম 4" },
      designation: {
        english: "Teacher Designation 4",
        bangla: "শিক্ষকের পদবী 4",
      },
      info: {
        english:
          "Vivamus suscipit tortor eget felis porttitor volutpat. In hac habitasse platea dictumst. Integer posuere erat a ante venenatis dapibus.",
        bangla:
          "ভিভামুস সাসিপিট টরটর এগেট ফেলিস পোর্টিটর ভলপাট। ইন হ্যাক হ্যাবিট্যাস প্লেটিয়া ডিকটুমস্ট।",
      },
    },
  ];

  return (
    <div>
      <Container
        className={` pt-20 md:pt-24 lg:pt-32 flex-col gap-y-3 sm:gap-y-20 flex `}
      >
        <div className="head flex flex-col gap-y-5">
          <p className="title text-xl text-primary text-center">
            {english ? "Teachers" : "শিক্ষক"}
          </p>
          <h2
            className={`header text-6xl text-center ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            {english ? "Meet Our Teachers" : " আমাদের শিক্ষকদের পরিচয়"}
          </h2>
        </div>
        <div className="main flex flex-col sm:flex-row gap-x-6">
          <div className="image sm:w-2/5 aspect-[512/595] border"></div>
          <div className="more sm:w-3/5 flex flex-col gap-y-6 justify-between ">
            <div className="top  flex flex-col gap-y-3 justify-between">
              <div
                className={`name text-3xl lg:text-6xl ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                {english ? "Teacher Name" : "শিক্ষকের নাম"}
              </div>
              <div className="role lg:text-4xl text-primary">
                {english ? "Teacher Role" : "শিক্ষকের পদ"}
              </div>
              <div
                className={`info lg:text-lg ${
                  darkMode ? "text-white/70" : " text-black/70"
                }`}
              >
                {english
                  ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. aliquip ex ea commodo consequat."
                  : " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. aliquip ex ea commodo consequat."}
              </div>
            </div>
            <div className="h-0.5 bg-primary"></div>
            <div className="bottom grid grid-cols-3 gap-x-6">
              <div className="border aspect-[512/595]"></div>
              <div className="border aspect-[512/595]"></div>
              <div className="border aspect-[512/595]"></div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Teacher;
