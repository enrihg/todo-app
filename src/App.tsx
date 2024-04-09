import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import TodoForm from "./components/TodoForm";
import TodoList from './components/TodoList'

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("todos")!);
    if (!data) return [];
    return data;
}

function App(): JSX.Element {
    const [todos, setTodos] = useState(getInitialData);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

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

    const toggleCompleted = (id: string) => {
        setTodos((item) =>
            item.map((todo) => (
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ))
        )
    }

    const clearCompleted = () => {
        todos.forEach(todo => {
            todo.completed === false ? todo : removeTodo(todo.id)
        });
    }

    return (
        <Main>
            <Header />
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} toggleCompleted={toggleCompleted} clearCompleted={clearCompleted} removeTodo={removeTodo} />
        </Main>
    );
}

export default App;
