import axios from "axios"
import { useState } from "react"

const useCrud = () => {

  const [users, setUsers] = useState()


  const getALlUsers = () => {
    const URL = 'http://users-crud.academlo.tech/users/'
    axios.get(URL)
    .then(res => setUsers(res.data))
    .catch(err => console.log(err))
  }
  
  const createNewUsers = data => {
    const URL = 'http://users-crud.academlo.tech/users/'
    axios.post(URL, data)
    .then(res => {
      console.log(res.data)
      getALlUsers()
    })
    .catch(err => console.log(err))
  }

  const deleteUserById = id => {
    const URL = `http://users-crud.academlo.tech/users/${id}/`
    axios.delete(URL)
    .then(res => {
        console.log(res.data)
        getALlUsers()
    })
    .catch(err => console.log(err))
  }

  const updateUserById = (id, data) => {
    const URL = `http://users-crud.academlo.tech/users/${id}/`
    axios.put(URL, data)
    .then(res => {
      console.log(res.data)
      getALlUsers()
    })
    .catch(err => console.log(err))
  }

  return {users,
    getALlUsers,
    createNewUsers,
    deleteUserById,
    updateUserById
  }
}

export default useCrud