import { Table, Form, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; //import css boostrap
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "../../supabaseClient";
import * as moment from 'moment';

function TableWithInsert() {
  //definir estado
  const [infoTable, setTable] = useState([]);
  const { register, handleSubmit } = useForm();

  //populando tabela com informações do supabase
  useEffect(() => {
    (async () => {
      let { data } = await supabase.from("financas").select("*");
      //console.log(data);
      //const data = await res.json();
      setTable(data);
    })();
  }, []);
  //-------------------------------------------------------------------

  const onSubmit = (dataForm) => {
    (async () => {
      const { data, error } = await supabase
        .from("financas")
        .insert([dataForm]); //insert

      if (!data) {
        //console.log(error);
      } else {
        //console.log(">>> ", data);
        (async () => {
          let { data } = await supabase.from("financas").select("*");
          //console.log(data);
          //const data = await res.json();
          setTable(data);
        })();
      }
      //const data = await res.json();
    })();
    //console.log("data form >>", dataForm);
  };
  //console.log(errors);
  //populando tabela com informações do supabase
  //-------------------------------------------------------------------

  return (
    <div>
      {/* */}
      <p>Inserindo na tabela com informações de campos input.</p>
      {/* FORMS */}
      <Form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Row className="mb-3">
          {/* -----------------------------TÍTULO--------------------------------- */}
          <Form.Group as={Col} md="3" controlId="validationCustom01">
            <Form.Label>Título</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Digite..."
              {...register("titulo", { required: true, maxLength: 20 })}
              /*defaultValue="Mark"*/
            />
            <Form.Control.Feedback>Parece bom!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide a correct information.
            </Form.Control.Feedback>
          </Form.Group>
          {/* ----------------------------Tipo---------------------------------- */}
          <Form.Group as={Col} md="2" controlId="validationCustom02">
            <Form.Label>Tipo</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Digite..."
              {...register("tipo", { required: true, maxLength: 20 })}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide a correct information.
            </Form.Control.Feedback>
          </Form.Group>
          {/* ----------------------------Categoria---------------------------------- */}
          <Form.Group as={Col} md="2" controlId="validationCustom03">
            <Form.Label>Categoria</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Digite..."
              {...register("categoria", { required: true, maxLength: 20 })}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide a correct information.
            </Form.Control.Feedback>
          </Form.Group>
          {/* ------------------------------Valor-------------------------------- */}
          <Form.Group as={Col} md="2" controlId="validationCustom04">
            <Form.Label>Valor</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Digite..."
              {...register("valor", { required: true })}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide a correct information.
            </Form.Control.Feedback>
          </Form.Group>
          {/* --------------------------------DATA------------------------------ */}
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Data de Criação</Form.Label>
            <Form.Control
              required
              type="text"
              
              value={new Date().toLocaleDateString('en-CA')}
              placeholder={new Date().toLocaleDateString('en-CA')}
              {...register("data_criacao", { required: true })}
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
              <td>{rep.data_criacao != null ? moment(rep.data_criacao).format('DD/MM/YYYY') : "Não cadastrado"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TableWithInsert;
