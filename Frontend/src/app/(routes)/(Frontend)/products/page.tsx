"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const Page = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/products.json");
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const data: Product[] = await res.json();
        setProducts(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    };

    fetchProducts();
  }, []);

  if (error)
    return (
      <div className="text-center py-10 text-red-600">Error: {error}</div>
    );

  return (
    <div className="py-10 max-w-[1440px] mx-auto px-6">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col"
          >
            <Link
              href={`/products/${slugify(product.name)}`}
              className="relative block overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </Link>
            <div className="p-5 flex flex-col flex-grow">
              <Link
                href={`/products/${slugify(product.name)}`}
                className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors mb-2 truncate"
                title={product.name}
              >
                {product.name}
              </Link>
              <p className="text-xl font-bold text-green-600 mb-4">{product.price}</p>
              <button
                type="button"
                className="mt-auto bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition"
              >
                Add to Compare
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
