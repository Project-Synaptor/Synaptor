import React from 'react'
import LandingPage from './pages/landingpage'
import Dashboard from './pages/dashboard'
import Quiz from './pages/Quiz'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/quiz' element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
