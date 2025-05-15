import React from 'react'
import { Route, Routes } from 'react-router'
import Login from './pages/Login'
import AuthLayout from './components/layouts/AuthLayout'
import Home from './pages/Home'
import Pacientes from './pages/Pacientes'
import MeatPlans from './pages/MeatPlans'
import Excercise from './pages/Excercise'
import NewUserForm from './components/NewUserForm'

export default function App() {
  return (
    <>
    
    <Routes>
      <Route element={<AuthLayout/>}>
      <Route path='/' element={<Home/>} />
      <Route path='/Patience' element={<Pacientes/>} />
      <Route path="/New-User" element={<NewUserForm/>} />
      <Route path='/meal-plans' element={<MeatPlans/>} />
      <Route path='/exercise' element={<Excercise/>} />
      <Route
            path="/forbiden"
            element={<h1>No tiene Permisos para acceder a este contenido</h1>}
          />
      
      </Route>

    <Route path='/login' element={<Login/>}/>

    </Routes>
    </>
  )
}
