import React from "react";
import Editor from "@monaco-editor/react";
import { Col, Row } from "react-bootstrap";
import Input from "./Input";
import Output from "./Output";
import { useEffect } from "react";
import useLocalStorage from "../../../hooks/useLocalStorage";

export default function Playground(prop) {
  const { currentLang } = prop;
  const [value, setValue] = useLocalStorage(
    `code-${currentLang.id}`,
    currentLang.sampleCode
  );
  const [inputData, setInputData] = useLocalStorage(
    `input-${currentLang.id}`,
    ""
  );

  useEffect(() => {
    prop.updateCodeValue(value);
  }, [value]);

  useEffect(() => {
    prop.updateInputValue(inputData);
  }, [inputData]);

  function handleCode(v, e) {
    setValue(v);
  }

  function handleInput(inp) {
    setInputData(inp);
  }

  return (
    <div className="playground">
      <Row>
        <Col>
          <Editor
            width="60vw"
            height="100vh"
            defaultLanguage={currentLang.code}
            defaultValue={value}
            theme="vs-dark"
            onChange={(value) => handleCode(value)}
            options={{ fontSize: prop.fontSize }}
          />
        </Col>

        <Col className="p-0">
          <Row>
            <Input inputHandler={handleInput} input={inputData} />
          </Row>
          <Row>
            <Output out={prop.output} />
          </Row>
        </Col>
      </Row>
    </div>
  );
}
