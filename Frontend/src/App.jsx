import { useState } from 'react'
import './App.css'
import { SignUp } from '../components/signup'
import { Header } from '../components/Header'

function App() {
  return (
    <div className='bg'>
      <Header></Header>
      <SignUp></SignUp>
    </div>
  )
}

export default App
