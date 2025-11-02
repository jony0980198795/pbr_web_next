"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ProductsSection() {
  const products = [
    {
      src: "/products/black.jpg",
      title: "GRAPHENE OXIDE POWDER",
      details:
        "High-purity Graphene Oxide Powder engineered for exceptional dispersion and surface activity. Ideal for advanced applications in composites, coatings, energy storage, and research development. Ensures consistent quality, scalability, and superior performance.",
      link: "/products",
    },
    {
      src: "/products/braw.jpg",
      title: "REDUCED GRAPHENE OXIDE POWDER",
      details:
        "With high conductivity and enhanced stability. Engineered for advanced applications in electronics, energy storage, sensors, and high-performance composites, ensuring consistent quality and superior functionality",
      link: "/products",
    },
    {
      src: "/products/bottle_brow.jpg",
      title: "GRAPHENE OXIDE IN SUSPENSION",
      details:
        "High-purity dispersion ready for advanced applications in coatings, composites, energy storage, and research. Ensures uniform performance and superior processability",
      link: "/products",
    },
    {
      src: "/products/bottle_black.jpg",
      title: "REDUCED GRAPHENE OXIDE IN SUSPENSION",
      details:
        "Highly conductive, stable dispersion engineered for advanced applications in electronics, energy storage, sensors, and high-performance composites. Ensures consistent quality and superior processability",
      link: "/products",
    },
  ];

  return (
    <section className="w-full max-w-6xl py-4 px-4 mx-auto">
      <div className="py-2 px-4">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white flex rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Image Section */}
              <div className="w-1/2 bg-gray-50 flex items-center justify-center p-4">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="rounded-lg w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content Section */}
              <div className="w-1/2 p-4 flex flex-col justify-between">
                <div>
                  <p className="font-bold text-lg text-gray-800 mb-2">{item.title}</p>
                  <p className="text-gray-600 text-sm mb-4">{item.details}</p>
                </div>

                <button className="px-6 py-2 mt-auto rounded-lg bg-black text-white text-sm hover:bg-gray-700 transition">
                  <Link href={item.link}>Read More →</Link>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
