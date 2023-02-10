import { useState } from "react";
import "./Filtro.css";

const Filtro = (props) => {
  const [minimo, setMinimo] = useState(0);
  const [maximo, setMaximo] = useState(1000);
  const [busca, setBusca] = useState("");

  return (
    <div className="filtro-container">
      <div className="filtro">
        <p>Valor mínimo:</p>
        <input
          type="number"
          value={minimo}
          onChange={(e) => {
            const valorMinimo = e.target.value;
            setMinimo(valorMinimo);
            props.filtrarMinimo(valorMinimo);
          }}
        />
      </div>

      <div className="filtro">
        <p>Valor máximo:</p>
        <input
          type="number"
          value={maximo}
          onChange={(e) => {
            const valorMaximo = e.target.value;
            setMaximo(valorMaximo);
            props.filtrarMaximo(valorMaximo);
          }}
        />
      </div>

      <div className="filtro">
        <p>Buscar por nome:</p>
        <input
          type="text"
          value={busca}
          onChange={(e) => {
            const nome = e.target.value;
            setBusca(nome);
            props.buscarLista(nome);
          }}
        />
      </div>
    </div>
  );
};

export default Filtro;
