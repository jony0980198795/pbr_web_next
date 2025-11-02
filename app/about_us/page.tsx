"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // ถ้าใช้ Next.js
import { FaHistory, FaLightbulb, FaLeaf, FaGlobe, FaCheckCircle } from "react-icons/fa";

const AboutUs = () => {
    return (
        <main className="min-h-screen w-full bg-gradient-to-b from-white via-gray-50 to-gray-100">
            {/* Hero Section */}
            <section className="relative w-full h-[600px] overflow-hidden mb-4">
                {/* 🔹 รูปพื้นหลัง */}
                <Image
                    src="/about/company.jpg"
                    alt="PBR Automation Company"
                    fill
                    className="object-cover"
                    priority
                />

                {/* 🔹 Overlay gradient เพื่อให้ข้อความอ่านง่าย */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* 🔹 ข้อความ Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-xl mb-4"
                    >
                        About{" "}
                        <span>
                            PBRGROUP
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-gray-100 md:text-lg leading-relaxed max-w-3xl"
                    >
                        The company <b>PBR Automation Co., Ltd.</b> specializes in the design and manufacturing
                        of machinery, as well as the development of innovative nanotechnology materials,
                        driving Thailand’s industry toward <b>Industry 4.0</b> with quality, standards,
                        and world-class expertise.
                    </motion.p>
                </div>
            </section>
            {/* 🔹 Company Overview Section */}
            <section className="max-w-5xl mx-auto text-gray-800 space-y-8 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-white/80 backdrop-blur-md p-4 shadow-lg"
                >
                    <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-blue-400 pl-4 mb-4">
                        🏢 Company Overview
                    </h2>
                    <p className="leading-relaxed text-gray-700">
                        PBR Automation Co., Ltd. was established in <b>2023</b> to serve
                        industrial sectors with innovative solutions in <b>automation systems</b>,
                        <b>machine design</b>, and <b>engineering consultation</b>. The company also
                        engages in the <b>import and export of spare parts and mechanical equipment</b>.
                    </p>
                </motion.div>

                {/* R&D Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/80 backdrop-blur-md p-10 shadow-lg"
                >
                    <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-teal-400 pl-4 mb-4">
                        🔬 Research & Development
                    </h2>
                    <p className="leading-relaxed text-gray-700 mb-3">
                        Our research focuses on <b>Graphene-based materials</b> including Graphene Oxide (GO)
                        and Reduced Graphene Oxide (rGO). This effort is led by{" "}
                        <b>Professor Dr. Pichatt Palanugoo</b>, a leading expert in industrial
                        nanotechnology.
                    </p>
                    <p className="leading-relaxed text-gray-700">
                        In collaboration with <b>Phisut Logistics Public Co., Ltd.</b> and{" "}
                        <b>Thai Mechatronics Co., Ltd.</b>, PBR Automation develops
                        large-scale automated production systems and supports
                        advanced industrial innovation in Thailand.
                    </p>
                </motion.div>

                {/* Vision Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white/80 mb-6 backdrop-blur-md p-10 shadow-lg"
                >
                    <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-indigo-400 pl-4 mb-4">
                        🌱 Vision & Mission
                    </h2>
                    <p className="leading-relaxed text-gray-700 mb-3">
                        We aim to be a <b>leading producer of high-quality Graphene materials</b>
                        that are cost-effective, environmentally safe, and industrially scalable.
                    </p>
                    <p className="leading-relaxed text-gray-700">
                        Our mission is to create sustainable innovations that support
                        <b> Thailand’s transition to Industry 4.0</b> while promoting
                        eco-friendly manufacturing and circular economy principles.
                    </p>
                </motion.div>
            </section>
        </main>
    );
};

export default AboutUs;