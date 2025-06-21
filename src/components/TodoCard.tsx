import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

type TodoProp = {
	todo: {
		id: number;
		text: string;
		completed: boolean;
	};
};
const TodoCard = ({ todo }: TodoProp) => {
	return (
		<div className='flex justify-between items-center my-4 p-2 bg-white text-black rounded-md'>
			<div>
				<p className='break-words max-w-[250px]'>{todo.text}</p>
				<div className='flex items-center gap-3'>
					<button
						title='Edit Task'
						className='text-yellow-600'
					>
						<FaEdit />
					</button>
					<button>
						<AiFillDelete />
					</button>
				</div>
			</div>
		</div>
	);
};

export default TodoCard;
