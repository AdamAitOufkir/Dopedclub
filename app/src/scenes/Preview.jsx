import React, { useState } from "react";
import { Media } from "./Media";

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
        ))}
      </div>

      <div className="popup-media" style={{display: selectedFile ? 'block' : 'none'}} onClick={handleClickOutsideMedia}>
        <span onClick={() => setSelectedFile(null)}>&times;</span>

        {selectedFile?.type === "video" ? (
          <video src={selectedFile?.url} muted autoPlay controls />
        ) : (
          <img src={selectedFile?.url} />
        )}
      </div>

    </div>
  );
};

export default Preview;
