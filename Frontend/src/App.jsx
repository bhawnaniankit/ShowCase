import { useState } from 'react'
import './App.css'
import { SignUp } from '../components/signup'
import { Header } from '../components/Header'
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <>
      <Header></Header>
      <div className='signup-container'>
        <SignUp></SignUp>
      </div>
    </>
  )
}

export default App
