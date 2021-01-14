import React, { useState } from "react";
import { useInput } from "../../hooks";

// Controlled component - React controls state of the form
const AddColourForm = ({ onNewColour = (f) => f }) => {
  const [titleProps, resetTitle] = useInput("");
  const [colourProps, resetColour] = useInput("#000000");

  const submit = (e) => {
    e.preventDefault();
    onNewColour(titleProps.value, colourProps.value);
    resetTitle();
    resetColour();
  };

  return (
    <form onSubmit={submit}>
      {/* Without onChange, the field will be read-only */}
      <input
        {...titleProps}
        type="text"
        placeholder="colour title..."
        required
      />
      <input {...colourProps} type="color" required />
      {/* Auto type="submit" */}
      <button>Add</button>
    </form>
  );
};

export default AddColourForm;
