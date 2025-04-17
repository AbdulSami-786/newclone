import React from 'react'
import { Outlet } from 'react-router-dom'
import NAVbarr from './component/navbar.jsx'
import Footer from './component/Footer.jsx'
const App = () => {
  return (
  <>
  <NAVbarr/>
  <Outlet/>
  <Footer/>
  </>
  )
}

export default App