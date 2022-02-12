import Topbar from "./components/topbar/Topbar";
import logo from "./images/logo.png";
import Todos from "./components/todos/Todos";
import { useState } from "react";
import Add from "./components/add/Add";

function App() {
  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  const [todos, setTodos] = useState([
    
  ]);
  const addTodo = (title, desc) => {
    let sno;
    if (todos.length == 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    console.log(myTodo);
    setTodos([...todos, myTodo]);
  };
  return (
    <div id="container">
      <Topbar logo={logo} />
      <h1 className="text-center my5">Add And Delete Todo Program</h1>
      <Add addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
    </div>
  );
}

export default App;
