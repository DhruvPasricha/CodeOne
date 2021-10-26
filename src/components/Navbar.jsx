import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Col, NavDropdown } from 'react-bootstrap'

export default function NavbarComp() {
  return (
    <div>
      <div className='navbar p-3'>
        <Col className='col-1'>
          <span id='name'>DR IDE</span>
        </Col>
        <Col>
          <NavDropdown title='C++' menuVariant='dark' id='language'>
            <NavDropdown.Item>Python</NavDropdown.Item>
            <NavDropdown.Item>JS</NavDropdown.Item>
            <NavDropdown.Item>HTML</NavDropdown.Item>
          </NavDropdown>
        </Col>
        <span id='runButton' className='justify-content-end'>
          Run
        </span>
      </div>
    </div>
  )
}
