import React, { useState } from "react";
import PageSlider from "./page-slider";
import ImageViewer from "./image-viewer";

const Gallery = ({ photos = [...Array(5).keys()].map((n, i) => i + 1) }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const numPhotos = photos.length;

  // Loops index on overflow
  const updateIndex = (delta) =>
    setPhotoIndex((photoIndex + numPhotos + delta) % numPhotos);

  return (
    <div className="row apart">
      <PageSlider onClick={() => updateIndex(-1)}>&lt;</PageSlider>
      <ImageViewer>{photos[photoIndex]}</ImageViewer>
      <PageSlider onClick={() => updateIndex(+1)}>&gt;</PageSlider>
    </div>
  );
};

export default Gallery;
