import { useState } from "react";


function App() {
 
const [input, setInput] = useState<string>("");
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
					<button
						className=' p-2 flex-1 text-white bg-blue-700 cursor-pointer rounded-md hover:bg-blue-400 hover:text-black  transition'
						
					>Add
						
					</button>
				</div>
			</div>
      </div>
  )
}

export default App
