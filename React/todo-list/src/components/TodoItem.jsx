const TodoItem = (props) => {
  const { todo, handleToggle } = props

  const deleteTodo = e => {
    console.log(e)
    e.target.parentElement.remove()
  }
  return (
    <div style={{ display: "flex" }}>
      {
        todo.isCompleted ?
          <p style={{ textDecoration: "line-through" }}>{todo.task}</p> :
          <p>{todo.task}</p>

      }
      <input type="checkbox" onChange={() => { handleToggle(todo.id); console.log(todo) }} />
      <button onClick={deleteTodo}>Delete</button>

    </div>
  )
}
export default TodoItem
