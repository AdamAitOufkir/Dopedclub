import React, { useEffect } from "react";
import { preLoaderAnim } from "./Animation";
import { Animated } from "./Animation";

const Preloader = () => {
    const gifItem = Animated[0]
  useEffect(() => {
    preLoaderAnim()
  }, []);
  return (
    <div className="preloader">
      <div className="preloader-container">
      {gifItem.type === 'gif' && (
          <img src={gifItem.url} alt="Loading..." />
        )}
      </div>
    </div>
  );
};

export default Preloader;
