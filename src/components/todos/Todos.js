import TodoItem from "../todoItem/TodoItem";

export default function Todos(props) {
  return (
    <div className="container">
      <h1 className="text-center">Todos List</h1>
      {props.todos.map((todo) => { 
        return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />}
       
      )}
    </div>
  );
}
