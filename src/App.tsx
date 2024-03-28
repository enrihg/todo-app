import './App.css';
import TodoList from './components/TodoList'

function App(): JSX.Element {
  return (
    <> 
      <main className='grid content-center font-plus-jakarta-sans divide-y px-6 bg-yellow-400 w-screen h-screen bg-red-40'>
      <TodoList/>
      </main>
    </>
  );
}

export default App;
