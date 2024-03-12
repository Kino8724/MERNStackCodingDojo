import { useState } from "react"

const TodoForm = (props) => {
  const [id, setId] = useState(1)
  const [task, setTask] = useState("")
  const [isCompleted, setIsCompleted] = useState(false)
  const { onNewTodo } = props

  const createTodo = (e) => {
    e.preventDefault()

    const newTodo = { id, task, isCompleted }
    console.log(newTodo)
    onNewTodo(newTodo)
    setTask("")
    setId(id => id + 1)
  }

  const handleTask = (e) => {
    setTask(e.target.value)
  }

  return (
    <form onSubmit={createTodo}>
      <input type="hidden" value={id} />
      <div>
        <label>Task:</label>
        <input type="text" value={task} onChange={handleTask} />
      </div>
      <input type="submit" value="Add" />

    </form>
  )
}

export default TodoForm
