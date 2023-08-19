import React, { useEffect } from "react";
import { preLoaderAnim } from "./Animation";
import { Animated } from "./Animation";

const Preloader = () => {
    const videoItem = Animated[0];
  
    useEffect(() => {
        preLoaderAnim();
    }, []);
  
    return (
        <div className="preloader">
            <div className="preloader-container">
                {videoItem.type === 'video' && (
                    <video src={videoItem.url} alt="Loading..." autoPlay muted />
                )}
            </div>
        </div>
    );
};

export default Preloader;
