import TodoItem from "./TodoItem";

type ComponentProps = {
    todos: [{ id: string, text: string, completed: boolean, filtered: boolean }],
    toggleCompleted: (id: string) => void;
    clearCompleted: () => void;
    removeTodo: (id: string) => void
}

function TodoList({ todos, toggleCompleted, clearCompleted, removeTodo }: ComponentProps): JSX.Element {

   let itemsCompleted = 0;

   todos.forEach(todo => {
        todo.completed ? itemsCompleted++ : itemsCompleted
   });

    return (
        <ul className="rounded-[5px] divide-y dark:divide-dark-700 overflow-hidden shadow-shadow">
            {todos.map((todo) => (
                <TodoItem key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} filtered={todo.filtered} toggle={toggleCompleted} remove={removeTodo} />
            ))}
            <li className="flex justify-between bg-white dark:bg-dark-800 text-light-400 text-xs sm:text-sm lg:text-lg pt-4 px-5 pb-5">
                <span>{todos.length- itemsCompleted} items left</span>
                <button onClick={clearCompleted}>Clear Completed</button>
            </li>
        </ul>
    )
}

export default TodoList