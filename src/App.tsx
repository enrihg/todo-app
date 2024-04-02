import './App.css';
import TodoList from './components/TodoList'

function App(): JSX.Element {
  return (
    <>
      <div className='bg-mobile-light dark:bg-mobile-dark h-[200px] w-screen z-[-1] absolute'></div>
      <main className=' font-plus-jakarta-sans divide-y dark:divide-dark-900 px-6 w-screen h-screen bg-red-40'>
        <TodoList />
      </main>
    </>
  );
}

export default App;
