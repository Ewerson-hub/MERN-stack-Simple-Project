import {Box} from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import Navbar from "./components/Navbar"
import { Toaster } from "./components/ui/toaster"

function App() {
  return (
    <Box minH={"100vh"} bg={{base:"gray.100", _dark:"gray.900"}} >
      <Navbar/>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/createPage" element={<CreatePage />}/>
      </Routes>
      
    </Box>
  )
}

export default App
