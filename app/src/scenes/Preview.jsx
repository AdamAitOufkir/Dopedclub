import React, { useState } from "react";
import { Media } from "./Media";
import { motion } from "framer-motion";

const Preview = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleClickOutsideMedia = (event) => {
    if (event.target.classList.contains("popup-media")) {
      setSelectedFile(null);
    }
  };

  return (
    <div className="container">
      <div className="media-container">
        {Media.map((file, index) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div
              className="media"
              key={index}
              onClick={() => setSelectedFile(file)}
            >
              {file.type === "image" ? (
                <img src={file.url} alt={file} />
              ) : (
                <video src={file.url} muted />
              )}
            </div>
          </motion.div>
        ))}
      </div>

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
