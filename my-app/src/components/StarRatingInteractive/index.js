import React, { useState } from "react";
import Star from "../Star";
import "./style.css";
import { createArray } from "../../helpers/array";

const StarRatingInteractive = ({
  totalStars = 5,
  selectedStars = 0,
  onRate = (f) => f,
}) => {
  return (
    <div>
      {createArray(totalStars).map((n, i) => (
        <Star
          selected={selectedStars > i}
          onSelect={() => onRate(i + 1)}
          key={i}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
};

export default StarRatingInteractive;
