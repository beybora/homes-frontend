import React from "react";

const Pagination = ({ totalPages, onPageClick }) => {
  return (
    <div className="max-w-5xl mx-auto mb-10 flex justify-center mt-10 gap-2">
      {Array.from({ length: totalPages }, (_, index) => (
        <div
          key={index}
          className="btn"
          onClick={() => onPageClick(index + 1)}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
