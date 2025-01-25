import Image from "next/image";
import React from "react";

const Cover = ({ children, background }) => {
  return (
    <div className="h-screen text-black bg-red-100 bg-cover relative min-h-[400px] flex items-center justify-center">
      <Image
        src={background}
        alt="cover"
        fill
        className="object-cover mix-blend-soft-light"
      />
      <div className="max-w-5xl z-10">{children}</div>
    </div>
  );
};

export default Cover;
