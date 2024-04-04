import { Key, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import iconMoon from "/src/assets/images/icon-moon.svg"
import iconSun from "/src/assets/images/icon-sun.svg"

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("todos")!);
    if (!data) return [];
    return data;
}

function TodoList(): JSX.Element {
    const [todos, setTodos] = useState(getInitialData);
    const [darkTheme, setDarkTheme] = useState(false)
    const [completed, setCompleted] = useState(false)

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text: string) => {
        setTodos(prevTodos => {
            return [...prevTodos, { text: text, id: uuidv4(), completed: completed }]
        })
    }

    const removeTodo = (id: string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((t) => t.id !== id);
        })
    }

    const toggleCompleted = () => {
        setCompleted(!completed);
    }

    const clearCompleted = () => {
        setTodos((prevTodos) => {
            return prevTodos.filter((t) => {
                t.complete === true; console.log(todos.length)
            })
        })
    }

    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark');
        if (document.documentElement.classList.contains('dark')) {
            setDarkTheme(true)
        } else {
            setDarkTheme(false)
        }
    }

    return (
        <>
            <header className="flex justify-between items-center pt-12 mb-10">
                <span className="font-bold text-[20px] text-white tracking-[10px]">TODO</span>
                <button onClick={toggleTheme}>
                    <img id="theme-icon" className="w-5 h-5" src={darkTheme ? iconSun : iconMoon} alt="light/dark theme" />
                </button>
            </header>
            <TodoForm addTodo={addTodo} />
            <ul className="rounded-[5px] divide-y overflow-hidden shadow-shadow">
                {todos.map((todo: { id: string; text: string; completed: boolean; }) => (
                    <TodoItem key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} remove={removeTodo} />
                ))}
                <li className="flex justify-between bg-white dark:bg-dark-800 text-light-400 text-xs pt-4 px-5 pb-5">
                    <span>{todos.length} items left</span>
                    <button onClick={clearCompleted}>Clear Completed</button>
                </li>
            </ul>
        </>
    )
}

export default TodoList