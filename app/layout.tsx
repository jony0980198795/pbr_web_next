import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "../components/headers/Header";
import Footer from "../components/footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "PBR",
  description: "PBR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Header/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
