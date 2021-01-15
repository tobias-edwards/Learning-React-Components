import React from "react";
import { useColours } from "../../hooks/colour-hooks";

const ColourListContext = () => {
  const { colours } = useColours();

  return (
    <ul>
      {colours.map(({ title }, i) => (
        <li key={i}>{title}</li>
      ))}
    </ul>
  );
};

export default ColourListContext;
