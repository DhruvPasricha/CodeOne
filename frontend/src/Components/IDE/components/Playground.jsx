import React, { useEffect } from 'react'
import Editor from '@monaco-editor/react'
import { Col, Row } from 'react-bootstrap'
import Input from './Input'
import Output from './Output'
import useLocalStorage from '../../../hooks/useLocalStorage'
import { useState } from 'react'

export default function Playground(prop) {
  const [currentCode, setCurrentCode] = useState()  // here we the value which is on the editor be it empty

  useEffect(() => {
    if (prop.sockets == null) return
    prop.sockets.emit('send-playground', prop.code)
  }, [prop.sockets, prop.code])

  useEffect(() => {
    if (prop.sockets == null) return
    prop.sockets.on('receive-playground', (val) => {
      console.log('recieve')
      // prop.handleCode(val)
      setCurrentCode(val)
    })
  }, [prop.sockets])

  return (
    <div className='playground'>
      <Row>
        <Col>
          <Editor
            width='60vw'
            height='100vh'
            defaultLanguage={prop.currentLang.code}
            value={currentCode}
            // defaultValue={prop.code}
            theme='vs-dark'
            // onMount={(monaco) => {
            //   monaco.getModel().applyEdits("hkdnwqinqw")
            // }}
            onChange={(value) => prop.handleCode(value)}
            options={{
              fontSize: prop.fontSize,
              autoIndent: 'full',
            }}
          />
        </Col>

        <Col className='p-0'>
          <Row>
            <Input inputHandler={prop.handleInput} input={prop.input} />
          </Row>
          <Row>
            <Output out={prop.output} />
          </Row>
        </Col>
      </Row>
    </div>
  )
}
