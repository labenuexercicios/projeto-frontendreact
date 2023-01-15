import React from "react";
import { CardContainer } from "./style";
import {GlobalContext} from "../contexts/GlobalContext"
import { useContext } from "react";


 export default  function CardProdutos({item}){
    const context = useContext(GlobalContext);

    //desistruturação aqui
    const {addBrinquedo} = context;
    
    return(

        
        <CardContainer>
            
        <div className="cardbrinquedos">
        <img src={item.imagem}/>
        <p>{item.nome}</p>
        <p>R${item.valor},00</p>
        <p>Descrição:{item.descricao}</p>
        <button onClick={()=>addBrinquedo(item)} >Comprar</button>
        </div>

        </CardContainer>

      

      


    )
};

