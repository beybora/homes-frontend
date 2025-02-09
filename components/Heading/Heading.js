import React from 'react'
import { getFontSize, getTextAlign } from 'utils/fonts';
const Heading = ({ content, level = 2, textAlign }) => {
  const tag = React.createElement(`h${level}`, {
    className: `font-heading max-w-5xl mx-auto mb-5 ${getFontSize(level)} ${getTextAlign(textAlign)}`
  }, content);

  return tag;
}

export default Heading 
