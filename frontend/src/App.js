import { ContextProvider } from "./contexts/Context"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import LogIn from "./Components/LogIn"
import SignUp from "./Components/SignUp"
function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<LogIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
          </Routes>
        </BrowserRouter>
    </ContextProvider>
  )
}

export default App
