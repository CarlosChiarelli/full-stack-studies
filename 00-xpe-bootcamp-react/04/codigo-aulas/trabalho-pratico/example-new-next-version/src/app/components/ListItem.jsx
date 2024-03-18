"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

async function update(id, isDone, refresh) {
	await fetch(`http://localhost:3001/todos/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ id, isDone }),
	});
}

async function deleteTodo(id, refresh) {
	await fetch(`http://localhost:3001/todos/${id}`, {
		method: 'DELETE',
	});

	refresh();
}

function ListItem({ todo }) {
	const router = useRouter();

	return (
		<div className="border-b border-gray-800 m-2 p-4 flex items-center">
			{' '}
			<input
				type="checkbox"
				onChange={e => update(todo.id, e.target.checked, router.refresh)}
				// STOP 01:18:00
				className="border border-gray-300 rounded-md m-2 py-1 px-1"
			/>
			<span className="mr-auto"> Tarefa 1</span>
			<button
				onClick={() => deleteTodo(todo.id, router.refresh)}
				className="bg-red-500 hover:bg-red-600 text-white font-bold  px-1 rounded ml-2"
			>
				Delete
			</button>
		</div>
	);
}

export default ListItem;
