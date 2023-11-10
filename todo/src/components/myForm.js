import React, { useState } from "react";

const Form = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="myForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="input"
      />
      <button type="submit" className="btn">
        Add
      </button>
    </form>
  );
};

export default Form;
