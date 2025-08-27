import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home"
import Login from './pages/Login'
import Register from './pages/Register'
import { Toaster } from "@/components/ui/sonner"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      <Toaster richColors position="top-right"/>
    </>
  )
}

export default App
