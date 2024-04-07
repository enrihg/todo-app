import TodoItem from "./TodoItem";

function TodoList({ todos, clearCompleted, removeTodo }): JSX.Element {

    return (
        <ul className="rounded-[5px] divide-y overflow-hidden shadow-shadow">
            {todos.map((todo: { id: string; text: string; completed: boolean; }) => (
                <TodoItem key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} remove={removeTodo} />
            ))}
            <li className="flex justify-between bg-white dark:bg-dark-800 text-light-400 text-xs pt-4 px-5 pb-5">
                <span>{todos.length} items left</span>
                <button onClick={clearCompleted}>Clear Completed</button>
            </li>
        </ul>
    )
}

export default TodoList