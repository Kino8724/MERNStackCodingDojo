import './App.css'
import UserForm from '../components/UserForm'
import ShowUsers from '../components/ShowUsers'
import { useState } from 'react'

function App() {
  const [users, setUsers] = useState([])

  const onNewUser = (newUsers) => (setUsers([...users, newUsers]))

  return (
    <>
      <UserForm onNewUser={onNewUser} />
      <ShowUsers users={users} />
    </>
  )
}

export default App
