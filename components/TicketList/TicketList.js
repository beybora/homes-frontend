import React from "react";
import TickItem from "../TickList/TickList";

const TicketList = ({ items }) => {
  return (
    <div className="max-w-5xl mx-auto py-8">
      {items.map((item, index) => (
        <TickItem 
          key={index}
          heading={item.heading}
          text={item.text}
        />
      ))}
    </div>
  );
};

export default TicketList; 