import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Aboutpage from './Pages/about/page'
import DepartmentPage from './Pages/Department/page'
import HomePage from './Component/Home/page'
import CalenderPage from './Pages/Calender/page'

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='about' element={<Aboutpage/>}/>
        <Route path='departmentpage' element={<DepartmentPage/>}/>
        <Route path='calenderpage' element={<CalenderPage/>}/>
     </Routes>
     </BrowserRouter>
       
    </>
  )
}

export default App
