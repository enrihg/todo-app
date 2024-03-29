import { useState } from "react";

type ComponentProps = {
    addTodo: (id: string) => void;
}

function TodoForm({ addTodo }: ComponentProps) {
    const [text, setText] = useState("");

    const handleSubmit = (evt: React.FormEvent): void => {
        evt.preventDefault();
        if (text !== "") {
            addTodo(text);
            setText("");
        }
    }

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
        setText(evt.target.value);
    }

    return (
        <form onSubmit={handleSubmit} className="flex justify-start rounded-[5px] border-b-solid-[1px] h-[52px] py-4 px-5 bg-white mb-4">
            <button className="flex justify-center items-center w-5 h-5 rounded-full border">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6" /></svg>
            </button>
            <input type="text" value={text} onChange={handleChange} placeholder="Create a new todo..." className="ml-3 w-full placeholder:text-xs" />
        </form>

    )
}

export default TodoForm