"use client";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import { toggleTheme } from "@/features/theme/themeSlice";
import { setEnglish } from "../features/language/languageSlice";
import { useDispatch, useSelector } from "react-redux";
import About from "@/components/About";
import Extra from "@/components/Extra";
import Activities from "@/components/Activities";

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

      <button
        onClick={() => dispatch(toggleTheme())}
        className={`p-2 rounded border ${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <button
        onClick={() => dispatch(setEnglish())}
        className={`p-2 border rounded ${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        {english ? "Switch to Bengali" : "Switch to English"}
      </button>
    </div>
  );
}
