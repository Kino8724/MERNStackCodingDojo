import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import MainContent from './components/MainContent'

function App() {

  return (
    <div style={{ backgroundColor: "#ddd", padding: "25px", border: "3px solid black" }}>
      <Header />
      <div className='content'>
        <Navigation />
        <MainContent />
      </div>
    </div>
  )
}

export default App
