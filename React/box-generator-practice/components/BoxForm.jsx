import { useState } from "react"

const BoxForm = (props) => {
  const [color, setColor] = useState("blue")
  const [size, setSize] = useState(150)
  const { onNewBox } = props

  const createBox = (e) => {
    e.preventDefault()

    const newBox = { color, size }
    onNewBox(newBox)
  }

  const handleColor = (e) => {
    setColor(e.target.value)
  }

  const handleSize = (e) => {
    setSize(e.target.value)
  }

  return (
    <form onSubmit={createBox}>
      <div>
        <label>Color:</label>
        <input type="color" onChange={handleColor} />
      </div>
      <div>
        <label>Size:</label>
        <input type="number" onChange={handleSize} />
      </div>
      <input type="submit" value="Create new box" />
    </form>
  )
}
export default BoxForm
