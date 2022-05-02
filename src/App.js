import React, { useState, useEffect } from "react";
//---
import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Financa from "./components/Financa";
//----
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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

/*
      <BrowserRouter>
        <Nav variant="tabs">
          <Nav.Link as={Link} to="/">
            Página Inicial
          </Nav.Link>
          <Nav.Link as={Link} to="/financa">
            Cadastro Financa
          </Nav.Link>
          <Nav.Link as={Link} to="/sobre">
            Sobre
          </Nav.Link>
        </Nav>

        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/financa" element={<Financa />}></Route>
          <Route path="/sobre" element={<Sobre />}></Route>
        </Routes>
      </BrowserRouter>
*/

export default function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">WebApp</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link to="/" href="/">
                  Home
                </Nav.Link>
                <Nav.Link to="/financa" href="/financa">
                  Finança
                </Nav.Link>
                <Nav.Link to="/sobre" href="/sobre">
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
