import './App.css';
import Counter from './Pages/counter';
import ErrorBound from './Components/ErrorBound';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './Pages/todoList';

function App() {
  return (
    <div className="App">
      <h1>React Error Boundary Example</h1>
      <div className='child-component'>
        <div className='sub-component'>
          <ErrorBound >
            <Counter />
          </ErrorBound>
        </div>
        <div className='sub-component'>
          <ErrorBound>
            <TodoList />
          </ErrorBound>
        </div>
      </div>
    </div>
  );
}

export default App;
