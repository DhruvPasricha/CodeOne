import React from "react";
import Editor from "@monaco-editor/react";
import { Col, Row } from "react-bootstrap";
import Input from "./Input";
import Output from "./Output";

export default function Playground(prop) {
  return (
    <div className="playground">
      <Row>
        <Col>
          <Editor
            width="60vw"
            height="100vh"
            defaultLanguage={prop.currentLang.code}
            defaultValue={prop.code}
            theme="vs-dark"
            onChange={(value) => prop.handleCode(value)}
            options={{ fontSize: prop.fontSize }}
          />
        </Col>

        <Col className="p-0">
          <Row>
            <Input inputHandler={prop.handleInput} input={prop.input} />
          </Row>
          <Row>
            <Output out={prop.output} />
          </Row>
        </Col>
      </Row>
    </div>
  );
}
