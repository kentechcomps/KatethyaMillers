import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavigationBar from './Navigationbar.jsx'
import Home from './Home.jsx'
import { BrowserRouter , Routes , Route } from 'react-router'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes>
    </BrowserRouter>
  )
}

export default App
