import React, { useState } from "react";
import { Media, PlayIcon } from "./Media";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Preview = ({ selectedCategory }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [itemsToShow, setItemsToShow] = useState(8);

  const handleClickOutsideMedia = (event) => {
    if (event.target.classList.contains("popup-media")) {
      setSelectedFile(null);
    }
  };

  useEffect(() => {
    setItemsToShow(8);
  }, [selectedCategory]);

  const filteredMedia = Media.filter(
    (file) => file.category === selectedCategory
  );

  const mediaToShow = filteredMedia.slice(0, itemsToShow);

  const handleLoadMore = () => {
    setItemsToShow(itemsToShow + 8);
  };

  const handleLess = () => {
    setItemsToShow(itemsToShow - 8);
  };

  return (
    <div className="container">
      {itemsToShow > 8 && (
        <div className="flex justify-center">
          <button
            onClick={handleLess}
            className="p-3 w-32 bg-yellow rounded-full font-semibold text-deep-blue hover:bg-[#0d031a] hover:text-white transition duration-500 mb-10"
          >
            Show less
          </button>
        </div>
      )}

      <div className="media-container">
        {mediaToShow.map((file, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="media" onClick={() => setSelectedFile(file)}>
              {file.type === "image" ? (
                <img src={file.url} alt={file} loading="lazy" />
              ) : (
                <div className="video-container">
                  <video src={file.url} muted loading="lazy" />
                  <div className="play-button-overlay">
                    <img src={PlayIcon[0].url} alt="Play Button" />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {filteredMedia.length > itemsToShow && (
        <div className="flex justify-center">
          <button
            onClick={handleLoadMore}
            className="p-3 w-32 bg-yellow rounded-full font-semibold text-deep-blue hover:bg-[#0d031a] hover:text-white transition duration-500 mb-10"
          >
            Load More
          </button>
        </div>
      )}

      <div
        className="popup-media"
        style={{ display: selectedFile ? "block" : "none" }}
        onClick={handleClickOutsideMedia}
      >
        <span onClick={() => setSelectedFile(null)}>&times;</span>

        {selectedFile?.type === "video" ? (
          <video src={selectedFile?.url} muted autoPlay controls />
        ) : (
          <img src={selectedFile?.url} alt={selectedFile} />
        )}
      </div>
    </div>
  );
};

export default Preview;
