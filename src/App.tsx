import { useState } from "react";
import { useEffect } from "react";
import TodoColumn from "./components/TodoColumn";


type Todos = {
	id: number;
	text: string;
	completed: boolean;
	column: string;
};


function App() {
  const getInitialTodos = (): Todos[] => {
		const stored = localStorage.getItem("todos");
		return stored ? JSON.parse(stored) : [];
	};

	const [input, setInput] = useState<string>("");
	const [todos, setTodos] = useState<Todos[]>(getInitialTodos);

	const [editId, setEditId] = useState<number | null>(null);

	const columns = ["To Do", "In Progress", "Done"];
	
const addOrUpdateTodo = () => {
		if (!input.trim()) return;

		if (editId !== null) {
			setTodos((prev) =>
				prev.map((todo) =>
					todo.id === editId ? { ...todo, text: input } : todo
				)
			);
			setEditId(null);
		} else {
			const newTodo = {
				id: Date.now(),
				text: input,
				completed: false,
				column: "To Do",
			};
			setTodos((prev) => [...prev, newTodo]);
		}

		setInput("");
	};

	const handleEdit = (id: number, newText: string) => {
		setTodos((prev) =>
			prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
		);
	};

	const deleteTodo = (id: number) => {
		setTodos(todos.filter((todo) => todo.id !== id));
		if (editId === id) {
			setEditId(null);
			setInput("");
		}
	};
useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	
 return (
		<div className='bg-gray-900 min-h-screen p-4'>
			<h1 className='text-center text-white text-3xl sm:text-4xl font-bold mb-4'>
				<span className='text-4xl'>T</span>odo{" "}
				<span className='text-4xl'>L</span>ist📝
			</h1>
			<div className='bg-indigo-400 p-6 w-full max-w-[500px] mx-auto my-6 rounded-lg shadow-lg'>
				<div className='flex gap-3 items-center'>
					<input
						type='text'
						placeholder='Add a todo'
						value={input}
						onChange={(e) => setInput(e.target.value)}
						className='flex-3 p-2 placeholder: text-gray-600 bg-white   rounded-lg focus:outline-none focus:border-2 focus:border-blue-700 focus:text-black'
					/>
					<button className=' p-2 flex-1 text-white bg-blue-700 cursor-pointer rounded-md hover:bg-blue-400 hover:text-black  transition'onClick={addOrUpdateTodo}>
						Add
					</button>
				</div>
			</div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2'>
					{columns.map((col) => (
						<TodoColumn
							key={col}
							title={col}
							todos={todos.filter((todo) => todo.column === col)}
							deleteTodo={deleteTodo}
							onEdit={handleEdit}
						/>
					))}
				</div>
		</div>
	);
}

export default App;
