import { useState } from "react"
import axios from "axios"

const CreateBook = (props) => {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [pages, setPages] = useState(0)
  const [isAvailable, setIsAvailable] = useState(true)

  const createNewBook = (e) => {
    e.preventDefault()

    const newBook = { title, author, pages, isAvailable }

    axios.post("http://localhost:8000/api/books", newBook).then(console.log(newBook))

    setTitle("")
    setAuthor("")
    setPages(0)
    setIsAvailable(false)
  }

  return (
    <form onSubmit={createNewBook} className="my-4 d-flex flex-column">
      <div>
        <label className="px-3">Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div>
        <label className="px-3">Author:</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>

      <div>
        <label className="px-3">Pages:</label>
        <input type="number" min={0} value={pages} onChange={(e) => setPages(e.target.value)} />
      </div>

      <div>
        <label className="px-3">Available?</label>
        <select value={isAvailable} onChange={(e) => setIsAvailable(e.target.value)}>
          <option value={true}>True</option>
          <option value={false}>False</option>

        </select>
      </div>
      <div>
        <input type="submit" value="Create Book!" className="my-4 btn btn-primary btn-sm" />
      </div>

    </form>
  )
}
export default CreateBook
