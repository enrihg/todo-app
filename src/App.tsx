import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import TodoList from './components/TodoList'

function App(): JSX.Element {
  return (
    <Main>
      <Header/>
      <TodoList />
    </Main>
  );
}

export default App;
