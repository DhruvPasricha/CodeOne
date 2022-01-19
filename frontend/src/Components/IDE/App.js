import React, { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

import Playground from './components/Playground'
import NavbarComp from './components/Navbar'
import { languages } from './components/Languages'
import useLocalStorage from '../../hooks/useLocalStorage'

export function App({ socket }) {
  function comp(a, b) {
    if (a.name > b.name) return 1
    if (a.name < b.name) return -1
    return 0
  }
  languages.sort(comp)
  const [fontSize, setFontSize] = useLocalStorage('font-size', '18')
  const [fontSizeName, setFontSizeName] = useLocalStorage(
    'font-size-name',
    'Small'
  )

  const [currentLang, setCurrentLang] = useLocalStorage('lang', languages[0])
  const [value, setValue] = useLocalStorage('code', currentLang.sampleCode)
  const [inputData, setInputData] = useLocalStorage('input', '')
  const [outputData, setOutputData] = useLocalStorage('output', '')
  const [running, setRunning] = useState(false)

  function handleChange(v) {
    setValue(v)
  }

  function handleInput(inp) {
    setInputData(inp)
  }

  function changeFontSize(newFontSize, newFontSizeName) {
    setFontSize(newFontSize)
    setFontSizeName(newFontSizeName)
  }

  function handleClick(newLang, index) {
    setCurrentLang(newLang)
    // setValue(newLang.sampleCode)
  }

  const getOutput = async () => {
    setOutputData('')
    setRunning(true)
    console.log(value)
    console.log(inputData)

    var data = JSON.stringify({
      code: value,
      language: currentLang.extension,
      input: inputData,
    })

    var config = {
      method: 'post',
      url: 'https://cors-anywhere-jaagrav.herokuapp.com/https://codexweb.netlify.app/.netlify/functions/enforceCode',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    }

    axios(config)
      .then(function (response) {
        setRunning(false)
        setOutputData(response.data.output)
        console.log(response.data.output)
      })
      .catch(function (error) {
        setRunning(false)
        console.log(error)
        setOutputData(error)
      })
  }

  return (
    <div>
      <NavbarComp
        changeFontSize={changeFontSize}
        changeLang={handleClick}
        currentLang={currentLang}
        key={currentLang.code}
        execute={getOutput}
        loading={running}
        fontSize={fontSize}
        fontSizeName={fontSizeName}
      />
      <Playground
        currentLang={currentLang}
        key={currentLang.name}
        handleCode={handleChange}
        handleInput={handleInput}
        output={outputData}
        fontSize={fontSize}
        code={value}
        input={inputData}
        sockets={socket}
      />
    </div>
  )
}
