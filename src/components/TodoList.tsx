import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import iconMoon from "/src/assets/images/icon-moon.svg"
import iconSun from "/src/assets/images/icon-sun.svg"

const themeIcon = document.getElementById('theme-icon')! as HTMLImageElement ;

const initialTodos = [
    { id: uuidv4(), text: 'comprar yerba', completed: true },
    { id: uuidv4(), text: 'comprar verdura', completed: false },
    { id: uuidv4(), text: 'lavar la ropa', completed: true },
    { id: uuidv4(), text: 'terminar el todo proyect', completed: false },
]

function TodoList(): JSX.Element {
    const [todos, setTodos] = useState(initialTodos);

    const addTodo = (text: string) => {
        setTodos(prevTodos => {
            return [...prevTodos, { text: text, id: uuidv4(), completed: false }]
        })
    }

    const removeTodo = (id: string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((t) => t.id !== id);
        })
    }

    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark');
        if (document.documentElement.classList.contains('dark')){
            themeIcon.src = iconSun;
        } else {
            themeIcon.src = iconMoon;
        }
    }

    return (
        <>
            <header className="flex justify-between items-center mb-10">
                <span className="font-bold text-[20px] text-white tracking-[10px]">TODO</span>
                <button onClick={toggleTheme}>
                    <img id="theme-icon" className="w-5 h-5" src="" alt="light/dark theme"/>
                </button>
            </header>
            <TodoForm addTodo={addTodo} />
            <ul className="rounded-[5px] divide-y overflow-hidden">
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} remove={removeTodo} />
                ))}
            </ul>
        </>
    )
}

export default TodoList