import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import './App.css'
import BookDetails from './views/BookDetails'
import Header from './components/Header'
import CreateBook from './views/CreateBook'
import UpdateBook from './views/UpdateBook'

function App() {

  return (
    <>
      <h1>Merning w/ Books</h1>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/books/:id/details' element={<BookDetails />} />
        <Route path='/create' element={<CreateBook />} />
        <Route path='/books/:id/update' element={<UpdateBook />} />
      </Routes>
    </>
  )
}

export default App
