import React, { useState, useEffect } from "react";
//---
import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Financa from "./components/Financa";
//----
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//para criar rotas
import { Button, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; //import css boostrap

export default function App() {
  <Router>
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
  </Router>;

  return <h1>HELOOO</h1>;
}
