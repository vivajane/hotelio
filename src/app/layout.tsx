"use client"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "./components/Header";
import Context from "./components/Context";
import Footer from "./components/Foooter";





const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    Aos.init({});

  },[])
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Context>
          <Header />
        {children}
        <Footer/>
        </Context>
      </body>
    </html>
  );
}
