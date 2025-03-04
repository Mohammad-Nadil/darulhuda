"use client";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import { toggleTheme } from "@/features/theme/themeSlice";
import { setEnglish } from "../features/language/languageSlice";
import { useDispatch, useSelector } from "react-redux";
import About from "@/components/About";
import Extra from "@/components/Extra";
import Activities from "@/components/Activities";
import Events from "@/components/Events";
import Announcements from "@/components/Announcements";
import Blog from "@/components/Blog";
import Teacher from "@/components/Teacher";
import Footer from "@/components/Footer";

export default function Home() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const english = useSelector((state) => state.language.english);
  const dispatch = useDispatch();

  return (
    <div
      className={`min-h-screen w-full ${darkMode ? "bg-darkBg" : "bg-white/0"}`}
    >
      <Navbar />
      <Banner />
      <About/>
      <Extra/>
      <Activities/>
      <Announcements/>
      <Events/>
      <Blog/>
      <Teacher/>
      <Footer/>
    </div>
  );
}
