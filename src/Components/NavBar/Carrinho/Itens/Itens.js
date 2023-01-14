import React from "react";
import { ConjuntoDeItens } from "./estiloDosItens";

class Itens extends React.Component {
  render() {
    return (
      <ConjuntoDeItens>
        <p>{this.props.quantidade}x</p>
        <p>{this.props.nome}</p>
        <button onClick={this.props.onClick}>Remover</button>
      </ConjuntoDeItens>
    );
  }
}

export default Itens;
