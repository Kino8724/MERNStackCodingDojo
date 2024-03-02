import './App.css'
import PersonCard from './components/PersonCard'

function App() {
  return (
    <>
      <PersonCard firstName="Wyatt" lastName="Ptak" age={18} hairColor="Brown" />
      <PersonCard firstName="Grace" lastName="Ptak" age={18} hairColor="Brown" />
      <PersonCard firstName="Walker" lastName="Ptak" age={16} hairColor="Blonde" />
      <PersonCard firstName="Brianna" lastName="Ptak" age={14} hairColor="Blonde" />
    </>
  )
}

export default App
