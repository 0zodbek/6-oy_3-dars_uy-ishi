import React, { useState } from "react";
import "./index.css";

function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    "https://picsum.photos/id/237/200/300",
    "https://picsum.photos/seed/picsum/200/300",
    "https://picsum.photos/200/300?grayscale",
    "https://picsum.photos/200/300/?blur",
    "https://picsum.photos/id/870/200/300?grayscale&blur=2",
  ];

  return (
    <div>
      <div className="img-gallery">
        {images.map((src, index) => (
          <img key={index} src={src} alt="" onClick={() => setSelectedImg(src)} />
        ))}
      </div>
      {selectedImg && (
        <div className="overlay" onClick={() => setSelectedImg(null)}>
          <div className="img-container">
            <img src={selectedImg} alt="" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
