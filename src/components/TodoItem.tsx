type ComponentProps = { id: number, text: string, completed: boolean }

function TodoItem( {id, text, completed}:ComponentProps):JSX.Element {
    return (
        <li key={id} className=" flex justify-between border-b-solid-[1px] h-[52px] py-4 px-5 bg-white">
            <button className="w-5 h-5 rounded-full bg-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6" /></svg>
            </button>
            <input type="checkbox" name="" id="" />
            {text}
            <span>{completed ? "completed" : "not completed" }</span>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" /></svg>
            </button>
        </li>
    )
}

export default TodoItem