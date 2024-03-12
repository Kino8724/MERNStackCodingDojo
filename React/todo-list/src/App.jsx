import { useState } from 'react'
import TodoForm from "./components/TodoForm"
import ShowList from './components/ShowList'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  const handleToggle = (id) => {
    let toggle = todos.map(task => {
      return task.id == id ? { ...task, isCompleted: !task.isCompleted } : { ...task };
    });
    setTodos(toggle);
  }

  const onNewTodo = (newTodo) => (setTodos(prevTodos => ([...prevTodos, newTodo])));

  return (
    <>
      <TodoForm onNewTodo={onNewTodo} />
      <ShowList todos={todos} handleToggle={handleToggle} />
    </>
  )
}

export default App
