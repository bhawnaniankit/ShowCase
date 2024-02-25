import { useState } from 'react'
import './App.css'
import { SignUp } from '../components/signup'
import { Header } from '../components/Header'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LogIn } from '../components/login'
// const root = createRoot(document.getElementById("root"));


function App() {
  return (
    <>
      <Header></Header>

      <div className='signup-container'>
        <LogIn />
      </div>

      <div className='signup-container'>
        <SignUp></SignUp>
      </div>

    </>
  )
}

export default App
