import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Playground from './components/Playground'
import NavbarComp from './components/Navbar'

export default function App() {
  return (
    <div>
      <NavbarComp />
      <Playground />
    </div>
  )
}
