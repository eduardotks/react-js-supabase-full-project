import {
  Button,
  Nav,
  Navbar,
  Container,
  Offcanvas,
  NavDropdown,
  Form,
  FormControl,
  Table,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; //import css boostrap
import React, { useState, useEffect } from "react";

function Treinamento() {
  // Carregar informações em um state, o primeiro índice é a variável, a segunda uma função.
  // Recebe um vetor de acordo com a documentação de useState.
  const [repositories, setRepositories] = useState([]);

  //useEffect recebe no parâmetro uma função (didmount, didunmount, etc) e o segundo parâmetro quais as circunstâncias a função deve ser executada.
  //useEffect entra em vigor quando algo no segundo parâmetro mudar.
  //posso usar vários useEffect.  
  useEffect(() => {
    (async () => {
      const resposta = await fetch("https://api.github.com/users/eduardotks/repos");
      const data = await resposta.json();
      console.log(data);
      setRepositories(data);
    })();
  }, []);
 


  return (
    <ul>
      {repositories.map((rep) => (
        <li key={rep.id}>{rep.name}</li>
      ))}
    </ul>
  );
}

export default Treinamento;
