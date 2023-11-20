import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// pages 
import Landing from './Pages/Landing'
import SingleProject from './Pages/SingleProject'



// components


function App() {

  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/project/:name" element={<SingleProject/>} />
          </Routes>
      </Router>
    </>
  )
}

export default App
