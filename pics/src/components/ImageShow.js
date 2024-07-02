import ImageResizer from "./ImageResizer";

function ImageShow({ image, index }) {
  const imageSrc = ImageResizer({ image, index });
  return (
    <img
      className={imageSrc.className}
      src={imageSrc.url}
      alt={image.description}
    />
  );
}

export default ImageShow;
