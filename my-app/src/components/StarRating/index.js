import React from "react";
import Star from "../Star";
import "./style.css";
import { createArray } from "../../helpers/array";

// Pure component i.e. does not contain state
const StarRating = ({ totalStars = 5, selectedStars }) => (
  <div>
    {createArray(totalStars).map((n, i) => (
      <Star selected={selectedStars > i} key={i} />
    ))}
    <p className="mb-0">
      {selectedStars} of {totalStars} stars
    </p>
  </div>
);

export default StarRating;
