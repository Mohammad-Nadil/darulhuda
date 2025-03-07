"use client";
import Container from "@/components/layer/Container";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  let darkMode = useSelector((state) => state.theme.darkMode);
  let english = useSelector((state) => state.language.english);
  return (
    <div className="mt-14">
      <div>
        <Container
          className={` flex flex-col-reverse gap-y-10 xl:flex-row gap-x-6 items-center py-6 md:py-12 `}
        >
          {/* <div className="gallery w-full xl:w-1/2  gap-2 gap-y-5 grid grid-cols-2 grid-rows-2 xl:!aspect-square ">
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
        </div> */}
          <div className="main w-full flex flex-col gap-y-3 md:gap-y-3.5">
            <p className="text-2xl text-primary !m-0">
              {english ? "About" : " পরিচিতি "}
            </p>
            <p
              className={` text-3xl md:text-4xl lg:text-5xl xl:text-6xl  font-semibold !m-0 ${
                darkMode ? "text-white " : "text-black"
              } ${english ? "md:text-4xl" : "md:text-5xl"}`}
            >
              {english
                ? "History of Madrasa-e-Darul Huda"
                : "মাদ্রাসা-ই-দারুল হুদার ইতিহাস"}
            </p>
            <h2
              className={` xl:leading-normal 2xl:leading-[1.75] !m-0 text-xl md:2xl 2xl:text-3xl ${
                darkMode ? "text-white/70 " : "text-black/70"
              } `}
            >
              {english
                ? `Madrasa-e-Darul Huda was established with the mission to provide quality Islamic education to students, enabling them to gain knowledge that will help them in both their spiritual and worldly lives. Founded in the early years of the 21st century, the madrasa has grown to become one of the most respected and recognized institutions in the region. Over the years, it has upheld a strong commitment to academic excellence, moral values, and discipline, shaping individuals who contribute positively to society.

The madrasa’s core focus is on the teachings of the Holy Quran, Hadith, and other Islamic sciences. Students engage in in-depth study of Islamic jurisprudence (Fiqh), Arabic language, and Islamic history, ensuring a well-rounded religious education. In addition to religious teachings, the madrasa also recognizes the importance of modern subjects such as mathematics, science, and the English language. By integrating contemporary education with traditional Islamic studies, the institution aims to produce individuals who are knowledgeable in both fields, allowing them to excel in various professional and social capacities.

One of the distinguishing features of Madrasa-e-Darul Huda is its emphasis on character development and discipline. The madrasa believes that education is not just about acquiring knowledge but also about nurturing virtues such as honesty, compassion, and responsibility. Through a structured curriculum and mentorship from experienced scholars, students develop strong ethical foundations that guide them throughout their lives.

Over the years, Madrasa-e-Darul Huda has welcomed students from diverse backgrounds, fostering an inclusive environment where individuals from different communities come together to learn and grow. Many of its graduates go on to become scholars, educators, community leaders, and professionals who serve in various sectors while upholding the principles of Islam.

As the world continues to evolve, so does Madrasa-e-Darul Huda. The institution constantly seeks to expand its reach, offering more educational opportunities to students while preserving its traditional values. Through dedicated teachers, a strong academic framework, and a commitment to holistic education, the madrasa remains steadfast in its mission: to nurture individuals who are well-equipped to contribute positively to both their communities and the world at large.

`
                : `মাদ্রাসা-ই-দারুল হুদা প্রতিষ্ঠিত হয়েছিল একটি মহৎ উদ্দেশ্য নিয়ে, যা হল মানসম্পন্ন ইসলামিক শিক্ষা প্রদান করা, যাতে ছাত্ররা তাদের আধ্যাত্মিক ও দুনিয়াবি জীবনে সমৃদ্ধ হতে পারে। ২১ শতকের শুরুর দিকে প্রতিষ্ঠিত হওয়া এই মাদ্রাসাটি এখন এলাকার অন্যতম শ্রদ্ধেয় ও প্রশংসিত প্রতিষ্ঠান হিসেবে স্বীকৃত। বছরের পর বছর এটি শিক্ষার মান, নৈতিকতা এবং শৃঙ্খলার প্রতি প্রতিশ্রুতিবদ্ধ থেকে শিক্ষার্থীদের গড়ে তুলছে, যারা সমাজে ইতিবাচক অবদান রাখতে সক্ষম।

মাদ্রাসার মূল শিক্ষাক্রমের কেন্দ্রবিন্দু হল পবিত্র কোরআন, হাদীস, এবং অন্যান্য ইসলামিক বিজ্ঞান। ছাত্ররা গভীরভাবে ইসলামি ফিকহ, আরবি ভাষা, এবং ইসলামি ইতিহাস অধ্যয়ন করে, যাতে তারা ধর্মীয় শিক্ষার দৃঢ় ভিত্তি তৈরি করতে পারে। তবে মাদ্রাসা শুধুমাত্র ধর্মীয় শিক্ষা প্রদানেই সীমাবদ্ধ নয়; এটি আধুনিক শিক্ষাকেও অত্যন্ত গুরুত্ব দিয়ে থাকে। গণিত, বিজ্ঞান, এবং ইংরেজি ভাষার ওপর বিশেষ গুরুত্ব দিয়ে, মাদ্রাসাটি এমন শিক্ষার্থীদের গড়ে তোলে যারা ধর্মীয় ও আধুনিক জ্ঞানে সমানভাবে পারদর্শী, এবং ভবিষ্যতে বিভিন্ন পেশাগত ও সামাজিক ক্ষেত্রে গুরুত্বপূর্ণ ভূমিকা পালন করতে পারে।

মাদ্রাসা-ই-দারুল হুদার অন্যতম বৈশিষ্ট্য হল চরিত্র গঠন ও শৃঙ্খলার প্রতি বিশেষ গুরুত্ব প্রদান। এই প্রতিষ্ঠান বিশ্বাস করে যে শিক্ষা শুধুমাত্র বইয়ের জ্ঞান অর্জনের মধ্যে সীমাবদ্ধ নয়; বরং এটি নৈতিকতা, সততা, সহানুভূতি, এবং দায়িত্ববোধ শেখানোর একটি গুরুত্বপূর্ণ মাধ্যম। অভিজ্ঞ ও যোগ্য শিক্ষকদের তত্ত্বাবধানে শিক্ষার্থীরা শুধুমাত্র জ্ঞানের দিক থেকেই নয়, বরং চারিত্রিক দৃঢ়তায়ও নিজেদের উন্নত করে তোলে।

বিভিন্ন সম্প্রদায়ের ছাত্ররা এখানে একত্রিত হয়ে শিক্ষা গ্রহণ করে, যা একটি সৌহার্দ্যময় ও অন্তর্ভুক্তিমূলক পরিবেশ তৈরি করে। বহু শিক্ষার্থী এখান থেকে জ্ঞান অর্জন করে আলেম, শিক্ষক, কমিউনিটি লিডার, এবং অন্যান্য পেশাদার হিসেবে নিজেদের প্রতিষ্ঠিত করেছে। তারা ইসলামি মূল্যবোধ বজায় রেখে সমাজে গুরুত্বপূর্ণ ভূমিকা পালন করে চলেছে।

সময়ের সঙ্গে তাল মিলিয়ে মাদ্রাসা-ই-দারুল হুদা তার শিক্ষার পরিধি সম্প্রসারিত করছে, যাতে আরও বেশি শিক্ষার্থী এখানে উন্নত শিক্ষা লাভের সুযোগ পায়। এটি শিক্ষার মানোন্নয়নের জন্য নিত্যনতুন উদ্যোগ গ্রহণ করছে এবং যুগের সাথে সামঞ্জস্য রেখে শিক্ষাদানের পদ্ধতি আরও উন্নত করছে। দক্ষ শিক্ষক, শক্তিশালী শিক্ষাক্রম, এবং আদর্শ শিক্ষা পরিবেশের মাধ্যমে মাদ্রাসাটি তার মূল লক্ষ্য বজায় রেখেছে: এমন শিক্ষার্থী তৈরি করা যারা ধর্মীয় ও আধুনিক জ্ঞানে সুদক্ষ হয়ে সমাজ ও বিশ্বের কল্যাণে অবদান রাখতে পারে।



`}
            </h2>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default page;
