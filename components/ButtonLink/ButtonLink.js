import Link from "next/link";
import React from "react";

const ButtonLink = ({ destination, label }) => {
  return (
    <Link
      href={destination}
      className="btn"
    >
      {label}
    </Link>
  );
};

export default ButtonLink;
