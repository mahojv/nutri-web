import React from 'react'
import { Route, Routes } from 'react-router'
import Login from './pages/Login'
import AuthLayout from './components/layouts/AuthLayout'
import Home from './pages/Home'
import Pacientes from './pages/Pacientes'
import MeatPlans from './pages/MeatPlans'
import NewUserForm from './components/NewUserForm'
import NewDiet from './components/NewDiet'
import UserAdmin from './components/UserAdmin'
import MealList from './pages/MealList'
import NewMeal from './components/NewMeal'

export default function App() {
  return (
    <>
    
    <Routes>
      <Route element={<AuthLayout/>}>
      <Route path='/' element={<Home/>} />
      <Route path='/Patience' element={<Pacientes/>} />
      <Route path="/New-User" element={<NewUserForm/>} />
      <Route path="/New-Diet" element={<NewDiet/>} />
      <Route path="/Meals" element={<MealList/>} />
       <Route path="/Meals/New-Meal" element={<NewMeal/>} />
      <Route path='/meal-plans' element={<MeatPlans/>} />
      <Route path='/Patience/:id' element={<UserAdmin/>} />
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
