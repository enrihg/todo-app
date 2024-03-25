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

    const addTodo = (text:string) => {
        setTodos(prevTodos => {
        return [...prevTodos, { text:text, id: 8, completed:false}] //cambiar el id!!!
        })
    }

    const removeTodo = (id:number) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((t) => t.id !== id);
        })
    }

    return (
        <ul>
            <TodoForm addTodo={addTodo}/>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} remove={removeTodo}/>
            ))}
        </ul>
    )
}   

export default TodoList