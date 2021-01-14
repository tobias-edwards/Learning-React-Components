import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import StarRatingInteractive from "../StarRatingInteractive";
import "./style.css";

const Colour = ({
  id,
  title,
  colour,
  rating,
  onRemove = (f) => f,
  onRate = (f) => f,
}) => (
  <section>
    <h1>{title}</h1>
    <div className="row justify-center align-center">
      <StarRatingInteractive
        selectedStars={rating}
        onRate={(rating) => onRate(id, rating)}
      />
      <div className="block" style={{ backgroundColor: colour }}></div>
      <button onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
    </div>
  </section>
);

export default Colour;
