import React from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected, onSelect }) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);

export default Star;
