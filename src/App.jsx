import { useEffect, useState } from 'react'
import './App.css'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'
import useCrud from './hooks/useCrud'

function App() {

  const [closeForm, setCloseForm] = useState(true)

  const {users,getALlUsers,createNewUsers,deleteUserById,updateUserById} = useCrud()
  const [updateInfo, setUpdateInfo] = useState()

  useEffect( () => {
    getALlUsers()
  }, [])

  console.log(users);

  return (
    <div className="App">
      <div className='App__title-container'>
        <h1>Usuarios</h1>
        <button onClick={ () => setCloseForm(false)} className='App__btn'>+ Open Form</button>
      </div>
        <div className={`form-container ${closeForm && 'close__form'}`}>
        <FormUser
        createNewUsers={createNewUsers}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setUpdateInfo={setUpdateInfo}
        setCloseForm={setCloseForm}
        />
      </div>
      <div className='user-container'>
        {
          users?.map(user => (
            <UserCard
            key={user.id}
            deleteUserById={deleteUserById}
            user={user}
            setUpdateInfo={setUpdateInfo}
            setCloseForm={setCloseForm}
            />
            ))
        }
      </div>
    </div>
  )
}

export default App
