import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; //import css boostrap
import React, { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";

function TableWithGet() {
  //definir estado
  const [infoTable, setTable] = useState([]);

  useEffect(() => {
    (async () => {
      let { data } = await supabase.from("financas").select("*");
      console.log(data);
      //const data = await res.json();
      setTable(data);
    })();
  }, []);

  return (
    <div>
      {/* */}
      <p>Inserindo na tabela com informações de campos input.</p>
      {/* */}
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

export default TableWithGet;
