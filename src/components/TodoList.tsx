import { useState } from "react";
import TodoItem from "./TodoItem";

const initialTodos = [
    { id: 1, text: 'comprar yerba', completed: false },
    { id: 2, text: 'comprar verdura', completed: false },
    { id: 3, text: 'lavar la ropa', completed: true },
    { id: 4, text: 'terminar el todo proyect', completed: false },
]

function TodoList(): JSX.Element {
    const [todos, setTodos] = useState(initialTodos);

    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem id={todo.id} text={todo.text} completed={todo.completed}/>
            ))}
        </ul>
    )
}   

export default TodoList