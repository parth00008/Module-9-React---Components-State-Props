import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login'
import Logout from './Logout'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/logout' element={<Logout/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
