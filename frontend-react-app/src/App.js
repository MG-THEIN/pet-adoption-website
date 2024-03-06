import "./App.css"
import Navbar from "./Components/Navbar/Navbar"
import SearchBar from "./Components/SearchBar/SearchBar"
import Footer from "./Components/Footer/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Signup from "./Pages/Singup"
import Item from "./Pages/Item"
import Save from "./Pages/Save"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <SearchBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/save" element={<Save />} />
          <Route path="item" element={<Item />}>
            <Route path=":itemId" element={<Item />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
