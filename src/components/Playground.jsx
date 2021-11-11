import React from 'react'
import Editor from '@monaco-editor/react'
import { Col, Row } from 'react-bootstrap'
import Input from './Input'
import Output from './Output'

const Playground = (prop) => {
  // useEffect(() => {
  //   getOutput()
  // })

  return (
    <div>
      <Row>
        <Col>
          <Editor
            width='70vw'
            height='100vh'
            className='editor'
            defaultLanguage={prop.currentLang.code}
            defaultValue={prop.currentLang.sampleCode}
            theme='vs-dark'
            onChange={prop.handleCode}
          />
        </Col>

        <Col className='p-0'>
          <Row>
            <Input inputHandler={prop.handleInput} />
          </Row>
          <Row>
            <Output />
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Playground
