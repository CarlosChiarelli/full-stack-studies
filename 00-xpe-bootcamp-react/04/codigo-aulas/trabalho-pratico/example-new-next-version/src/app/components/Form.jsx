'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

async function addTodo(name, refresh) {
	console.log('trying to add', JSON.stringify(name));

	await fetch('http://localhost:3001/todos/todos', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ name, isDone: false }),
	});

	refresh();
}

function Form() {
	const router = useRouter();
	let [name, setName] = useState('');

	return (
		<div
			// style={{
			// 	display: 'flex',
			// 	justifyContent: 'space-between',
			// 	marginBottom: '20px',
			// }}
		>
			<input
				type="text"
				onChange={e => setName(e.target.value)}
				value={name}
				style={{
					flex: '3',
					padding: '5px',
					marginRight: '10px',
				}}
				className="border border-gray-300 rounded-md m-2 py-1 px-1"
			/>
			<button
				style={{ flex: '1' }}
				onClick={async () => {
					await addTodo(name, router.refresh);
					setName('');
				}}
				className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-1 rounded"
			>
				Add Todo
			</button>
		</div>
	);
}

export default Form;
