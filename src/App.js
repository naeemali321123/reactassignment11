import Topbar from './components/topbar/Topbar';
import logo from './images/logo.png';
import Todos from './components/todos/Todos';
import { useEffect, useState } from 'react';
import Add from './components/add/Add';

function App() {
	let initTodo;
	if (localStorage.getItem('todos') === null) {
		initTodo = [];
	} else {
		initTodo = JSON.parse(localStorage.getItem('todos'));
	}
	const onDelete = (todo) => {
		setTodos(
			todos.filter((e) => {
				return e !== todo;
			})
		);
		localStorage.setItem('todos', JSON.stringify(todos));
	};
	const [ todos, setTodos ] = useState(initTodo);
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
			desc: desc
		};
		setTodos([ ...todos, myTodo ]);
	};
	useEffect(
		() => {
			localStorage.setItem('todos', JSON.stringify(todos));
		},
		[ todos ]
	);
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
