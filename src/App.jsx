import React from 'react'
import { Outlet } from 'react-router-dom'
import NAVbarr from './component/navbar'
import Footer from './component/footer'
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