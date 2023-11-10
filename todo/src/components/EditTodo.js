import React, { useState } from "react";

const EditTodo = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
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

export default EditTodo;
