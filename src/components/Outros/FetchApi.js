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
      const resposta = await fetch(
        "https://api.github.com/users/eduardotks/repos"
      );
      const data = await resposta.json();
      console.log(data);
      setRepositories(data);
    })();
  }, []);

  //vai disparar toda vez que o estado de "repositories1" mudar, por isso repositories está no final
  useEffect(() => {
    //separa os que são favoritos
    const filtered = repositories.filter( repo => repo.favorite );
    //quando um botão de favorito é clicado conta quantos favoritos tem.
    document.title = `Você tem ${filtered.length} favoritos` // substitui o title da aba do navegador
  }, [repositories])



  //relacionado ao botão, vai receber um ID referente ao botão clicado
  //se corresponder ao ID então retorna todos os itens do repositório e
  //marca a propriedade favorite como true ou false, caso não exista retorna o repositório
  function handleFavorite(id) {
    const newRepositories = repositories.map((repo) => {
      return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo;
    });
    setRepositories(newRepositories);
  }

  return (
    <ul>
      {repositories.map((rep) => (
        <li key={rep.id}>
          {rep.name}
          {rep.favorite && <span> (FAVORITO) </span>}
          <button onClick={() => handleFavorite(rep.id)}>Favoritar</button>
        </li>
      ))}
    </ul>
  );
}

export default Treinamento;
