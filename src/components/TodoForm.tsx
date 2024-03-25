import { useState } from "react";

function TodoForm({ addTodo }) {
    const [text, setText] = useState("");

    const handleSubmit = (evt:React.FormEvent):void => {
        evt.preventDefault();
        addTodo(text);
        setText("");
    }

    const handleChange = (evt:React.ChangeEvent<HTMLInputElement>):void => {
        setText(evt.target.value);
    }

    return (
        <li className=" flex justify-between border-b-solid-[1px] h-[52px] py-4 px-5 bg-white mb-4">
            <form onSubmit={handleSubmit}>
                <button className="w-5 h-5 rounded-full bg-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6" /></svg>
                </button>
                <input type="text" value={text} onChange={handleChange} placeholder="Create a new todo..." />
            </form>
        </li>
    )
}

export default TodoForm