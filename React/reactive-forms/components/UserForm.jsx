import { useState } from "react";

const UserForm = (props) => {
  const [firstName, setFirstName] = useState("")
  const [firstNameError, setFirstNameError] = useState("")
  const [lastName, setLastName] = useState("")
  const [lastNameError, setLastNameError] = useState("")
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [confirm, setConfirm] = useState("")
  const [confirmError, setConfirmError] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const { onNewUser } = props

  const createUser = (e) => {
    e.preventDefault()

    const newUser = { firstName, lastName, email, password }
    onNewUser(newUser)
    // onNewUser(users)
    setFirstName("")
    setLastName("")
    setEmail("")
    setPassword("")
    setConfirm("")
    setSubmitted(true)
  }

  const handleFirstName = (e) => {
    setFirstName(e.target.value)
    if (e.target.value.length < 1) {
      setFirstNameError("First Name is required")
    } else if (e.target.value.length < 2) {
      setFirstNameError("First Name must be more than 2 characters")
    } else {
      setFirstNameError("")
    }
  }

  const handleLastName = (e) => {
    setLastName(e.target.value)
    if (e.target.value.length < 1) {
      setLastNameError("Last Name is required")
    } else if (e.target.value.length < 2) {
      setLastNameError("Last Name must be more than 2 characters")
    } else {
      setLastNameError("")
    }
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
    if (e.target.value.length < 1) {
      setEmailError("Email is required")
    } else if (e.target.value.length < 8) {
      setEmailError("Email must be more than 8 characters")
    } else {
      setEmailError("")
    }
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
    if (e.target.value.length < 1) {
      setPasswordError("Password is required")
    } else if (e.target.value.length < 8) {
      setPasswordError("Password must be more than 8 characters")
    } else {
      setPasswordError("")
    }
  }
  const handleConfirm = (e) => {
    setConfirm(e.target.value)
    if (e.target.value.length < 1) {
      setConfirmError("Confirm Password is required")
    } else if (e.target.value.length < 8) {
      setConfirmError("Confirm Password must be more than 8 characters")
    } else if (e.target.value != password) {
      setConfirmError("Does not match the password")
    } else {
      setConfirmError("")
    }
  }

  return (
    <form onSubmit={createUser}>
      {
        submitted ?
          <h3>You've created a user, submit again to create another one!</h3> :
          <h3>Welcome, please enter all the information and submit to create a user</h3>
      }
      <div>
        <label>First Name:</label>
        <input type="text" onChange={handleFirstName} />
        {
          firstNameError ?
            <p>{firstNameError}</p> :
            " "
        }
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" onChange={handleLastName} />
        {
          lastNameError ?
            <p>{lastNameError}</p> :
            " "
        }
      </div>
      <div>
        <label>Email:</label>
        <input type="email" onChange={handleEmail} />
        {
          emailError ?
            <p>{emailError}</p> :
            " "
        }
      </div>
      <div>
        <label>Password:</label>
        <input type="password" onChange={handlePassword} />
        {
          passwordError ?
            <p>{passwordError}</p> :
            " "
        }
      </div>
      <div>
        <label>Confirm Password:</label>
        <input type="password" onChange={handleConfirm} />
        {
          confirmError ?
            <p>{confirmError}</p> :
            " "
        }
      </div>
      <input type="submit" value="Add User" />

    </form>
  )
}

export default UserForm
