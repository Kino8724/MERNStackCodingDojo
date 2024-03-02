import { useState } from "react"

const PersonCard = props => {
  const { firstName, lastName, age, hairColor } = props
  const [currentAge, setAge] = useState(age)
  return (
    <>
      <h2>{lastName}, {firstName}</h2>
      <p>Age: {currentAge}</p>
      <p>Hair Color: {hairColor}</p>
      <button onClick={() => setAge(prevCurrentAge => prevCurrentAge + 1)}>Click to increment the age</button>
    </>
  )
}

export default PersonCard
