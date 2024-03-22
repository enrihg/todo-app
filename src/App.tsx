import './App.css';
import TodoList from './components/TodoList'

function App(): JSX.Element {
  return (
    <> 
      <main className='grid content-center divide-y px-4 bg-yellow-100 w-screen h-screen bg-red-40'>
      <TodoList/>
      </main>
    </>
  );
}

export default App;
