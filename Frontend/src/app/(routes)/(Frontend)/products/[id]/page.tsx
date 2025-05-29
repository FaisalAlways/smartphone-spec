"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const Page = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState<any | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/products.json");
      const data = await res.json();

      const found = data.find((item: any) => item.slug === id);
      setProduct(found);
      if (found) {
        setSelectedImage(found.images[0]);
      }
    };
    fetchData();
  }, [id]);

  if (!product) return <p className="text-center py-10 text-red-500">Product not found</p>;

  return (
    <div className="py-10 max-w-[1440px] mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Section */}
        <div className="flex flex-col items-center md:items-start flex-shrink-0">
          <div className="w-full min-w-[500px] min-h-[550px] border border-gray-300 rounded-md overflow-hidden p-2">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          <div className="flex gap-2 md:gap-4 mt-5 flex-wrap justify-center md:justify-start">
            {product.images.map((img: string, index: number) => (
              <div
                key={index}
                className={`max-w-[70px] h-[70px] md:max-w-[88px] md:h-[88px] border rounded-md p-1 cursor-pointer ${selectedImage === img ? "border-red-500" : "border-gray-300"
                  }`}
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover rounded"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 space-y-3">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Price:</strong> {product.price}</p>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Availability:</strong> {product.availability}</p>
          <p><strong>Released:</strong> {product.released}</p>
          <p><strong>OS:</strong> {product.os}</p>
          <p><strong>Display:</strong> {product.display}</p>
          <p><strong>Camera:</strong> {product.camera}</p>
          <p><strong>RAM:</strong> {product.ram}</p>
          <p><strong>Chipset:</strong> {product.chipset}</p>
          <p><strong>Battery:</strong> {product.battery}</p>
          <p><strong>Added On:</strong> {product.added_on}</p>
          <p><strong>Last Updated:</strong> {product.last_updated}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
