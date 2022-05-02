import React, { useState, useEffect } from "react";
//---
import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Financa from "./components/Financa";
//----
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
//para criar rotas
import {
  Button,
  Nav,
  Navbar,
  Container,
  Offcanvas,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; //import css boostrap

export default function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar bg="dark" variant="dark">
          <Container fluid>
            <Navbar.Brand as={NavLink}  to="/" href="/">WebApp</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link as={NavLink} to="/" href="/">
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/financa" href="/financa">
                  Finança
                </Nav.Link>
                <Nav.Link as={NavLink} to="/sobre" href="/sobre">
                  Sobre
                </Nav.Link>
                {/*
                <NavDropdown title="Outros" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    {" "}
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                  Outros
                </Nav.Link>

                */}
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="container">
          <br/>
          <Routes>
            <Route path="/" index element={<Home />}></Route>
            <Route path="/financa" element={<Financa />}></Route>
            <Route path="/sobre" element={<Sobre />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
