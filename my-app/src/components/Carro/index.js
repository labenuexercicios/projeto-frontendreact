import React, { components } from "react";

import { Contador} from "./../Contador/";
import { CarroContainer, Card, CardItem, CardText, CardTitle} from "./styles";
import { useState } from "react";
export function Carro({ modelo, cor, ano, flex, adicionadoPor, imgCarro }) {
  console.log(`
destruturing  key+props value 
- passar objeto direto em parenteses de Carro ( quem recebe)

--------destruturing props.modelo----
Carro({modelo})
-------------retorna------------------
Carro.modelo = {modelo} = ${modelo} 
----------------------------------------
`);


  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };
  console.log(contador);
  const decrementar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    } else {
      alert(`Carro Vazio`);
    }
  };
console.log(contador)
  return (

    

<div>
            <CardTitle>{modelo}</CardTitle>
              <img src={imgCarro} alt="img do carro" />
            <CardText>Cor: {cor}</CardText>
            <CardText>Ano {ano}</CardText>
            <CardText>Adicionado por: {adicionadoPor}</CardText>
            <CardText>Flex: {flex ? "Sim" : "Não"}</CardText>
            
            <Contador
            contador={setContador}
            incrementar={incrementar + 1}
            decrementar={contador - 1}
            />
</div>


 

    
  );
}
