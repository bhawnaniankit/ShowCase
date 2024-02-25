import React from 'react'
import ReactDOM from 'react-dom/client'
import { SignUp } from '../components/signup.jsx'
import { Header } from '../components/Header.jsx'
import { LogIn } from '../components/login.jsx'
import { Footer } from '../components/footer.jsx'
import { ImgSlider } from '../homeCompo/ImgSlider.jsx'
import { SideGrid } from '../homeCompo/sideGrid.jsx'
import { Home } from '../pages/home.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }} className='signup-container'>
        <SignUp></SignUp>
      </div>
      <Footer></Footer>
    </>
  },
  {
    path: "/log-in",
    element: <>
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }} className='login-container'>
        <LogIn></LogIn>
      </div>
      <Footer></Footer>

    </>
  },
  {
    path: "/home",
    element: <div className='mainDiv'>
      <Header></Header>
      <div className='homeContainer'>
        <ImgSlider></ImgSlider>
        <SideGrid></SideGrid>
      </div>
      <Footer></Footer>
    </div>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
