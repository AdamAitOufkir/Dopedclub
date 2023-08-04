import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Logo } from "./Media";
import { useState } from "react";
import Preview from "./Preview";

const TrustSlider = () => {
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

  const [selectedCategory, setSelectedCategory] = useState();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
<div>
  <Carousel
    responsive={responsive}
    autoPlay={true}
    autoPlaySpeed={1000}
    infinite={true}
  >
    {Logo.map((file, index) => (
      <div
        className="cursor-pointer"
        key={index}
        onClick={() => handleCategoryClick(file.category)}
        style={{
          display: "flex", 
          alignItems: "center",
          justifyContent: "center", 
          width: "100%",
          height: "100%",
        }}
      >
        <img
          src={file.url}
          alt={file.url}
          style={{
            maxWidth: "50%",
            maxHeight: "50%",
            objectFit: "contain", 
          }}
        />
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

export default TrustSlider;
