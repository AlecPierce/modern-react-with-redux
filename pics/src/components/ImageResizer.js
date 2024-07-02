function ImageResizer({ image, index }) {
  const imageSizes = [
    { id: 0, url: image.urls.thumb, className: "image-thumb" },
    { id: 1, url: image.urls.small, className: "image-small" },
    { id: 2, url: image.urls.regular, className: "image-regular" },
    {
      id: 3,
      url: image.urls.full,
      className: "image-full",
    },
  ];

  return imageSizes[index];
}

export default ImageResizer;
