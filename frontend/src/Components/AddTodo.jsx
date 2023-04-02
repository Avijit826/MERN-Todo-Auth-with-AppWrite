import React, { useState, useContext } from "react"
import { Context } from "../contexts/Context"

const AddTodo = () => {
  const [data, setData] = useState("")
  const { addTodo } = useContext(Context)

  const handleChange = (e) => {
    setData(e.target.value)
  }

  const handleInsert = async (e) => {
    e.preventDefault()
    data
      ? await addTodo({
          title: data
        })
      : console.log("Enter Todo Name")
    setData("")
  }

  return (
    <>
      <h1 className="sm:text-2xl text-xl font-medium title-font mb-2 text-gray-50">
        Add New Todo
      </h1>
      <div className="flex mb-16 w-full justify-center items-end">
        <div className="relative mr-4 w-2/4">
          <input
            type="text"
            id="hero-field"
            name="hero-field"
            value={data}
            onChange={handleChange}
            className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-purple-400 focus:bg-gray-200 font-medium text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button
          className="inline-flex text-gray-800 bg-gray-50 border-0 py-2.5 px-6 focus:outline-none rounded font-medium text-base hover:bg-white hover:drop-shadow-lg"
          onClick={(e) => {
            handleInsert(e)
          }}
        >
          Insert Todo
        </button>
      </div>
    </>
  )
}

export default AddTodo
