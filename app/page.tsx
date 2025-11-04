'use client'

import Image from "next/image";
import { FaHistory, FaLightbulb, FaLeaf, FaGlobe } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { title } from "process";
import { details } from "framer-motion/client";
import HeroSlide from "@/components/home/page";
import Link from "next/link";
import OurTeam from "@/components/ourteam/page";
import CustomizedSection from "@/components/customize/customize";
import ProductSection from "@/components/products/our-products";
import GrapheneInnovation from "@/components/innovation/page";
import SpecificationSection from "@/components/specification/page";

export default function Home() {
  const ref = useRef(null);
  const ref_customize = useRef(null);
  const ref_graphen_innovation = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-b from-white to-gray-100">
      {/* Hero Section */}
      <section className="w-full h-screen relative">
        {/* Video Background */}
        <video
          src="/present/vib_prev.mp4" // public folder
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Overlay (optional) */}

        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-6xl font-bold mb-4"
          >
            PBR Company Limited
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white text-lg md:text-4xl max-w-4xl"
          >
            Redefining Performance with Graphene
          </motion.p>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white text-2xl md:text-xl max-w-xl mt-4"
          >
            Our graphene materials enhance tire strength, durability, and energy efficiency
            while reducing rolling resistance and environmental impact —
            enabling a new generation of high-performance, eco-friendly tires
          </motion.p>
        </div>
      </section>
      {/* Our company */}
      <section className="w-full max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Story</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <FaHistory className="text-4xl text-black-600 mb-4" />, title: "Our History", detail: "Founded in 2023 by industry experts." },
            { icon: <FaLightbulb className="text-4xl text-black-500 mb-4" />, title: "Innovation", detail: "Leading graphene and material science." },
            { icon: <FaLeaf className="text-4xl text-black-500 mb-4" />, title: "Sustainability", detail: "Eco-friendly and cost-effective solutions." },
            { icon: <FaGlobe className="text-4xl text-black-500 mb-4" />, title: "Global Reach", detail: "Serving domestic and international markets." },
          ].map((item, index) => (
            <motion.div
              key={index}
              ref={ref}
              animate={{
                y: isInView ? 0 : -50,
                opacity: isInView ? 1 : 0,
              }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              {item.icon}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Preview Section */}
      <ProductSection />

      {/* Specification */}
      <SpecificationSection/>

      {/* Customize */}
      <CustomizedSection />

      {/* Image slide */}
      <HeroSlide />

      {/* Preview Section */}
      <GrapheneInnovation/>

      {/* Preview Section */}
      <OurTeam/>
    </main>
  );
}
