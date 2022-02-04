import "./App.css";
import Topbar from "./components/topbar/Topbar";
import logo from "./images/logo.png";
import Todos from "./components/todos/Todos";
import { useState } from "react";
import Add from "./components/add/Add";

function App() {
  const onDelete = (todo) => {
    let index = todos.indexOf(todo);
    todos.splice(index, 1);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to Market",
      dsce: "You need to go to the Market to get this job done",
    },
    {
      sno: 2,
      title: "Go to Mall",
      dsce: "You need to go to the Mall to get this job done 1",
    },
    {
      sno: 3,
      title: "Go to Home",
      dsce: "You need to go to the Home to get this job done 2",
    },
  ]);

  return (
    <div id="container">
      <Topbar logo={logo} />
      <Add/>
      <Todos todos={todos} onDelete={onDelete} />
    </div>
  );
}

export default App;
