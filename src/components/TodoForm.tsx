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
        <form onSubmit={handleSubmit} className="flex justify-start rounded-[5px] border-b-solid-[1px] h-[52px] py-4 px-5 bg-white dark:bg-dark-800 mb-4">
            <button type="submit" className="flex justify-center items-center w-5 h-5 rounded-full border dark:border-dark-600"></button>
            <input type="text" value={text} onChange={handleChange} placeholder="Create a new todo..." className="ml-3 w-full text-xs sm:text-sm lg:text-lg placeholder:text-xs placeholder:sm:text-sm placeholder:lg:text-lg dark:bg-dark-800 dark:text-dark-100" />
        </form>

    )
}

export default TodoForm