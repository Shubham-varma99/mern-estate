import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import About from './pages/About'
import Header from './components/Header'


export default function App() {
  return (
    // 14 line we put header because we need to manage all those route in a header component.
    <BrowserRouter>  
    <Header/> 
      <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/sign-in' element={<SignIn></SignIn>}></Route>
         <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
         <Route path='/profile' element={<Profile></Profile>}></Route>
         <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </BrowserRouter>
   )
};