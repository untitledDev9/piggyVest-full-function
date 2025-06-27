import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Invest from './pages/Invest'
import Faqs from "./pages/Faqs"
import Stories from "./pages/Stories"
import Header from './static/Header'




const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/invest' element={<Invest />}/>
          <Route path='/stories' element={<Stories />}/>
          <Route path='/faqs' element={<Faqs />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App