import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { ToggleContext } from "../App";

export default function NavBarPrefix(prop) {
  const logo = (
    <FontAwesomeIcon icon={faCode} size="3x" color="white" id="logo" />
  );

  const switchIcon = (
    <FontAwesomeIcon icon={faExchangeAlt} size="1x" color="white" id="logo" />
  );

  const IDEStyle = {
    position: "absolute",
    right: "41vw",
    width: "10vw",
  };

  const WebEditorStyle = {
    position: "absolute",
    right: "3vw",
  };

  const myStyle = prop.name === "IDE" ? WebEditorStyle : IDEStyle;

  return (
    <div className="navBarPrefix">
      <>
        <span>{logo}</span>
        <span id="name">【﻿ＣＯＤＥＯＮＥ】</span>
      </>
      <ToggleContext.Consumer>
        {(value) => (
          <Button onClick={value} variant=" m-0" id="toggleBtn" style={myStyle}>
            {switchIcon}
            {" " + prop.name}
          </Button>
        )}
      </ToggleContext.Consumer>
    </div>
  );
}
