import TodoItem from "./TodoItem"
const ShowList = (props) => {
  const { todos, handleToggle } = props
  return (
    <>
      {
        todos.map(task => {
          return (
            <div key={task.id}>
              <TodoItem todo={task} handleToggle={handleToggle} />
            </div>
          )
        })
      }
    </>
  )
}
export default ShowList
