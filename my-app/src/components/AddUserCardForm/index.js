import React from "react";
import { useInput } from "../../hooks";

const AddUserCardForm = ({ addUser = (f) => f }) => {
  const [nameProps, resetName] = useInput("");
  const [ageProps, resetAge] = useInput("");

  const onSubmit = (e) => {
    e.preventDefault();
    addUser(nameProps.value, ageProps.value);
    resetName();
    resetAge();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input {...nameProps} type="text" placeholder="Name" />
        <input {...ageProps} type="text" placeholder="Age" />
        <button>Add</button>
      </form>
    </>
  );
};

export default AddUserCardForm;
