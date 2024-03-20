import { useParams } from "react-router-dom"

const OneParam = (props) => {
  const { param } = useParams();
  if (isNaN(+param)) {
    return (
      <h1>Your word is: {param}</h1>
    )
  }
  return (
    <h1>Your number is: {param}</h1>
  )
}
export default OneParam
