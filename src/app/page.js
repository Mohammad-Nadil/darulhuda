"use client";
import Banner from "@/components/Banner";
import { useSelector } from "react-redux";
import About from "@/components/About";
import Extra from "@/components/Extra";
import Activities from "@/components/Activities";
import Events from "@/components/Events";
import Announcements from "@/components/Announcements";
import Blog from "@/components/Blog";
import Teacher from "@/components/Teacher";

export default function Home() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const english = useSelector((state) => state.language.english);

  return (
    <div
      className={`scroll-smooth  antialiased font-bangla min-h-screen w-full ${darkMode ? "bg-darkBg" : "bg-white/0"}`}
    >
      <Banner />
      <About/>
      <Extra/>
      <Activities/>
      <Announcements/>
      <Events/>
      <Blog/>
      <Teacher/>
    </div>
  );
}
