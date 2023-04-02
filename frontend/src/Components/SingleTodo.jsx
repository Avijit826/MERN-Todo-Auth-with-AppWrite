import React, { Fragment, useState,useContext} from "react"
import { Dialog, Transition } from "@headlessui/react"
import SingleTask from "./SingleTask"
import { Context } from "../contexts/Context"

const SingleTodo = ({ data }) => {
  const { _id, title, tasks } = data
  const { addTask, deleteTodo, updateTodo } = useContext(Context)
  const [isOpen, setIsOpen] = useState(false)
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  const incompleteItems = tasks.filter((data) => !data.iscompleted)
  const completeItems = tasks.filter((data) => data.iscompleted)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  function openAdd() {
    setOpen(true)
  }
  function closeAdd() {
    setOpen(false)
  }
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleAddTask = (e) => {
    e.preventDefault()
    if (value) {
      addTask(_id, {
        task: value,
      })
    } else console.log("Enter Task Name")
    setValue("")
    closeAdd()
  }

  const handleEdit = (e) => {
    e.preventDefault()
    if (value) {
      updateTodo(_id, {
        title: value,
      })
    }
    setValue("")
    closeModal()
  }

  const handleDelete = (e) => {
    e.preventDefault()
    deleteTodo(_id)
  }
  return (
    <>
      <div className="flex break-inside-avoid flex-col max-w-lg p-6 space-y-3 rounded-lg shadow-md bg-gray-50 text-gray-800">
        <div className="flex flex-wrap justify-between">
          {/* Todo Title */}
          <div className="space-x-2">
            <h2 className="mt-1 text-xl font-semibold">{title}</h2>
          </div>
          <div className="flex space-x-2 text-sm text-gray-600">
            {/* edit */}
            <button
              type="button"
              className="flex items-center p-1 space-x-1.5"
              onClick={openModal}
            >
              <svg
                width="32px"
                height="32px"
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

            {/* Insert */}
            <button
              type="button"
              className="flex items-center pl-1 space-x-1.5"
              onClick={openAdd}
            >
              <svg
                width="32px"
                height="32px"
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
                    d="M8 12H16"
                    stroke="#7c3aed"
                    strokeWidth="1.224"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M12 16V8"
                    stroke="#7c3aed"
                    strokeWidth="1.224"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                    stroke="#7c3aed"
                    strokeWidth="1.224"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </button>
          </div>
        </div>

        {/* Add Todo */}
        <Transition appear show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeAdd}>
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
                      Insert Task
                    </Dialog.Title>
                    <div className="">
                      <input
                        type="name"
                        id="task"
                        name="task"
                        onChange={handleChange}
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>

                    <div className="mt-4 flex justify-center">
                      <button
                        type="button"
                        className="inline-flex mr-4 justify-center rounded-md border border-transparent text-violet-700 bg-violet-200 px-4 py-2 text-sm font-medium  hover:bg-violet-300 focus:outline-none focus-visible:ring-2  focus-visible:ring-offset-2"
                        onClick={handleAddTask}
                      >
                        Add Task
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent text-red-700 bg-red-200 px-4 py-2 text-sm font-medium  hover:bg-red-300 focus:outline-none focus-visible:ring-2  focus-visible:ring-offset-2"
                        onClick={closeAdd}
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
        {/* Edit Todo */}
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
                      Edit Todo
                    </Dialog.Title>
                    <div className="">
                      <input
                        type="name"
                        id="task"
                        name="task"
                        defaultValue={title}
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
                        Edit Todo
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

        {incompleteItems.length
          ? incompleteItems.map((data, index) => (
              <SingleTask
                data={data}
                key={index}
                id={_id}
              />
            ))
          : null}
        {completeItems.length
          ? completeItems.map((data, index) => (
              <SingleTask
                data={data}
                key={index}
                id={_id}
              />
            ))
          : null}
        {tasks.length ? null : (
          <div className="flex flex-col items-center">
            <svg
              className="mt-6"
              xmlns="http://www.w3.org/2000/svg"
              height="100px"
              viewBox="0 0 647.63626 632.17383"
            >
              <path
                d="M687.3279,276.08691H512.81813a15.01828,15.01828,0,0,0-15,15v387.85l-2,.61005-42.81006,13.11a8.00676,8.00676,0,0,1-9.98974-5.31L315.678,271.39691a8.00313,8.00313,0,0,1,5.31006-9.99l65.97022-20.2,191.25-58.54,65.96972-20.2a7.98927,7.98927,0,0,1,9.99024,5.3l32.5498,106.32Z"
                transform="translate(-276.18187 -133.91309)"
                fill="#f2f2f2"
              />
              <path
                d="M725.408,274.08691l-39.23-128.14a16.99368,16.99368,0,0,0-21.23-11.28l-92.75,28.39L380.95827,221.60693l-92.75,28.4a17.0152,17.0152,0,0,0-11.28028,21.23l134.08008,437.93a17.02661,17.02661,0,0,0,16.26026,12.03,16.78926,16.78926,0,0,0,4.96972-.75l63.58008-19.46,2-.62v-2.09l-2,.61-64.16992,19.65a15.01489,15.01489,0,0,1-18.73-9.95l-134.06983-437.94a14.97935,14.97935,0,0,1,9.94971-18.73l92.75-28.4,191.24024-58.54,92.75-28.4a15.15551,15.15551,0,0,1,4.40966-.66,15.01461,15.01461,0,0,1,14.32032,10.61l39.0498,127.56.62012,2h2.08008Z"
                transform="translate(-276.18187 -133.91309)"
                fill="#3f3d56"
              />
              <path
                d="M398.86279,261.73389a9.0157,9.0157,0,0,1-8.61133-6.3667l-12.88037-42.07178a8.99884,8.99884,0,0,1,5.9712-11.24023l175.939-53.86377a9.00867,9.00867,0,0,1,11.24072,5.9707l12.88037,42.07227a9.01029,9.01029,0,0,1-5.9707,11.24072L401.49219,261.33887A8.976,8.976,0,0,1,398.86279,261.73389Z"
                transform="translate(-276.18187 -133.91309)"
                fill="#7c3aed"
              />
              <circle cx="190.15351" cy="24.95465" r="20" fill="#7c3aed" />
              <circle cx="190.15351" cy="24.95465" r="12.66462" fill="#fff" />
              <path
                d="M878.81836,716.08691h-338a8.50981,8.50981,0,0,1-8.5-8.5v-405a8.50951,8.50951,0,0,1,8.5-8.5h338a8.50982,8.50982,0,0,1,8.5,8.5v405A8.51013,8.51013,0,0,1,878.81836,716.08691Z"
                transform="translate(-276.18187 -133.91309)"
                fill="#e6e6e6"
              />
              <path
                d="M723.31813,274.08691h-210.5a17.02411,17.02411,0,0,0-17,17v407.8l2-.61v-407.19a15.01828,15.01828,0,0,1,15-15H723.93825Zm183.5,0h-394a17.02411,17.02411,0,0,0-17,17v458a17.0241,17.0241,0,0,0,17,17h394a17.0241,17.0241,0,0,0,17-17v-458A17.02411,17.02411,0,0,0,906.81813,274.08691Zm15,475a15.01828,15.01828,0,0,1-15,15h-394a15.01828,15.01828,0,0,1-15-15v-458a15.01828,15.01828,0,0,1,15-15h394a15.01828,15.01828,0,0,1,15,15Z"
                transform="translate(-276.18187 -133.91309)"
                fill="#3f3d56"
              />
              <path
                d="M801.81836,318.08691h-184a9.01015,9.01015,0,0,1-9-9v-44a9.01016,9.01016,0,0,1,9-9h184a9.01016,9.01016,0,0,1,9,9v44A9.01015,9.01015,0,0,1,801.81836,318.08691Z"
                transform="translate(-276.18187 -133.91309)"
                fill="#7c3aed"
              />
              <circle cx="433.63626" cy="105.17383" r="20" fill="#7c3aed" />
              <circle cx="433.63626" cy="105.17383" r="12.18187" fill="#fff" />
            </svg>
            <h2 className="font-medium p-4">No Tasks</h2>
            <button
              type="button"
              className="ml-4 px-20 py-2 font-semibold rounded-md text-violet-700 bg-violet-200 hover:bg-violet-300 focus:outline-none focus-visible:ring-2  focus-visible:ring-offset-2"
              onClick={(e) => handleDelete(e)}
            >
              Delete Todo
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default SingleTodo