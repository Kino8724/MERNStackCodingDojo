import Book from "../models/book.models.js";

const createBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.json(newBook);
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find()
    res.json(allBooks)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
    
  }
}

const getBookByID = async (req, res) => {
  try {
    const foundBook = await Book.findById(req.params.id)
    res.json(foundBook)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

const updateBook = async (req, res) => {
  const options = {
    new : true,
    runValidators: true
  }
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body , options)
    res.json(updatedBook)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
    
  }
}

const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findOneAndDelete(req.params.id)
    res.json(deletedBook)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
    
  }
}

export{
  createBook,
  getAllBooks,
  getBookByID,
  updateBook,
  deleteBook 
}
