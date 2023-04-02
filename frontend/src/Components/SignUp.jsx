import React, { useContext, useState } from "react"
import { Context } from "../contexts/Context"
import { Link, useNavigate} from "react-router-dom"



const SignUp = () => {
  const { userSignUp,token } = useContext(Context)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [confirmPass, setConfirmPass] = useState("")
  const navigate = useNavigate()

  const handleSignUp = async (e) => {
    e.preventDefault()
    const data = await userSignUp(name, email, pass)
    if (data === token) {
      navigate("/")
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-purple-400">
      <div className="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
      <div className="absolute w-48 h-48 rounded-xl bg-purple-300 bottom-6 right-10 transform rotate-12 hidden md:block"></div>
      <div className="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block"></div>
      <div className="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
      <div className="z-20 rounded-2xl bg-white py-12 px-12 shadow-xl">
        <div>
          <h1 className="mb-4 cursor-pointer text-center text-3xl font-bold">
            Create An Account
          </h1>
          <p className="mb-8 w-80 cursor-pointer text-center text-sm font-semibold tracking-wide text-gray-700">
            Create an account to organize your personal todos
          </p>
        </div>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full rounded-lg border py-3 px-4 text-sm outline-none"
          />
          <input
            type="email"
            placeholder="Email Addresss"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full rounded-lg border py-3 px-4 text-sm outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="block w-full rounded-lg border py-3 px-4 text-sm outline-none"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            className="block w-full rounded-lg border py-3 px-4 text-sm outline-none"
          />
        </div>
        <div className="mt-6 text-center">
          <button className="w-64 rounded-2xl bg-purple-400 py-3 text-xl text-white"
          onClick={(e) => handleSignUp(e)}>
            Create Account
          </button>
          <p className="mt-4 text-sm">
            Already Have An Account?{" "}
            <Link to="/login">
              <span className="cursor-pointer underline"> Sign In</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUp
