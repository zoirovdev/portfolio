import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import About from "./pages/About.jsx"
import Projects from "./pages/Projects.jsx"
import Header from "./components/Header.jsx"
import Contact from "./pages/Contact.jsx"
import { ThemeProvider } from './contexts/ThemeContext';





function App() {
  return (
    <ThemeProvider >
    <BrowserRouter>
      <div>
	<Header />
        <Routes>
          <Route path="/" element={<About/>}/>
	  <Route path="/projects" element={<Projects/>}/>
	  <Route path="/contact" element={<Contact />}/>
        </Routes> 
      </div>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
