import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import TodoForm from "./components/TodoForm";
import TodoList from './components/TodoList';
import Filter from "./components/Filter";

type Todos = [{ id: string, text: string, completed: boolean, filtered: boolean }]

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
        setTodos((prevTodos: Todos) => {
            return [...prevTodos, { text: text, id: uuidv4(), completed: false, filtered: false }]
        })
    }

    const removeTodo = (id: string) => {
        setTodos((prevTodos: Todos) => {
            return prevTodos.filter((t) => t.id !== id);
        })
    }

    const toggleCompleted = (id: string) => {
        setTodos((item: Todos) =>
            item.map((todo) => (
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ))
        )
    }

    const clearCompleted = () => {
        todos.forEach((todo: {completed: boolean, id: string}) => {
            todo.completed === false ? todo : removeTodo(todo.id)
        });
    }

    const showAll = () => {
        setTodos((item : Todos) =>
            item.map((todo) => (
                {...todo, filtered: false}
            ))
        )
    }

    const showActive = () => {
        showAll()
        setTodos((item: Todos) =>
            item.map((todo) => (
                todo.completed ? {...todo, filtered: true} : todo
            ))
        )
    }

    const showCompleted = () => {
        showAll()
        setTodos((item: Todos) =>
            item.map((todo) => (
                !todo.completed ? {...todo, filtered: true} : todo
            ))
        )
    }

    return (
        <Main >
            <Header />
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} toggleCompleted={toggleCompleted} clearCompleted={clearCompleted} removeTodo={removeTodo} />
            <Filter showAll={showAll} showActive={showActive} showCompleted={showCompleted} />
        </Main>
    );
}

export default App;
