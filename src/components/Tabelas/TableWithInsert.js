import { Table, Form, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; //import css boostrap
import React, { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";

function TableWithInsert() {
  //definir estado
  const [infoTable, setTable] = useState([]);
  const [validated, setValidated] = useState(false);
  //const [dadosForm, setInsert] = useState([]);

  //
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log("validated > " , validated)
    debugger
    console.log("dados > " , form)

    
    event.preventDefault(); //evita reload na página
    setValidated(true);
  };

  //effect
  useEffect(() => {
    (async () => {
      let { data } = await supabase.from("financas").select("*");
      console.log(data);
      //const data = await res.json();
      setTable(data);
    })();
  }, []);
  //-------------------------------------------------------------------

  return (
    <div>
      {/* */}
      <p>Inserindo na tabela com informações de campos input.</p>
      {/* FORMS */}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          {/* -------------------------------------------------------------- */}
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Título</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Digite..."
              /*defaultValue="Mark"*/
            />
            <Form.Control.Feedback>Parece bom!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide a correct information.
            </Form.Control.Feedback>
          </Form.Group>
          {/* -------------------------------------------------------------- */}
          <Form.Group as={Col} md="3" controlId="validationCustom02">
            <Form.Label>Tipo</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Digite..."
              /*defaultValue="Otto"*/
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide a correct information.
            </Form.Control.Feedback>
          </Form.Group>
          {/* -------------------------------------------------------------- */}
          <Form.Group as={Col} md="3" controlId="validationCustom03">
            <Form.Label>Categoria</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Digite..."
              /*defaultValue="Otto"*/
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide a correct information.
            </Form.Control.Feedback>
          </Form.Group>
          {/* -------------------------------------------------------------- */}
          <Form.Group as={Col} md="2" controlId="validationCustom04">
            <Form.Label>Valor</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Digite..."
              /*defaultValue="Otto"*/
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide a correct information.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        {/* -------------------------------------------------------------- */}
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        {/* -------------------------------------------------------------- */}
        <Button type="submit">Salvar</Button>
      </Form>
      <br />
      {/* TABLE */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Título</th>
            <th>Tipo</th>
            <th>Categoria</th>
            <th>Valor</th>
            <th>Data de Criação</th>
          </tr>
        </thead>
        <tbody>
          {infoTable.map((rep) => (
            <tr key={rep.id}>
              <td>{rep.id}</td>
              <td>{rep.titulo}</td>
              <td>{rep.tipo}</td>
              <td>{rep.categoria}</td>
              <td>{rep.valor}</td>
              <td>{rep.data_criacao}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TableWithInsert;
