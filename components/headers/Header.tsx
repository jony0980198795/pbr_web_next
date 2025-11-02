// components/Header.tsx
"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // ตรวจจับทิศทางการ scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // ถ้าเลื่อนลงให้หาย ถ้าเลื่อนขึ้นให้กลับมา
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.header
          key="header"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6
                               bg-gray-900/90 backdrop-blur-md shadow-md transition-all duration-500"
        >
          {/* 🔹 Logo */}
          <Link href="/" className="text-2xl">
            <Image
              src="/logo/new_logo.png"
              alt="BPR Group Logo"
              width={180}
              height={80}
            />
          </Link>

          {/* 🔹 Navigation Menu */}
          <nav className="hidden md:flex gap-6 text-white font-medium items-center">
            <Link href="/" className="hover:text-blue-400 transition">Home</Link>
            <Link href="/products" className="hover:text-blue-400 transition">Products</Link>
            <Link href="/innovation" className="hover:text-blue-400 transition">Innovation</Link>
            <Link href="/news" className="hover:text-blue-400 transition">News</Link>
            <Link href="/about_us" className="hover:text-blue-400 transition">About Us</Link>
            <Link href="/contact" className="hover:text-blue-400 transition">Contact Us</Link>
            <p className="cursor-pointer hover:text-blue-400 transition">TH/EN</p>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
