import React from "react";

const Columns = ({
  isStackedOnMobile,
  children,
  textColor,
  backgroundColor,
}) => {
  return (
    <div className={`my-10 text-${textColor} bg-[red]`}>
      <div
        className={`max-w-5xl mx-auto gap-5 ${
          isStackedOnMobile ? "block md:flex" : "flex"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Columns;
