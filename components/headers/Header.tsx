"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShowHeader(currentScroll < lastScroll || currentScroll < 80);
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  // ✅ Disable scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      <AnimatePresence>
        {showHeader && (
          <motion.header
            key="header"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-50 flex items-center justify-between 
                       px-4 sm:px-6 lg:px-10 py-2 bg-gray-900/90 backdrop-blur-md shadow-md"
          >
            {/* ✅ Logo Auto Scale */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo/new_logo.png"
                alt="PBRA Logo"
                width={140}
                height={60}
                className="w-28 sm:w-36 md:w-40"
                priority
              />
            </Link>

            {/* ✅ Desktop Menu */}
            <nav className="hidden lg:flex gap-8 text-white font-medium items-center">
              {[
                { href: "/", label: "Home" },
                { href: "/products", label: "Products" },
                { href: "/innovation", label: "Innovation" },
                { href: "/news", label: "News" },
                { href: "/about_us", label: "About Us" },
                { href: "/contact", label: "Contact Us" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-teal-300 transition">
                  {item.label}
                </Link>
              ))}
              <span className="cursor-pointer px-2 py-1 border rounded hover:bg-white/20">EN</span>
            </nav>

            {/* ✅ Mobile Menu Toggle */}
            <button
              className="lg:hidden text-white text-2xl"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </motion.header>
        )}
      </AnimatePresence>

      {/* ✅ Mobile Full-Screen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-full h-full bg-gray-900 text-white 
                       flex flex-col items-center justify-center gap-8 text-xl font-medium
                       z-50 lg:hidden"
          >
            {[
              { href: "/", label: "Home" },
              { href: "/products", label: "Products" },
              { href: "/innovation", label: "Innovation" },
              { href: "/news", label: "News" },
              { href: "/about_us", label: "About Us" },
              { href: "/contact", label: "Contact Us" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-teal-300 transition"
              >
                {item.label}
              </Link>
            ))}

            <span className="cursor-pointer text-lg px-4 py-2 border rounded hover:bg-white/20">
              EN
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
