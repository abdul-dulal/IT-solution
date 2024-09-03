"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Shuffle from "shufflejs";
import m1 from "/public/img/blog/Project Reporting.jpg";
import m2 from "/public/img/blog/Responsive Pixel Perfect Design.jpg";
import m3 from "/public/img/blog/Analytic Solutions.jpg";
const ShuffleGrid = () => {
  const shuffleInstance = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    shuffleInstance.current = new Shuffle(gridRef.current, {
      itemSelector: ".grid-item",
      sizer: ".grid-sizer",
    });

    return () => {
      shuffleInstance.current.destroy();
      shuffleInstance.current = null;
    };
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => shuffleInstance.current.filter(Shuffle.ALL_ITEMS)}
        >
          All
        </button>
        <button onClick={() => shuffleInstance.current.filter("category-a")}>
          Category A
        </button>
        <button onClick={() => shuffleInstance.current.filter("category-b")}>
          Category B
        </button>
      </div>
      <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 ">
        <div className="grid-sizer"></div>
        <div className="grid-item" data-groups='["category-a"]'>
          <Image
            src={m1}
            alt="Image 1"
            className="w-full h-[250px] object-cover"
          />
        </div>
        <div className="grid-item" data-groups='["category-b"]'>
          <Image
            src={m2}
            alt="Image 2"
            className="w-full h-[250px] object-cover"
          />
        </div>
        <div className="grid-item" data-groups='["category-a"]'>
          <Image
            src={m3}
            alt="Image 3"
            className="w-full h-[250px] object-cover"
          />
        </div>
        <div className="grid-item" data-groups='["category-b"]'>
          <Image
            src={m1}
            alt="Image 4"
            className="w-full h-[250px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ShuffleGrid;
