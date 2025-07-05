import React from 'react'

import Navbar from './components/Navbar/CustomNavbar'
import CustomFooter from './components/footer/CustomFooter'
import Home from './pages/Home'
import Contact from './pages/Contact'
import { Routes, Route } from 'react-router-dom'
function App() {
  
  return (
    <div className='App flex flex-col min-h-screen'>
      <div className='container mx-auto max-w-screen-xl py-4 flex-grow'>
        <Navbar/>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        
      </div>
      <CustomFooter/>

    </div>
  )
}

export default App
