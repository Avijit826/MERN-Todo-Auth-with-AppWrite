import React, { useContext, useEffect } from 'react'
import { Context } from '../contexts/Context'
import TodosList from "./TodosList"
import Header from "./Header"
import AddTodo from "./AddTodo"
import { Link, useNavigate} from "react-router-dom"

const Home = () => {
    const {token,getTodos,todos,update} = useContext(Context)
    const navigate = useNavigate()
    useEffect(()=>{
      if(!(token)){
        navigate("/login")
      }
      if(token){
        getTodos()
      }
    },[update])
  return (
    <>
      <div className="min-h-screen bg-purple-400">
        <div className="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
        <Header />
        <div className="flex flex-wrap w-full flex-col my-4 items-center text-center">
          <AddTodo />
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-50">
            Todos List
          </h1>
        </div>
        <TodosList/>
      </div>

    </>
    )
}

export default Home