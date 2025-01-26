import React from "react";
import { getTextAlign } from "utils/fonts";

export const Paragraph = ({ content, textAlign }) => {
  return (
    <p
      className={`max-w-5xl mx-auto ${getTextAlign(textAlign)}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default Paragraph;
