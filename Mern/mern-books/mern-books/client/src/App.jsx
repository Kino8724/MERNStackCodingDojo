import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import './App.css'
import BookDetails from './views/BookDetails'
import Header from './components/Header'
import CreateBook from './views/CreateBook'

function App() {

  return (
    <>
      <h1>Merning w/ Books</h1>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/books/:id/details' element={<BookDetails />} />
        <Route path='/create' element={<CreateBook />} />
      </Routes>
    </>
  )
}

export default App
