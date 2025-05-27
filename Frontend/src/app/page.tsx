"use client";
import Link from "next/link";
import React from "react";

const products = [
  {
    id: 1,
    name: "Vivo Smartphone",
    category: "Smartphones",
    price: "৳40,000.00",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Apple iPhone 13 Pro",
    category: "Smartphones",
    price: "৳80,000.00",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
];

const page = () => {


  return (
    <div className="py-10 max-w-[1440px] mx-auto px-4">
      {/* Default 2 columns on smallest screens */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((product, index) => (
          <Link
            key={index}
            href="/product"
            className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 cursor-pointer hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-sm text-gray-600">Category: {product.category}</p>
              <p className="text-xl font-bold text-green-600">{product.price}</p>

              <button
                type="button"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
              >
                Add to Compare
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
