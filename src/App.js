import React, {useState, Fragment} from 'react';
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm.js'
import EditUserForm from './forms/EditUserForm.js'

const App = () =>{

  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette'},
    { id: 2, name: 'Criag', username: 'siliconvalley'},
    { id: 3, name: 'Ben', username: 'abdccdl'},
  ]

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
    setEditing(false)
  }

  const [users, setUsers] = useState(usersData)

  const [editing, setEditing] = useState(false)

  const initialFormState = {id: null, name:'', username: ''}

  const [currentUser, setCurrentUser] = useState(initialFormState)

  const editRow = user => {
    setEditing(true)

    setCurrentUser({id: user.id, name: user.name, username: user.username})
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)

    setUsers(users.map(user => (user.id === id ? updatedUser :user )))
  }

  return(
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
        {
          editing ? (
            <Fragment>
              <h2>Edit User</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}/>
            </Fragment>
          ):(
            <Fragment>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </Fragment>
          )}
          {/* <h2>Add user</h2>
          <AddUserForm addUser={addUser} /> */}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser}/>
        </div>
      </div>
    </div>
  )
}

export default App;
