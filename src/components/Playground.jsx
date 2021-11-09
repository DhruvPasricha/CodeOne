import React from "react";
import Editor from "@monaco-editor/react";
import { Col, Row } from "react-bootstrap";
import Input from "./Input";
import Output from "./Output";
import "monaco-editor/esm/vs/basic-languages/cpp/cpp";
import "monaco-editor/esm/vs/basic-languages/cpp/cpp.contribution";

const Playground = () => {
  return (
    <div>
      <Row>
        <Col>
          <Editor
            className="editor"
            width="70vw"
            height="100vh"
            defaultLanguage="cpp"
            defaultValue="#include <iostream>
            using namespace std;
            
            int main(){
              return 0;
          }"
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
