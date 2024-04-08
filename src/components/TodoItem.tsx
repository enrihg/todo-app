import iconCheck from '/src/assets/images/icon-check.svg'
import iconCross from '/src/assets/images/icon-cross.svg';

type ComponentProps = {
    id: string,
    text: string,
    completed: boolean,
    toggle: (id: string) => void;
    remove: (id: string) => void;
}

function TodoItem({ id, text, completed, toggle, remove }: ComponentProps): JSX.Element {

    return (
        <li key={id} className="flex  items-center h-[52px] py-4 px-5 bg-white dark:bg-dark-800"  >
            <button onClick={() => toggle(id)} className={`flex justify-center items-center w-5 h-5 rounded-full border ${completed ? 'bg-gradient-to-r from-gradient-1 to-gradient-2 border-0' : 'dark:border-dark-600'}`}>
                <img className={completed ? "" : "hidden"} src={iconCheck} alt="complete icon" />
            </button>
            <p className={`grow ml-3 text-xs  ${completed ? 'text-light-300 dark:text-dark-600 line-through' : 'text-light-500 dark:text-dark-100'}`}>{text}</p>
            <button onClick={() => remove(id)} className="w-3 h-3">
                <img src={iconCross} alt="delete icon" />
            </button>
        </li>
    )
}

export default TodoItem