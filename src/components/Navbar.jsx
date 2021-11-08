import React from "react";
import { Col, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function NavbarComp() {
  return (
    <div>
      <div className="navbar p-3">
        <Col className="col-10">
          <span id="name">DR IDE</span>
        </Col>
        <Col className="col-1">
          <div>
            <NavDropdown title="C++" menuVariant="dark" id="language">
              <NavDropdown.Item>Python</NavDropdown.Item>
              <NavDropdown.Item>JS</NavDropdown.Item>
              <NavDropdown.Item>HTML</NavDropdown.Item>
            </NavDropdown>
          </div>
        </Col>
        <div id="runButton" className="justify-content-end">
          <FontAwesomeIcon icon={faPlay} size="sm" /> Run
        </div>
      </div>
    </div>
  );
}
