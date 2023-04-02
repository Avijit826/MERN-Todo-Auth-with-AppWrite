import React,{useContext} from "react"
import { Context } from "../contexts/Context"
import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"

const SingleTask = ({ data, id}) => {
  const { _id, task, iscompleted } = data
  const { deleteTask, updateTask, updateTaskStatus } = useContext(Context)
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState("")

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  const handleEdit = (e) => {
    e.preventDefault()
    if (value) {
      updateTask(id, _id, {
        task: value,
      })
    }
    closeModal()
  }

  const handleStatus = (e) => {
    e.preventDefault()
    updateTaskStatus(id, _id, {
      iscompleted: !iscompleted,
    })
  }

  const handleDelete = (e) => {
    e.preventDefault()
    deleteTask(id, _id)
  }

  return (
      <div className="flex flex-wrap justify-between">
        <div className="space-x-2">
          {/* CheckBox */}
          <button
            type="button"
            className="flex items-center space-x-1.5"
            onClick={(e) => {
              handleStatus(e)
            }}
          >
            {/* Check status */}
            {iscompleted ? (
              <svg
                width="27px"
                height="27px"
                viewBox="-1.68 -1.68 27.36 27.36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M7 13L10 16L17 9"
                    stroke="#7c3aed"
                    strokeWidth="1.6320000000000001"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="#7c3aed"
                    strokeWidth="1.6320000000000001"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></circle>{" "}
                </g>
              </svg>
            ) : (
              <svg
                width="27px"
                height="27px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#000000"
                strokeWidth="0.00024000000000000003"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M12 21C10.22 21 8.47991 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89472 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17294C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36628 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C21 14.387 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.387 21 12 21ZM12 4.5C10.5166 4.5 9.0666 4.93987 7.83323 5.76398C6.59986 6.58809 5.63856 7.75943 5.07091 9.12988C4.50325 10.5003 4.35473 12.0083 4.64411 13.4632C4.9335 14.918 5.64781 16.2544 6.6967 17.3033C7.7456 18.3522 9.08197 19.0665 10.5368 19.3559C11.9917 19.6453 13.4997 19.4968 14.8701 18.9291C16.2406 18.3614 17.4119 17.4001 18.236 16.1668C19.0601 14.9334 19.5 13.4834 19.5 12C19.5 10.0109 18.7098 8.10323 17.3033 6.6967C15.8968 5.29018 13.9891 4.5 12 4.5Z"
                    fill="#7c3aed"
                  ></path>{" "}
                </g>
              </svg>
            )}
            {/* Task Title */}
            <h2
              className={
                iscompleted
                  ? "text-lg text-left text-gray-500 italic"
                  : "text-lg text-left pb-0.5 font-normal"
              }
            >
              {task}
            </h2>
          </button>
        </div>
        <div className="flex space-x-2 text-sm text-gray-600">
          {/* edit */}
          <button
            type="button"
            className="flex items-center space-x-1.5"
            onClick={openModal}
          >
            <svg
              width="27px"
              height="27px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
                  stroke="#7c3aed"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M16.04 3.02001L8.16 10.9C7.86 11.2 7.56 11.79 7.5 12.22L7.07 15.23C6.91 16.32 7.68 17.08 8.77 16.93L11.78 16.5C12.2 16.44 12.79 16.14 13.1 15.84L20.98 7.96001C22.34 6.60001 22.98 5.02001 20.98 3.02001C18.98 1.02001 17.4 1.66001 16.04 3.02001Z"
                  stroke="#7c3aed"
                  strokeWidth="1.2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M14.91 4.1499C15.58 6.5399 17.45 8.4099 19.85 9.0899"
                  stroke="#7c3aed"
                  strokeWidth="1.2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </button>
          {/* delete */}
          <button
            type="button"
            className="flex items-center space-x-1.5"
            onClick={(e) => handleDelete(e)}
          >
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M10 12V17"
                  stroke="#7c3aed"
                  strokeWidth="1.176"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M14 12V17"
                  stroke="#7c3aed"
                  strokeWidth="1.176"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M4 7H20"
                  stroke="#7c3aed"
                  strokeWidth="1.176"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                  stroke="#7c3aed"
                  strokeWidth="1.176"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                  stroke="#7c3aed"
                  strokeWidth="1.176"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </button>
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-lg mb-4 text-center font-medium leading-6 text-gray-900"
                      >
                        Edit Task
                      </Dialog.Title>
                      <div className="">
                        <input
                          type="name"
                          id="task"
                          name="task"
                          defaultValue={task}
                          onChange={handleChange}
                          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>

                      <div className="mt-4 flex justify-center">
                        <button
                          type="button"
                          className="inline-flex mr-4 justify-center rounded-md border border-transparent text-violet-700 bg-violet-200 px-4 py-2 text-sm font-medium  hover:bg-violet-300 focus:outline-none focus-visible:ring-2  focus-visible:ring-offset-2"
                          onClick={handleEdit}
                        >
                          Edit Task
                        </button>
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent text-red-700 bg-red-200 px-4 py-2 text-sm font-medium  hover:bg-red-300 focus:outline-none focus-visible:ring-2  focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Cancel
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
      </div>
  )
}

export default SingleTask