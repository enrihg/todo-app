import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Header from "./Header";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("todos")!);
    if (!data) return [];
    return data;
}

function TodoList(): JSX.Element {
    const [todos, setTodos] = useState(getInitialData);
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

    return (
        <>
            <Header/>
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