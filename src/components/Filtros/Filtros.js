import React from 'react';
import { FiltroContainer } from './styles'

export default function Filtros(props) {
  return (
    <FiltroContainer>
       <span className="ordem">
        <label
        >
          Ordenar por:
        </label>
        <select
          className="caixaordem"
          name="ordenacao"
          value={props.ordenacao}
          onChange={(e) => { props.setOrdenacao(e.target.value) }}
        >
          <option value="nome">Nome</option>
          <option value="fabricante">Fabricante</option>
          <option value="preco">Preço</option>
          <option value="empuxo">Empuxo</option>
        </select>
      </span>
      <span className="ordem">
        <label
        >
          Ordenar por:
        </label>
        <select
          className="caixaordem"
          value={props.crescente}
          onChange={(e) => { props.setCrescente(e.target.value) }}
        >
          <option value="cresce">Crescente</option>
          <option value="desce">Decrescente</option>
        </select>
      </span>
      <span className="preco">
        <label className="ipreco">Preço Mínimo:</label>
        <input
          type="number"
          className="pesquisa"
          value={props.precoMin}
          onChange={(e) => { props.setPrecoMin(e.target.value) }}
        />
      </span>
      <span className="preco">
        <label className="ipreco">Preço Máximo:</label>

        <input
          type="number"
          className="pesquisa"
          value={props.precoMax}
          onChange={(e) => { props.setPrecoMax(e.target.value) }}
        />

      </span>
     
     
    </FiltroContainer>
  );
}
