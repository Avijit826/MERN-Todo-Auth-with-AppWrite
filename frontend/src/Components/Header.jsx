import React, { useContext } from "react"
import { Context } from "../contexts/Context"

const Header = () => {
  const { handleLogout, search, setSearch } = useContext(Context)
  return (
    <>
      <header className="p-4 bg-gray-600 bg-opacity-20 text-gray-800">
        <div className="container flex justify-between h-16 mx-auto">
          <div className="flex flex-1 items-center justify-between md:justify-end md:space-x-4">
            <div className="relative ml-16">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="p-1 w-6 h-6 text-gray-800"
                >
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
              </span>
              <input
                type="search"
                name="Search"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-40 py-2.5 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-100 text-gray-800 focus:bg-gray-50"
              />
            </div>
            <button
              type="button"
              className="ml-4 px-6 py-2 font-semibold rounded bg-gray-50 hover:bg-white hover:drop-shadow-lg text-gray-800"
              onClick={handleLogout
              }
            >
              Logout
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
