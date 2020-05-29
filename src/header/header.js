import React from "react";
import {
    Navbar,
    FormControl,
    Button,
    Container,
    Col,
    InputGroup
} from "react-bootstrap";

import "./header.css";
import Logo from "../img/logo.png";


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="Navbar">
        <Container fluid>
        <Col lg={4} >
        <Navbar.Brand href="#home">
        <img
            src={Logo}
            alt="logo" 
            height="50px" 
            width="120px"
            style={{display: "inline-block"}}
        />&nbsp;
         <label className="Logoname">FELIX STORE</label>
    </Navbar.Brand>
        </Col>
          <Col lg={8} >
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              

                  <Col md={6} >
                      <InputGroup style={{ marginLeft: "auto", marginRight: "auto" }}>
                          <FormControl
                              placeholder="Search..."
                              aria-label="Search"
                              aria-describedby="basic-addon2"
                          />
                          <InputGroup.Append>
                              <Button variant="outline-warning">Search</Button>
                          </InputGroup.Append>
                      </InputGroup>
                  </Col>
                  <Col md={6} style={{ textAlign: "right" }}>
                      <label style={{ color: "white" }}>Profile</label>
                  </Col>

              
          </Navbar.Collapse>
          </Col>

            </Container>
        </Navbar>
    );
}

export default Header;