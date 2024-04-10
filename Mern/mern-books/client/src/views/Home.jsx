import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const Home = (props) => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8000/api/books/")
      .then((res) => {
        console.log(res.data)
        setBooks(res.data)
      })
      .catch((err) => {
        console.log(err)
      })

  }, [])

  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Pages</th>
          <th>Available</th>
          <th>Book Page</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => {
          return (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.pages}</td>
              <td>{book.isAvailable ? "Yes" : "No"}</td>
              <td><Link className="btn btn-success btn-sm" to={`books/${book._id}/details`}>Book Details</Link></td>
            </tr>
          )

        })}
      </tbody>
    </table>
  )

}
export default Home
