import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Profile from './pages/Profile.jsx'
import SignUp from './pages/SignUp.jsx'
import SignIn from './pages/SignIn.jsx'
import About from './pages/About.jsx'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute.jsx'


export default function App() {
  return (
    // 14 line we put header because we need to manage all those route in a header component.
    <BrowserRouter>  
    <Header/> 
      <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/about' element={<About></About>}></Route>
         <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
         <Route path='/sign-in' element={<SignIn></SignIn>}></Route>
         <Route element={<PrivateRoute></PrivateRoute>}>
         <Route path='/profile' element={<Profile></Profile>}></Route>
         </Route>
      </Routes>
    </BrowserRouter>
   )
};