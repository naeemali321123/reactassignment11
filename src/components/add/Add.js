import React, { useState } from "react";

export default function Add(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank");
    } else {
      props.addTodo(title, desc);
    }
    setTitle('');
    setDesc('');
  };
  return (
    <div className="container my-3">
      <form onSubmit={submit}>
        <div className="form-group">
          <input
            value={title}
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="form-control my-3"
            placeholder="Enter Title"
          />
        </div>
        <div className="form-group">
          <input
            value={desc}
            type="text"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            className="form-control my-3"
            placeholder="Enter Discription"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
}
