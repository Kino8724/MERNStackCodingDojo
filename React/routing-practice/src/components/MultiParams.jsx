import { useParams } from "react-router-dom"

const MultiParams = (props) => {
  const { word, text, back } = useParams()
  if (isNaN(+word)) {
    return (
      <h1 style={{ color: text, backgroundColor: back }}>Your word is: {word}</h1>
    )
  } else {
    return (
      <h1 style={{ color: text, backgroundColor: back }}>Your number is: {word}</h1>
    )
  }


}
export default MultiParams
