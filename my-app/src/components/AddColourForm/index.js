import React, { useRef } from "react";

const AddColourForm = ({ onNewColour = (f) => f }) => {
  const txtTitle = useRef();
  const hexColour = useRef();

  const submit = (e) => {
    e.preventDefault();
    const title = txtTitle.current.value;
    const colour = hexColour.current.value;
    onNewColour(title, colour);
    txtTitle.current.value = "";
    hexColour.current.value = "";
  };

  return (
    <form onSubmit={submit}>
      <input
        ref={txtTitle}
        type="text"
        placeholder="colour title..."
        required
      />
      <input ref={hexColour} type="colour" required />
      <button>Add</button>
    </form>
  );
};

export default AddColourForm;
