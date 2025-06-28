import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Invest from './pages/Invest'
import Faqs from "./pages/Faqs"
import Stories from "./pages/Stories"
import SignInPage from './pages/account/SignInPage'
import CreateAccount from './pages/account/CreateAccount'




const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/invest' element={<Invest />}/>
          <Route path='/stories' element={<Stories />}/>
          <Route path='/faqs' element={<Faqs />}/>
          <Route path='/sign-in' element={<SignInPage />}/>
          <Route path='/create-account' element={<CreateAccount />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App