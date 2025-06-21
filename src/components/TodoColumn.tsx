import TodoCard from "./TodoCard";



type Todo = {

	id: number;
	text: string;
	completed: boolean;
};

type TodoColumnProps = {
	title: string;
	todos: Todo[];

	deleteTodo: (id: number) => void;
	onEdit: (id: number, text: string) => void;
};


const TodoColumn = ({ todos, title, onEdit, deleteTodo }: TodoColumnProps) => {
  return (
    <div className='bg-indigo-400 p-8 max-w-[500px] h-[90%] my-8 mx-8 rounded-lg shadow-md'>
   <h1
				className={`text-center font-bold text-black py-2 p-4 mb-4 rounded-full (
					title
				)}`}
			>
				{title}
			</h1>    
            {todos.map((todo) => (
					<TodoCard
						key={todo.id}
						todo={todo}
						onEdit={(id, text) => onEdit(id, text)}
						deleteTodo={deleteTodo}
					/>
				))} 
    </div>
  )
}

export default TodoColumn