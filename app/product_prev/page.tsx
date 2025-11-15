"use client";

import Image from "next/image";
import { products } from "./data";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Products() {
    const [selectedProduct, setSelectedProduct] = useState<any>(null);

    return (
        <main className="flex flex-col items-center bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-28 pb-20">
            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
                Our Products
            </motion.h2>

            <p className="text-gray-600 max-w-2xl text-center mb-14 px-4 text-lg">
                Advanced Graphene & Nanomaterial Solutions engineered to elevate performance, strength, durability, and sustainability.
            </p>

            {/* Products Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 w-full max-w-4xl">
                {products.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-white/90 backdrop-blur-xl border border-gray-200 
    rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 
    transition-all duration-300 overflow-hidden flex flex-col"
                    >
                        {/* Image */}
                        <div className="relative w-full aspect-square group">
                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover rounded-t-2xl transition duration-500 group-hover:scale-105 group-hover:brightness-90"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                                {item.description}
                            </p>

                            {/* ปุ่ม */}
                            <button
                                onClick={() => setSelectedProduct(item)}
                                className="mt-auto w-full py-2.5 rounded-xl bg-gradient-to-r 
        from-gray-900 to-gray-700 text-white font-semibold text-sm 
        shadow-md hover:opacity-90 hover:shadow-lg transition"
                            >
                                View Details
                            </button>
                        </div>
                    </motion.div>

                ))}
            </section>

            {/* Popup Modal */}
            {selectedProduct && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 mt-[280px] md:mt-0">
                            {/* Image Section */}
                            <ProductModal selectedProduct={selectedProduct} />

                            {/* Details Section */}
                            <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
                                <div className="flex justify-end">
                                    <button
                                        onClick={() => setSelectedProduct(null)}
                                        className="hidden sm:flex w-5 h-5 items-center justify-center rounded-full
    bg-white/70 backdrop-blur-md shadow-lg border border-gray-200
    hover:bg-white hover:shadow-xl hover:scale-110 transition-all duration-200"
                                    >
                                        <span className="text-gray-800 text-xl font-bold">×</span>
                                    </button>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        {selectedProduct.name}
                                    </h3>
                                    <p className="text-gray-600 mt-2">{selectedProduct.description}</p>
                                </div>
                                <div className="mt-6 space-y-4">

                                    {/* Highlight */}
                                    <section>
                                        <h4 className="text-lg font-semibold text-gray-900">Key Highlight</h4>
                                        <p className="text-gray-700">{selectedProduct.details.highlight}</p>
                                    </section>

                                    {/* Packaging Sizes */}
                                    <section>
                                        <h4 className="text-lg font-semibold text-gray-900">Available Packaging</h4>
                                        <div className="flex flex-wrap gap-2 mt-1">
                                            {selectedProduct.details.packagingSize.map((size: any, i: number) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 bg-gray-200 text-gray-800 rounded-lg text-sm"
                                                >
                                                    {size}
                                                </span>
                                            ))}
                                        </div>
                                    </section>

                                    {/* Properties */}
                                    <section>
                                        <h4 className="text-lg font-semibold text-gray-900">Properties</h4>
                                        <ul className="text-gray-700 text-sm grid grid-cols-1 gap-y-1">
                                            {Object.entries(selectedProduct.details.properties).map(([key, value]) => (
                                                <li key={key} className="flex justify-between">
                                                    <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                                                    <span>{value as string}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </section>

                                    {/* Elemental Analysis */}
                                    <section>
                                        <h4 className="text-lg font-semibold text-gray-900">Elemental Analysis</h4>
                                        <ul className="text-gray-700 text-sm grid grid-cols-1 gap-y-1">
                                            {Object.entries(selectedProduct.details.elementalAnalysis).map(([key, value]) => (
                                                <li key={key} className="flex justify-between">
                                                    <span className="font-medium capitalize">{key}:</span>
                                                    <span>{value as string}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </section>

                                    {/* Specifications */}
                                    <section>
                                        <h4 className="text-lg font-semibold text-gray-900">Specifications</h4>
                                        <ul className="text-gray-700 text-sm grid grid-cols-1 gap-y-1">
                                            {Object.entries(selectedProduct.details.specifications).map(([key, value]) => (
                                                <li key={key} className="flex justify-between">
                                                    <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                                                    <span>{value as string}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </section>

                                    {/* Applications */}
                                    <section className="mt-4">
                                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Applications</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProduct.details.applications.map((app: string, i: number) => (
                                                <span
                                                    key={i}
                                                    className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-medium shadow-sm"
                                                >
                                                    {app}
                                                </span>
                                            ))}
                                        </div>
                                    </section>
                                </div>

                                {/* Buttons */}
                                <div className="flex justify-end gap-4 mt-8">
                                    <button
                                        onClick={() => setSelectedProduct(null)}
                                        className="px-4 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-100 transition"
                                    >
                                        Close
                                    </button>
                                    <a
                                        href="mailto:pbrgroup2025@gmail.com"
                                        target="_blank"
                                        className="px-6 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition shadow-lg"
                                    >
                                        Order Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </main>
    );
}

function ProductModal({ selectedProduct }: any) {
    const [mainImage, setMainImage] = useState<string>(selectedProduct.image);

    return (
        <div>
            {/* Image Section */}
            <div>
                <div className="bg-gray-100 flex items-center justify-center p-4">
                    <Image
                        src={mainImage}
                        alt={selectedProduct.name}
                        width={600}
                        height={600}
                        className="rounded-xl w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>

                <div className="flex flex-row">
                    {selectedProduct.graph_img.map((img: string, index: number) => (
                        <div
                            key={index}
                            className="cursor-pointer"
                            onMouseEnter={() => setMainImage(img)}  // เปลี่ยนภาพเมื่อ hover
                            onMouseLeave={() => setMainImage(selectedProduct.image)} // กลับไปภาพเริ่มต้น
                        >
                            <Image
                                src={img}
                                alt={selectedProduct.name}
                                width={160}
                                height={80}
                                className="rounded-2xl"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
