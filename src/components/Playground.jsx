import React from 'react'
import ControlledEditor from '@monaco-editor/react'
import { Col, Row } from 'react-bootstrap'
import Input from './Input'
import Output from './Output'

export default function Playground(prop) {
  return (
    <div className="playground">
      <Row>
        <Col>
          <ControlledEditor
            width='60vw'
            height='100vh'
            defaultLanguage={prop.currentLang.code}
            defaultValue={prop.currentLang.sampleCode}
            theme='vs-dark'
            onChange={prop.handleCode}
            options={{ fontSize: prop.fontSize }}
          />
        </Col>

        <Col className='p-0'>
          <Row>
            <Input inputHandler={prop.handleInput} />
          </Row>
          <Row>
            <Output out={prop.output} />
          </Row>
        </Col>
      </Row>
    </div>
  )
}
