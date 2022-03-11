import React from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./Components/Home"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="*" element={"Page Not Found"} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  )
}

export default App
