import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

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

    return (
        <>
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