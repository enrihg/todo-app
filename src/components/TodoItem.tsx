import { useState } from "react";
import iconCheck from '/src/assets/images/icon-check.svg'
import iconCross from '/src/assets/images/icon-cross.svg';

type ComponentProps = {
    id: string,
    text: string,
    completed: boolean,
    remove: (id: string) => void;
}

function TodoItem({ id, text, completed, remove }: ComponentProps): JSX.Element {
    const [complete, setComplete] = useState(completed)

    const toggleCompleted = () => {
        setComplete(!complete);
        console.log(complete);
    }

    const removeTodo = () => {
        console.log(id)
        remove(id)
    }

    return (
        <li key={id} className="flex  items-center h-[52px] py-4 px-5 bg-white dark:bg-dark-800" draggable="true" onDragStart={() => console.log('on drag start')} onDragEnd={() => console.log('on drag end')}>
            <button onClick={toggleCompleted} className={`flex justify-center items-center w-5 h-5 rounded-full border ${complete ? 'bg-gradient-to-r from-gradient-1 to-gradient-2 border-0' : 'dark:border-dark-600'}`}>
                <img className={complete ? "" : "hidden"} src={iconCheck} alt="complete icon" />
            </button>
            <p className={`grow ml-3 text-xs  ${complete ? 'text-light-300 dark:text-dark-600 line-through' : 'text-light-500 dark:text-dark-100'}`}>{text}</p>
            <button onClick={removeTodo} className="w-3 h-3">
                <img src={iconCross} alt="delete icon" />
            </button>
        </li>
    )
}

export default TodoItem