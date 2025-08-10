import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import About from "./pages/About.jsx"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About/>}/>
      </Routes> 
    </BrowserRouter>
  )
}

export default App
