"use client";

import Image from "next/image";
import { Product } from "./data";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden cursor-pointer">
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">
          {product.description}
        </p>
        <p className="mt-2 text-blue-600 font-bold">{product.price}</p>
      </div>
    </div>
  );
}
