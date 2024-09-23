"use client";
import React, { useEffect, useRef, useState } from "react";
import Shuffle from "shufflejs";

const ShuffleGrid = () => {
  const shuffleRef = useRef(null);
  const [shuffleInstance, setShuffleInstance] = useState(null);

  const items = [
    {
      id: 1,
      image: "/image1.jpg",
      title: "Item 1",
      description: "Description 1",
      category: "category1",
    },
    {
      id: 2,
      image: "/image2.jpg",
      title: "Item 2",
      description: "Description 2",
      category: "category2",
    },
    {
      id: 3,
      image: "/image3.jpg",
      title: "Item 3",
      description: "Description 3",
      category: "category1",
    },
    // Add more items as needed
  ];

  useEffect(() => {
    if (shuffleRef.current) {
      const shuffle = new Shuffle(shuffleRef.current, {
        itemSelector: ".picture-item",
        sizer: ".my-sizer-element",
      });
      setShuffleInstance(shuffle);
    }

    // Cleanup on component unmount
    return () => {
      if (shuffleInstance) {
        shuffleInstance.destroy();
      }
    };
  }, [shuffleInstance]);

  const handleFilter = (category) => {
    if (shuffleInstance) {
      shuffleInstance.filter((element) => {
        return category === "all" || element.dataset.category === category;
      });
    }
  };

  return (
    <div>
      {/* Filter Buttons */}
      <div className="btn-group">
        <button className="btn" onClick={() => handleFilter("all")}>
          All
        </button>
        <button className="btn" onClick={() => handleFilter("category1")}>
          Category 1
        </button>
        <button className="btn" onClick={() => handleFilter("category2")}>
          Category 2
        </button>
      </div>

      {/* Shuffle Container */}
      <div className="my-shuffle-container" ref={shuffleRef}>
        <div className="my-sizer-element"></div>
        {items.map((item) => (
          <div
            key={item.id}
            className="picture-item"
            data-category={item.category}
          >
            <div className="picture-item__inner">
              <img src={item.image} alt={item.title} />
              <div className="picture-item__details">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShuffleGrid;
