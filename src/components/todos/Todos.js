import TodoItem from '../todoItem/TodoItem';

export default function Todos(props) {
	const height = { minHeight: '60vh' }
	return (
		<div className="container" style={height}>
			<h1 className="text-center">Todos List</h1>
			<div className="d-flex flex-wrap">
				{props.todos.length === 0 ? (
					'No Todo to Display'
				) : (
					props.todos.map((todo) => {
						return (
							<div>
								<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
							</div>
						);
					})
				)}
			</div>
		</div>
	);
}
