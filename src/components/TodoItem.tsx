import { useState } from "react";
import iconCheck from '/src/assets/images/icon-check.svg'
import iconCross from '/src/assets/images/icon-cross.svg';

type ComponentProps = {
    todo: {
        id: string,
        text: string,
        completed: boolean,
    }
    remove: (id: string) => void;
}

function TodoItem({ todo, remove }: ComponentProps): JSX.Element {
    const [completed, setCompleted] = useState(todo.completed)

    const toggleCompleted = () => {
        setCompleted(!completed);
        console.log(completed);
    }

    const removeTodo = () => {
        console.log(todo.id)
        remove(todo.id)
    }

    return (
        <li key={todo.id} className="flex  items-center h-[52px] py-4 px-5 bg-white">
            <button onClick={toggleCompleted} className={`flex justify-center items-center w-5 h-5 rounded-full border ${completed ? 'bg-gradient-to-r from-gradient-1 to-gradient-2 border-0' : ''}`}>
                <img src={iconCheck} alt="complete icon" />
            </button>
            <p className={`grow ml-3  ${completed ? 'text-light-300 line-through' : 'text-light-500'}`}>{todo.text}</p>
            <button onClick={removeTodo} className="w-3 h-3">
                <img src={iconCross} alt="delete icon" />
            </button>
        </li>
    )
}

export default TodoItem