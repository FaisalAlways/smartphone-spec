"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const page = () => {


  const totalItems = 80;
  const initialItems = 8;
  const itemsPerLoad = 8;

  const [visibleItems, setVisibleItems] = useState(initialItems);

  
  const handleLoadMore = () => {
    setVisibleItems((prev) => Math.min(prev + itemsPerLoad, totalItems));
  };
  return (
    <div>
      <div className="max-w-[1440px] mx-auto px-4 2xl:px-0 py-10 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-[34px]">
        {Array.from({ length: visibleItems }).map((_, index) => (
          <Link href="/apple" key={index} className="max-w-[150px] min-h-[150px] w-full flex flex-col justify-between items-center border border-blue-500 rounded-md
           group cursor-pointer">
            <div className="flex justify-center items-center flex-grow group-hover:scale-150 transition-transform duration-300">
              APPLE {index + 1}
            </div>
            <div className="text-center border-t border-blue-500 w-full group-hover:bg-blue-500 transition-colors">
              <h4 className="text-lg font-semibold text-blue-500 group-hover:text-white transition-colors">
                Apple
              </h4>
            </div>
          </Link>
        ))}
      </div>
      <div>{visibleItems < totalItems && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 active:scale-95 transition transform duration-300 
            outline-none cursor-pointer"
          >
            Load More
          </button>
        </div>
      )}
      </div>
    </div>
  );
};

export default page;
