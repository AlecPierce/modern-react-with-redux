import "./ImageList.css";
import ImageShow from "./ImageShow";
import React, { useState } from "react";

function ImageList({ images }) {
  const [index, setIndex] = useState(1);

  if (index > 3 || index < 0) {
    return setIndex(1);
  }

  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} index={index} />;
  });
  return (
    <div>
      <button onClick={() => setIndex(index + 1)}>Increase</button>
      <button onClick={() => setIndex(index - 1)}>Decrease</button>
      <div className="image-list">{renderedImages}</div>
    </div>
  );
}

export default ImageList;
