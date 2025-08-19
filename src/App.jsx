import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
    </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App