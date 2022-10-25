// import React from "react";
import { MainContainer, Produto, Card } from './styles'



export default function Produtos(props){
    
    

    return(
        <MainContainer>
        <Card>
        <Produto src={props.imagem}/>
        {props.nave}
        </Card>
       
        
        </MainContainer>

    );

}