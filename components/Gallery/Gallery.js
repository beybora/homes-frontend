import Image from "next/image";
import React from "react";

const Gallery = ({ columns, items, imageCrop, attributes }) => {
  console.log

  const columnWidth = 100 / columns;
  let maxWidth = 0;
  let maxHeight = 0;

  if (imageCrop) {
    console.log(items, "items teest");
    items.forEach((item) => {
      if (item.attributes.width > maxWidth) {
        maxWidth = item.attributes.width;
      }
      if (item.attributes.height > maxHeight) {
        maxHeight = item.attributes.height;
      }
    });
  }

  return (
    <div className="flex flex-wrap max-w-5xl mx-auto">
      {items.map((item) => (
        <div
          key={item.id}
          style={{ width: `${columnWidth}%` }}
          className="p-5 flex-grow"
        >
          <Image
            src={item.attributes.url}
            alt={item.attributes.alt || "Gallery Image"}
            width={maxWidth || item.attributes.width}
            height={maxHeight || item.attributes.height}
               className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
