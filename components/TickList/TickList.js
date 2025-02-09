import React from 'react';

const TickList = ({ attributes }) => {
  let tickItems = [];
  try {
    tickItems = JSON.parse(decodeURIComponent(attributes.tick_item));
  } catch (error) {
    console.error("Fehler beim Parsen des JSON:", error);
  }

  return (
    <div className="p-4 bg-red-500 text-black">
      {tickItems.map((item, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-bold">{item.heading}</h3>
          <p className="text-sm">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default TickList;
