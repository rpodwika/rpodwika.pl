import React from "react";
import Typography from "../Raw/Typography";
import { RubberLetter } from "../Animation/RubberBand";

const RubberText = (props) => {
  const spanChildren = () => {
    return props.children.split("").map((ch, i) => {
      if (ch === " ") {
        return " ";
      }
      return <RubberLetter key={`letter-${i}-${ch}`}>{ch}</RubberLetter>;
    });
  };

  return <Typography {...props}>{spanChildren()}</Typography>;
};

export default RubberText;
