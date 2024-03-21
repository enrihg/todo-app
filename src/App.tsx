import './App.css';
import Todo from './components/Todo'

function App() {
  return (
    <>
      <main className='grid content-center divide-y px-4 bg-yellow-100 w-screen h-screen bg-red-40'>
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </main>
    </>
  );
}

export default App;
