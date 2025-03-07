"use client";
import { useSelector } from "react-redux";
import ReduxProvider from "../provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <>
      <ReduxProvider>
        <ThemeWrapper>{children}</ThemeWrapper>
      </ReduxProvider>
    </>
  );
}

function ThemeWrapper({ children }) {
  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    <html lang="en" className="h-full">
      <head>
        <title>Huda Enterprise</title>
        <link rel="icon" type="image/jpeg" href="../assets/logo.jpg" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
      </head>
      <body
        className={`scroll-smooth overflow-x-hidden antialiased font-bangla min-h-screen w-full  flex flex-col ${
          darkMode ? "bg-darkBg" : "bg-white/0"
        }`}
      >
        <Navbar />
        <main className="flex-grow ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
