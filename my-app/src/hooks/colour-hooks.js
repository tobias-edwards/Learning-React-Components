import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import colourData from "../colour-data.json";

const ColourContext = createContext();

export const ColourProvider = ({ children }) => {
  const [colours, setColours] = useState(colourData);

  const addColour = (title, colour) => {
    setColours([
      {
        id: uuidv4(),
        rating: 0,
        title,
        colour,
      },
      ...colours,
    ]);
  };

  const rateColour = (id, rating) => {
    setColours(
      colours.map((colour) =>
        colour.id === id ? { ...colour, rating } : colour
      )
    );
  };

  const removeColour = (id) => {
    setColours(colours.filter((colour) => colour.id !== id));
  };

  return (
    // Exposing only these functions to consumers
    <ColourContext.Provider
      value={{ colours, addColour, removeColour, rateColour }}
    >
      {children}
    </ColourContext.Provider>
  );
};

export const useColours = () => useContext(ColourContext);
