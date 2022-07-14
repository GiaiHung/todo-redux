import './App.css';
import { Typography } from 'antd'
import Filters from './components/Filters';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='container'>
      <Typography.Title level={2}>
        Todo App with REDUX
      </Typography.Title>
      <Filters />
      <TodoList />
    </div>
  );
}

export default App;