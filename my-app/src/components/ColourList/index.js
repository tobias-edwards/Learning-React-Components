import React, { useState } from "react";
import Colour from "../Colour";

const ColourList = ({
  colours = [],
  onRemoveColour = (f) => f,
  onRateColour = (f) => f,
}) => (
  <div>
    {colours.length ? (
      colours.map((colour) => (
        <Colour
          key={colour.id}
          onRemove={onRemoveColour}
          onRate={onRateColour}
          {...colour}
        />
      ))
    ) : (
      <p>No colours listed</p>
    )}
  </div>
);

export default ColourList;
