import React from "react";
import { Col, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faCode } from "@fortawesome/free-solid-svg-icons";
import { languages } from "./Languages";

const NavbarComp = (props) => {
  const arr = [];

  for (let i = 1; i < languages.length; i++) {
    languages[i].name += " ";
    arr.push(
      <NavDropdown.Item onClick={() => props.changeLang(languages[i], i)}>
        {languages[i].name}
      </NavDropdown.Item>
    );
  }

  const logo = <FontAwesomeIcon icon={faCode} size="3x" color="white" />;

  return (
    <div>
      <div className="navbar p-3">
        <div>{logo}</div>
        <Col className="col-9">
          <span id="name">CODEFINITY</span>
        </Col>
        <Col className="col-1">
          <div>
            <NavDropdown
              title={props.currentLang.name}
              menuVariant="dark"
              id="language"
            >
              {arr}
            </NavDropdown>
          </div>
        </Col>
        <div
          id="runButton"
          className="justify-content-end"
          onClick={props.execute}
        >
          <FontAwesomeIcon icon={faPlayCircle} size="1x" spin={props.loading} />{" "}
          {!props.loading ? "Run" : ""}
        </div>
      </div>
    </div>
  );
};

export default NavbarComp;
