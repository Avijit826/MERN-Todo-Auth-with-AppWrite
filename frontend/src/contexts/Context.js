import { createContext, useState } from "react"
import axios from "axios"

const Context = createContext()

const ContextProvider = ({children}) =>{
    const url = process.env.REACT_APP_API_URL
    const [todos, setTodos] = useState()
    const [update, setUpdate] = useState(false)
    const [token, setToken] = useState("")
    const [search, setSearch] = useState("")
    const header = { headers:{'Authorization': "Bearer "+token}}

    const handleUpdate = () => {
        setUpdate(!update)
    }
    const handleLogout = () => {
        setToken("")
        handleUpdate()
    }

    const userLogin = async (email, password) => {
    await axios
      .post(`${url}/login`, { email, password })
      .then((res) => {
        setToken(res.data.token)
      })
      .catch((error) => {
        console.error(`ERROR>>>...................\n${error.message}`)
      })
    return token
  }

  const userSignUp = async (name, email, password) => {
    await axios
      .post(`${url}/signup`, { name, email, password })
      .then((res) => {
        setToken(res.data.token)
      })
      .catch((error) => {
        console.error(`ERROR>>>...................\n${error.message}`)
      })
    return token
  }
    const getTodos = ()=>{
        axios
      .get(`${url}/todo`,header)
      .then((res) => {
        console.log(res.data)
        setTodos(res.data)
        
      })
      .catch((err) => {
        console.log(err)
      })
    }
    const addTodo = async (data) => {
      await axios
        .post(`${url}/todo`, data,header)
        .then((res) => {
          console.log(res.data)
          handleUpdate()
        })
        .catch((err) => {
          console.log("Failed to create todo")
          console.log(err.message)
        })
    }
    const updateTodo = async (id, data) => {
        await axios
          .put(`${url}/todo/${id}`, data, header)
          .then((res) => {
            console.log(res.data)
            handleUpdate()
          })
          .catch((err) => {
            console.log("Failed to update todo task status")
            console.log(err.message)
          })
      }
      
      const deleteTodo = async (id) => {
        await axios
          .delete(`${url}/todo/${id}`,header)
          .then((res) => {
            console.log(res.data)
            handleUpdate()
          })
          .catch((err) => {
            console.log("Failed to delete todo")
            console.log(err.message)
          })
      }
      
      const addTask = async (_id, data) => {
        await axios
          .post(`${url}/todo/${_id}/tasks`, data, header)
          .then((res) => {
            console.log(res.data)
            handleUpdate()
          })
          .catch((err) => {
            console.log("Failed to add task")
            console.log(err.message)
          })
      }
      
      const updateTask = async (id, _id, data) => {
        await axios
          .put(`${url}/todo/${id}/tasks/${_id}`, data,header)
          .then((res) => {
            console.log(res.data)
            handleUpdate()
          })
          .catch((err) => {
            console.log("Failed to edit Task")
            console.log(err.message)
          })
      }
      
      const updateTaskStatus = async (id, _id, data) => {
        await axios
          .put(`${url}/todo/${id}/task/${_id}`, data,header)
          .then((res) => {
            console.log(res.data)
            handleUpdate()
          })
          .catch((err) => {
            console.log("Failed to update todo task status")
            console.log(err.message)
          })
      }
      
      const deleteTask = async (id, _id) => {
        await axios
          .delete(`${url}/todo/${id}/tasks/${_id}`,header)
          .then((res) => {
            console.log(res.data)
            handleUpdate()
          })
          .catch((err) => {
            console.log("Failed to delete task ")
            console.log(err.message)
          })
      }
    return(
        <Context.Provider
            value={{
                token,
                todos,
                setTodos,
                update,
                handleLogout,
                getTodos,
                addTodo,
                userLogin,
                userSignUp,
                updateTodo,
                deleteTodo,
                addTask,
                updateTask,
                updateTaskStatus,
                deleteTask,
                search,
                setSearch

            }}>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider }