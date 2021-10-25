import React from 'react'
import Editor from "@monaco-editor/react";
import "./App.css"
import Input from './components/Input';
import Output from './components/Output';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from "react-bootstrap";

export default function App() {
  return (
    <div>
      <Row>
        <Col><Editor
          width="70vw"
          height="100vh"
          defaultLanguage="html"
          defaultValue="#include <iostream>"
          theme="vs-dark"
        /></Col>

        <Col>
          <Row>
            <Input />
          </Row>
          <Row>
            <Output />
          </Row>
        </Col>
      </Row>
    </div>
  )
}
