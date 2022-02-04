import React from "react";

export default function TodoItem({ todo, onDelete }) {
  return (
    <div className="my-5">
      <h3>{todo.title}</h3>
      <p>{todo.dsce}</p>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => {
          onDelete(todo);
        }}
      >
        Delete Item
      </button>
    </div>
  );
}
