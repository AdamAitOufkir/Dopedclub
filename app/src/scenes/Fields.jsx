import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Preview from "./Preview";
import Categories from "./Categories";

const Fields = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const categories = ["3D", "DESIGN", "SHOOTING", "CONTENT", "REELS"];
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Carousel
        responsive={responsive}
        autoPlay={false}
        autoPlaySpeed={5000}
        infinite={true}
      >
        {categories.map((category, index) => (
          <div
            // className="flex justify-center align-center"
            style={{ cursor: "pointer" }}
            key={index}
            onClick={() => handleCategoryClick(category)}
          >
            <Categories Title={category}></Categories>
          </div>
        ))}
      </Carousel>
      {selectedCategory && (
        <div>
          <Preview selectedCategory={selectedCategory} />
        </div>
      )}
    </div>
  );
};

export default Fields;
