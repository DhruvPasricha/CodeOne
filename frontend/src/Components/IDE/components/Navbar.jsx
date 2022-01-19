import React from "react";
import { Col, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { languages } from "./Languages";
import { sizes } from "./Size";
import NavBarPrefix from "../../NavBarPrefix";

const NavbarComp = (props) => {
  const arr = [];

  const fontSizes = [];

  for (let i = 0; i < languages.length; i++) {
    arr.push(
      <NavDropdown.Item onClick={() => props.changeLang(languages[i], i)}>
        {languages[i].name}
      </NavDropdown.Item>
    );
  }

  for (let i = 0; i < sizes.length; i++) {
    fontSizes.push(
      <NavDropdown.Item
        onClick={() => props.changeFontSize(sizes[i].value, sizes[i].name)}
      >
        {sizes[i].name}
      </NavDropdown.Item>
    );
  }

  return (
    <div>
      <div className="navbar p-3">
        <NavBarPrefix name="Web Editor" />
        <Col className="m-0 p-0">
          <div>
            <NavDropdown
              title={props.fontSizeName}
              menuVariant="dark"
              id="fontsize"
            >
              {fontSizes}
            </NavDropdown>
          </div>
        </Col>
        <Col className="m-0 p-0">
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

        <Col>
          <div
            id="runButton"
            className="justify-content-end"
            onClick={props.execute}
          >
            <FontAwesomeIcon
              icon={faPlayCircle}
              size="1x"
              spin={props.loading}
            />{" "}
            {!props.loading ? "Run" : ""}
          </div>
        </Col>
      </div>
    </div>
  );
};

export default NavbarComp;
