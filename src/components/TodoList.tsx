import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const initialTodos = [
    { id: 1, text: 'comprar yerba', completed: true },
    { id: 2, text: 'comprar verdura', completed: false },
    { id: 3, text: 'lavar la ropa', completed: true },
    { id: 4, text: 'terminar el todo proyect', completed: false },
]

function TodoList(): JSX.Element {
    const [todos, setTodos] = useState(initialTodos);

    const addTodo = (text) => {
        setTodos(prevTodos => {
        return [...prevTodos, { text:text, id: 8, completed:false}]
        })
    }

    return (
        <ul>
            <TodoForm addTodo={addTodo}/>
            {todos.map((todo) => (
                <TodoItem id={todo.id} text={todo.text} completed={todo.completed}/>
            ))}
        </ul>
    )
}   

export default TodoList