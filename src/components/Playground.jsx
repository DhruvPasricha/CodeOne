import React from "react";
import Editor from "@monaco-editor/react";
import { Col, Row } from "react-bootstrap";
import Input from "./Input";
import Output from "./Output";

const Playground = (prop) => {
  return (
    <div>
      <Row>
        <Col>
          <Editor
            width="70vw"
            height="100vh"
            className="editor"
            width="70vw"
            height="100vh"
            defaultLanguage={prop.currentLang.code}
            defaultValue={prop.currentLang.sampleCode}
            theme="vs-dark"
          />
        </Col>

        <Col className="p-0">
          <Row>
            <Input />
          </Row>
          <Row>
            <Output />
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Playground;
