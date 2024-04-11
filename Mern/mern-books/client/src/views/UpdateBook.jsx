import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const UpdateBook = (props) => {
  const { id } = useParams()
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [pages, setPages] = useState(0)
  const [isAvailable, setIsAvailable] = useState(true)
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:8000/api/books/${id}`).then((res) => {
      console.log(res.data)
      setTitle(res.data.title)
      setAuthor(res.data.author)
      setPages(res.data.pages)
      setIsAvailable(res.data.isAvailable)
    })

  }, [])

  const handleUpdateBook = (e) => {
    e.preventDefault()

    const updatedBook = { title, author, pages, isAvailable }

    axios.put(`http://localhost:8000/api/books/${id}`, updatedBook).then(() => navigate("/")).catch(err => setErrors(err.response.data.errors))

  }

  return (
    <form onSubmit={handleUpdateBook} className="my-4 d-flex flex-column">
      <div>
        <label className="px-3">Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        {errors.title && <p className="text-danger">{errors.title.message}</p>}
      </div>

      <div>
        <label className="px-3">Author:</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        {errors.author && <p className="text-danger">{errors.author.message}</p>}
      </div>

      <div>
        <label className="px-3">Pages:</label>
        <input type="number" min={0} value={pages} onChange={(e) => setPages(e.target.value)} />
        {errors.pages && <p className="text-danger">{errors.pages.message}</p>}
      </div>

      <div>
        <label className="px-3">Available?</label>
        <select value={isAvailable} onChange={(e) => setIsAvailable(e.target.value)}>
          <option value={true}>True</option>
          <option value={false}>False</option>

        </select>
        {errors.isAvailable && <p className="text-danger">{errors.isAvailable.message}</p>}
      </div>
      <div>
        <input type="submit" value="Update Book!" className="my-4 btn btn-primary btn-sm" />
      </div>

    </form>

  )
}
export default UpdateBook
