"use client";
import React, { useState } from "react";

const page = () => {
    const images = [
        "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    ];

    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className="py-10 max-w-[1440px] mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Image Section */}
                <div className="flex flex-col items-center md:items-start flex-shrink-0">
                    {/* Main Image */}
                    <div className="w-full max-w-[555px] min-h-[555px] border border-gray-300 rounded-md overflow-hidden">
                        <img
                            src={selectedImage}
                            alt="Selected"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Thumbnails */}
                    <div className="flex gap-2 md:gap-4 mt-5 flex-wrap justify-center md:justify-start">
                        {images.map((img, index) => (
                            <div
                                key={index}
                                className={`w-[70px] h-[70px] md:w-[88px] md:h-[88px] border rounded-md p-1 cursor-pointer ${selectedImage === img ? "border-red-500" : "border-blue-500"
                                    }`}
                                onClick={() => setSelectedImage(img)}
                            >
                                <img
                                    src={img}
                                    alt={`Thumb ${index + 1}`}
                                    className="w-full h-full object-cover rounded"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Info Box */}
                <div className="bg-white shadow-xl rounded-xl p-6 md:p-8 flex-grow max-w-full md:max-w-md border border-gray-200">
                    {/* Price */}
                    <div className="text-3xl font-extrabold text-green-600 flex items-center gap-2 mb-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-green-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8c-1.657 0-3 1.343-3 3v1a3 3 0 006 0v-1c0-1.657-1.343-3-3-3z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 1v2m6.364 1.636l-1.414 1.414M21 12h-2M4 12H2m3.636-7.364L4.222 6.05M12 23v-2m7.778-3.222l-1.414-1.414M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                        </svg>
                        ৳40,000.00
                    </div>

                    {/* Basic Info */}
                    <div className="space-y-3 text-gray-700 mb-6">
                        <p className="flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-blue-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 7h18M3 12h18M3 17h18"
                                />
                            </svg>
                            <span>
                                <strong>Brand:</strong> Vivo
                            </span>
                        </p>
                        <p className="flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-purple-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            <span>
                                <strong>Category:</strong> Smartphones
                            </span>
                        </p>
                    </div>

                    {/* Dates */}
                    <div className="text-sm text-gray-500 space-y-2 mb-6">
                        <p className="flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 7V3m8 4V3m-9 4h10a2 2 0 012 2v11a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2z"
                                />
                            </svg>
                            <span>
                                <strong>Added on:</strong> 28th April, 2025
                            </span>
                        </p>
                        <p className="flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4l3 3m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>
                                <strong>Last updated:</strong> 25th May, 2025
                            </span>
                        </p>
                    </div>

                    {/* Compare Button */}
                    <button className="w-full py-2 px-4 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 transition mb-6">
                        Add to Compare
                    </button>

                    {/* Divider */}
                    <hr className="border-t border-gray-200 mb-6" />

                    {/* Specs */}
                    <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm text-gray-600">
                        <p>
                            <span className="font-medium">Availability:</span>
                            <br />
                            Unofficial
                        </p>
                        <p>
                            <span className="font-medium">Released:</span>
                            <br />
                            28 Apr 2025
                        </p>
                        <p>
                            <span className="font-medium">OS:</span>
                            <br />
                            Android 15, OriginOS 5
                        </p>
                        <p>
                            <span className="font-medium">Display:</span>
                            <br />
                            6.78" 1260x2800 px
                        </p>
                        <p>
                            <span className="font-medium">Camera:</span>
                            <br />
                            50MP 2160p
                        </p>
                        <p>
                            <span className="font-medium">RAM:</span>
                            <br />
                            12/16GB
                        </p>
                        <p>
                            <span className="font-medium">Chipset:</span>
                            <br />
                            Snapdragon 8s Gen 4
                        </p>
                        <p>
                            <span className="font-medium">Battery:</span>
                            <br />
                            7000mAh, 120W
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
