import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
    </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App