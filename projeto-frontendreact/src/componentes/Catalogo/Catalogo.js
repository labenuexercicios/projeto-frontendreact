import { useState } from "react";
import Fantasia from "../Fantasia/Fantasia";
import Filtro from "../Filtro/Filtro";
import "./Catalogo.css";

const fantasias = [
  {
    id: 1,
    nome: "Patrulheira do Espaço",
    valor: 120,
    img: "/imagens/imagens-espaciais/fantasia-1.jpg",
  },
  {
    id: 2,
    nome: "Garota Interestelar",
    valor: 250,
    img: "/imagens/imagens-espaciais/fantasia-2.jpg",
  },
  {
    id: 3,
    nome: "Rainha das estrelas",
    valor: 300,
    img: "/imagens/imagens-espaciais/fantasia-3.jpg",
  },
  {
    id: 4,
    nome: "Farol das estrelas",
    valor: 550,
    img: "/imagens/imagens-espaciais/fantasia-4.jpg",
  },
];

const Catalogo = (props) => {
  const listaOrdenadaPadrao = fantasias.sort((a, b) =>
    a.nome < b.nome ? -1 : 1
  );

  const [listaFantasia, setListaFantasia] = useState(listaOrdenadaPadrao);
  const [ordemLista, setOrdemLista] = useState("crescente");

  const buscarLista = (nome) => {
    if (nome === "") {
      setListaFantasia(listaOrdenadaPadrao);
    } else {
      setListaFantasia(() =>
        listaOrdenadaPadrao.filter((fantasia) =>
          fantasia.nome.toLowerCase().includes(nome.toLowerCase())
        )
      );
    }
  };

  const filtrarMinimo = (valorMinimo) => {
    setListaFantasia(() =>
      listaOrdenadaPadrao.filter((fantasia) => fantasia.valor >= valorMinimo)
    );
  };

  const filtrarMaximo = (valorMaximo) => {
    setListaFantasia(() =>
      listaOrdenadaPadrao.filter((fantasia) => fantasia.valor <= valorMaximo)
    );
  };

  const ordernarLista = (event) => {
    const direcao = event.target.value;
    setOrdemLista(direcao);

    if (direcao === "crescente") {
      setListaFantasia(listaOrdenadaPadrao);
    } else {
      setListaFantasia(() =>
        listaFantasia.sort((a, b) => (a.id < b.id ? -1 : 1))
      );
    }
  };

  const arrayFantasias = listaFantasia.map((fantasia) => {
    return (
      <Fantasia
        key={fantasia.nome}
        nome={fantasia.nome}
        valor={fantasia.valor}
        img={fantasia.img}
        adicionarAoCarrinho={props.adicionarAoCarrinho}
        produto={fantasia}
      />
    );
  });

  return (
    <section className="catalogo">
      <div>
        <h4>Catálogo de Produtos</h4>

        <Filtro
          buscarLista={buscarLista}
          filtrarMinimo={filtrarMinimo}
          filtrarMaximo={filtrarMaximo}
        />

        <div className="ordernar-container">
          <p>Ordernação: </p>

          <select onChange={ordernarLista} value={ordemLista}>
            <option value="crescente">Crescente</option>
            <option value="descrescente">Decrescente</option>
          </select>
        </div>
      </div>

      {arrayFantasias}
    </section>
  );
};

export default Catalogo;
