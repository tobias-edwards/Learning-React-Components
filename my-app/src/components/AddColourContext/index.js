import React, { useContext } from "react";
import { useColours } from "../../hooks/colour-hooks";
import { useInput } from "../../hooks/hooks";

const AddColourContext = () => {
  const [titleProps, resetTitle] = useInput("");
  const [colourProps, resetColour] = useInput("#000000");
  const { addColour } = useColours();

  const onSubmit = (e) => {
    e.preventDefault();
    addColour(titleProps.value, colourProps.value);
    resetTitle();
    resetColour();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        {...titleProps}
        type="text"
        placeholder="Colour name..."
        required
      />
      <input {...colourProps} type="color" required />
      <button>Add</button>
    </form>
  );
};

export default AddColourContext;
