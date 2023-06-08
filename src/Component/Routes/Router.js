import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../Pages/Home/Home'
import Quizz from '../../Pages/Quizz/Quizz'
import Result from '../../Pages/Result/Result'

const Router = () => {
  return (
    <Routes>
        <Route path='Home' element={<Home/>}/>
        <Route path= 'Quizz' element={<Quizz/>}/>
        <Route path= 'Result' element={<Result/>}/>
    </Routes>
  )
}

export default Router;