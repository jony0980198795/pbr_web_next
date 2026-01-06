"use client";

import Image from "next/image";
import { products } from "./data";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

//const [selectedProduct, setSelectedProduct] = useState<any>(null);

export default function Products() {

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
            <div className="w-230 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <motion.h2
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        key={product.id}
                    >
                        <Link href={""}>
                            <div
                                className="bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-shadow duration-300"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-60 object-cover rounded-xl"
                                />
                                <p className="mt-4">{product.name}</p>
                                <p className="text-sm text-gray-500 mt-2 leading-relaxed pb-4">
                                    {product.description.slice(0, 160)}
                                </p>
                            </div>
                        </Link>
                    </motion.h2>
                ))}
            </div>
        </main>
    );
}
