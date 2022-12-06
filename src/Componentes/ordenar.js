import React from 'react';
import {ContainerProduto} from "./ordenar.styled"



  export function Ordenar(props) {

    const onChangeOrdenar = (e) => {
        props.setOrdenar(e.target.value);
      }
    
 
    return (

    <ContainerProduto>

        <select onChange={onChangeOrdenar}>
          <option value="">Ordenar</option>
          <option value="Crescente">Menor valor</option>
          <option value="Decrescente">Maior Valor</option>
        </select>

    </ContainerProduto>
  );
}