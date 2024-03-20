import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import OneParam from './components/OneParam'
import MultiParams from './components/MultiParams'
import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:param" element={<OneParam />} />
          <Route path="/:word/:text/:back" element={<MultiParams />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
