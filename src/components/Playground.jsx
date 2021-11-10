import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { Col, Row } from "react-bootstrap";
import Input from "./Input";
import Output from "./Output";
import axios from "axios";

const Playground = (prop) => {
  const [value, setValue] = useState(prop.currentLang.sampleCode);

  function handleChange(v, e) {
    setValue(v);
  }

  const getOutput = async () => {
    console.log(value);

    var data = JSON.stringify({
      code: value,
      language: prop.currentLang.extension,
      input: "",
    });

    var config = {
      method: "post",
      url: "https://cors-anywhere-jaagrav.herokuapp.com/https://codexweb.netlify.app/.netlify/functions/enforceCode",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data.output);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getOutput();
  });

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
            onChange={handleChange}
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
