import React from 'react';

export default function TodoItem({ todo, onDelete }) {
	return (
		<div className="my-3 mx-5 text-center">
			<h3>{todo.title}</h3>
			<p>{todo.desc}</p>
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
