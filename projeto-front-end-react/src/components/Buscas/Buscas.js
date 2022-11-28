import React from 'react';
import { BuscaContainer } from './styles'

export default function Buscas(props) {
  return (
    <BuscaContainer>
        <input
          className="pesquisa"
          placeholder="Busca"
          value={props.busca}
          onChange={(e) => { props.setBusca(e.target.value) }}
        />

    </BuscaContainer>
  );
}
