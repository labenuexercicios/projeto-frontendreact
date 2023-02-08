import styled from "styled-components"

export const CarrinhoContainer = styled.div`
width: ${(props)=> props.width};
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: start;


    
`
export const ItemCarrinho = styled.div`
    width: 100%;
    border-top: 2px solid black;
    text-align: left;
    ul, li{
        list-style-type: none;
        
    }


`