import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

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
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id: todo.id });

	const [editMode, setEditMode] = useState(false);
	const [editText, setEditText] = useState(todo.text);

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	};

	const handleSave = () => {
		if (editText.trim()) {
			onEdit(todo.id, editText.trim());
			setEditMode(false);
		}
	};

	return (
		<div
			ref={setNodeRef}
			style={style}
			className='flex justify-between items-center my-4 p-2 bg-white text-black rounded-md'
		>
			
			<div {...attributes} {...listeners} className="cursor-move pr-2">
				:::
			</div>

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
