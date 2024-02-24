import { useState } from 'react'
import './App.css'
import { SignUp } from '../components/signup'
import { Header } from '../components/Header'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LogIn } from '../components/login'


function App() {
  return (
    <>
      <Header></Header>
      <div className='signup-container'>
        <SignUp></SignUp>
      </div>
      <div className='signup-container'>
        <LogIn />
      </div>
    </>
  )
}

export default App
