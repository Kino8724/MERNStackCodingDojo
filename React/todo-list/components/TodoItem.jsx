import { useState } from "react"

const TodoItem = (props) => {
  const { todo } = props
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted)
  const swapCompleted = (e) => {
    isCompleted ? setIsCompleted(false) : setIsCompleted(true)

  }
  const deleteTodo = e => {
    e.target.parentElement.remove()
  }
  return (
    <div style={{ display: "flex" }}>
      {
        isCompleted ?
          <p style={{ textDecoration: "line-through" }}>{todo.task}</p> :
          <p>{todo.task}</p>

      }
      <input type="checkbox" onChange={swapCompleted} />
      <button onClick={deleteTodo}>Delete</button>

    </div>
  )
}
export default TodoItem
