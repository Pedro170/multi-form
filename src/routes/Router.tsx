import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Step1 from '../Pages/FormStep1/Step1'
import Step2 from '../Pages/FormStep2/Step2'
import Step3 from '../Pages/FormStep3/Step3'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={ <Step1 /> } />
      <Route path="/steptwo" element={ <Step2 /> } />
      <Route path="steptwo/stepthree" element={ <Step3 /> } />
    </Routes>
  )
}

export default Router
