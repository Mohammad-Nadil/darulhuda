"use client";
import ReduxProvider from "../provider";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <ReduxProvider>
      <html lang="en">
        <head>
          <title>Huda Enterprise</title>
          <link rel="icon" type="jpeg" href="../assets/logo.jpg" />
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
        </head>
        <body className={`scroll-smooth overflow-x-hidden antialiased  font-bangla`}>
          {children}
        </body>
      </html>
    </ReduxProvider>
  );
}
