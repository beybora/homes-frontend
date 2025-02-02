import Link from "next/link";
import React from "react";

const ButtonLink = ({ destination, label }) => {
  return (
    <Link
      href={destination}
      className="bg-pink-300 px-4 py-2 rounded-md inline-block uppercase cursor-pointer font-bold text-white"
    >
      {label}
    </Link>
  );
};

export default ButtonLink;
