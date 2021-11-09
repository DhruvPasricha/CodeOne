import React, { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Playground from './components/Playground'
import NavbarComp from './components/Navbar'
import { languages } from './components/Languages'

export default function App() {
  const [currentLang, setCurrentLang] = useState('C++ ')

  function handleClick(newLang, index) {
    let temp = currentLang
    setCurrentLang(newLang)
    languages[index] = temp
    languages.sort()
  }

  return (
    <div>
      <NavbarComp changeLang={handleClick} currentLang={currentLang} />
      <Playground currentLang={currentLang} />
    </div>
  )
}
