import { useState } from 'react'
import BoxDisplay from '../components/BoxDisplay'
import BoxForm from '../components/BoxForm'
import './App.css'

function App() {

  const [boxes, setBoxes] = useState([])
  const onNewBox = (newBox) => (setBoxes([...boxes, newBox]))
  return (
    <>
      <BoxForm onNewBox={onNewBox} />
      <BoxDisplay boxes={boxes} />

    </>
  )
}

export default App
