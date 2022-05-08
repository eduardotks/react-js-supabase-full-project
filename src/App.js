import React from "react";
//---
import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Financeiro from "./components/Financeiro";
import FetchApi from "./components/FetchApi";
import Geolocalizador from "./components/Geolocalizador";
import Tablewithget from "./components/TableWithGet";
//----
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
//para criar rotas
import {
  Button,
  Nav,
  Navbar,
  Container,
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
            <Navbar.Brand as={NavLink} to="/" href="/">
              ToolsApp
            </Navbar.Brand>
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
                <NavDropdown title="Treinamentos" id="navbarScrollingDropdown">
                  <NavDropdown.Item
                    as={NavLink}
                    to="/financeiro"
                    href="/financeiro"
                  >
                    Financeiro
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Outros" id="navbarScrollingDropdown">
                  {/*----------------------------------------------------*/}
                  <NavDropdown.Item
                    as={NavLink}
                    to="/fetchapi"
                    href="/fetchapi"
                  >
                    Fetch Api GitHub
                  </NavDropdown.Item>
                  {/*----------------------------------------------------*/}
                  <NavDropdown.Item
                    as={NavLink}
                    to="/geolocalizador"
                    href="/geolocalizador"
                  >
                    Geo Localizador
                  </NavDropdown.Item>
                  {/*----------------------------------------------------*/}
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  {/*----------------------------------------------------*/}
                  <NavDropdown.Item href="#action4">
                    {" "}
                    Another action
                  </NavDropdown.Item>
                  {/*----------------------------------------------------*/}
                  <NavDropdown.Divider />
                  {/*----------------------------------------------------*/}
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                  {/*----------------------------------------------------*/}
                </NavDropdown>

                <NavDropdown title="Tabelas" id="navbarScrollingDropdown">
                  {/*----------------------------------------------------*/}
                  <NavDropdown.Item
                    as={NavLink}
                    to="/tablewithget"
                    href="/tablewithget"
                  >
                    Get Tabela
                  </NavDropdown.Item>
                  {/*----------------------------------------------------*/}
                  <NavDropdown.Item
                    as={NavLink}
                    to="/tablewithinsert"
                    href="/tablewithinsert"
                  >
                    Insert Tabela
                  </NavDropdown.Item>
                  {/*----------------------------------------------------*/}
                  <NavDropdown.Item
                    as={NavLink}
                    to="/tablewithupdate"
                    href="/tablewithupdate"
                  >
                    Update Tabela
                  </NavDropdown.Item>
                  {/*----------------------------------------------------*/}
                </NavDropdown>
                {/*----------------------------------------------------*/}
                <Nav.Link href="#" disabled>
                  Example
                </Nav.Link>
                {/*----------------------------------------------------*/}
                <Nav.Link as={NavLink} to="/sobre" href="/sobre">
                  Sobre
                </Nav.Link>
                {/*----------------------------------------------------*/}
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
          <br />
          <Routes>
            <Route path="/" index element={<Home />}></Route>
            <Route path="/financeiro" element={<Financeiro />}></Route>
            <Route path="/sobre" element={<Sobre />}></Route>
            <Route path="/fetchapi" element={<FetchApi />}></Route>
            <Route path="/geolocalizador" element={<Geolocalizador />}></Route>
            <Route path="/tableWithGet" element={<Tablewithget />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
