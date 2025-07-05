import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Invest from './pages/Invest'
import Faqs from "./pages/Faqs"
import Stories from "./pages/Stories"
import SignInPage from './pages/account/SignInPage'
import CreateAccount from './pages/account/CreateAccount'
import Piggyvest_com from './pages/Piggyvest_com'
import Store from './pages/Store'
import Target from './pages/save/Target'
import HouseMoney from './pages/save/HouseMoney'
import PiggyBank from './pages/save/PiggyBank'
import SaveLock from './pages/save/SaveLock'
import FlexDollar from './pages/save/FlexDollar'
import FlexNaira from './pages/save/FlexNaira'
import Newsletter from './pages/resource/Newsletter'




const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/invest' element={<Invest />}/>
          <Route path='/stories' element={<Stories />}/>
          <Route path='/faqs' element={<Faqs />}/>
          <Route path='/store' element={<Store />}/>
          <Route path='/sign-in' element={<SignInPage />}/>
          <Route path='/create-account' element={<CreateAccount />}/>
          <Route path='/Piggyvest.com' element={<Piggyvest_com />}/>
          <Route path='/target' element={<Target />}/>
          <Route path='/house-money' element={<HouseMoney />}/>
          <Route path='/piggy-bank' element={<PiggyBank />}/>
          <Route path='/save-lock' element={<SaveLock />}/>
          <Route path='/flex-dollar' element={<FlexDollar />}/>
          <Route path='/flex-naira' element={<FlexNaira />}/>
          <Route path='//news-letter' element={<Newsletter />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App