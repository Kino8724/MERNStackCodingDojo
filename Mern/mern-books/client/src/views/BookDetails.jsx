import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const BookDetails = (props) => {
  const [book, setBook] = useState({})
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:8000/api/books/${id}`)
      .then((res) => {
        console.log(res.data)
        setBook(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  const handleBorrowClick = (e) => {
    axios.delete(`http://localhost:8000/api/books/${id}`).then((res) => console.log("deleted: " + JSON.stringify(res.data))).finally(() => navigate("/"))
  }

  const availabilityMessage = () => {
    if (book.isAvailable) {
      return (
        <>
          <p>Book is available</p>
          <button onClick={handleBorrowClick} className="btn btn-danger btn-sm">Borrow</button>
        </>
      )
    } else {
      return <p>Book is not available</p>
    }
  }

  return (
    <>
      <h1>{book.title}</h1>
      <h2>{book.author}</h2>
      <p>Pages: {book.pages}</p>
      {availabilityMessage()}
    </>
  )

}
export default BookDetails
