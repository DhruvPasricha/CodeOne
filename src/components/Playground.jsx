import React from "react";
import ControlledEditor from "@monaco-editor/react";
import { Col, Row } from "react-bootstrap";
import Input from "./Input";
import Output from "./Output";

export default function Playground(prop) {
  return (
    <div>
      <Row>
        <Col>
          <ControlledEditor
            width="70vw"
            height="100vh"
            defaultLanguage={prop.currentLang.code}
            defaultValue={prop.currentLang.sampleCode}
            theme="vs-dark"
            onChange={prop.handleCode}
            options={{ fontSize: 20 }}
          />
        </Col>

        <Col className="p-0">
          <Row>
            <Input inputHandler={prop.handleInput} />
          </Row>
          <Row>
            <Output out={prop.output} />
          </Row>
        </Col>
      </Row>
    </div>
  );
}
