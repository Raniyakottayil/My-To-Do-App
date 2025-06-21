import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

type TodoProp = {
	todo: {
		id: number;
		text: string;
		completed: boolean;
	};
	deleteTodo: (id: number) => void;
	onEdit: (id: number, newText: string) => void;
};
const TodoCard = ({ todo, onEdit, deleteTodo }: TodoProp) => {
	const [editMode, setEditMode] = useState(false);
	const [editText, setEditText] = useState(todo.text);
	const handleSave = () => {
		if (editText.trim()) {
			onEdit(todo.id, editText.trim());
			setEditMode(false);
		}
	};
	return (
		<div className='flex justify-between items-center my-4 p-2 bg-white text-black rounded-md'>
			<div className='flex-1 flex items-center justify-between'>
				{editMode ? (
					<>
						<input
							value={editText}
							onChange={(e) => setEditText(e.target.value)}
							className='flex-grow mr-2 px-2 py-1 border rounded'
						/>
						<button
							onClick={handleSave}
							className='bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-400'
						>
							Save
						</button>
					</>
				) : (
					<>
						<p className='break-words max-w-[250px]'>{todo.text}</p>
						<div className='flex items-center gap-3'>
							<button
								onClick={() => {
									setEditMode(true);
									setEditText(todo.text);
								}}
								title='Edit Task'
								className='text-yellow-600'
							>
								<FaEdit />
							</button>
							<button
								onClick={() => deleteTodo(todo.id)}
								title='Delete Task'
								className='text-red-600'
							>
								<AiFillDelete />
							</button>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default TodoCard;
