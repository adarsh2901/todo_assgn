import React, { useState } from "react";
import { Todo } from "./Todo";
import Form from "./myForm";
import { v4 as uuidv4 } from "uuid";
import EditTodo from "./EditTodo";

const MainTodo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div>
      <h1>Things to do</h1>
      <Form addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodo editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default MainTodo;
