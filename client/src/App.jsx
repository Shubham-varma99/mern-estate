import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import About from './pages/About'


export default function App() {
  return (
    <BrowserRouter>   
      <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/sign-in' element={<SignIn></SignIn>}></Route>
         <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
         <Route path='/profile' element={<Profile></Profile>}></Route>
         <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </BrowserRouter>
   )
}
;