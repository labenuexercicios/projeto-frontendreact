import styled from "styled-components";

export const HeaderContainer = styled.header`
border: 2px solid black;
display: flex;
justify-content: space-between;
background-color: black;
margin:-8px -8px;

.logo {
margin: 0px 50px;
}

.button-lupa {
    display: flex;
    align-items: center;
    margin-top: -35px;
    margin-left: 245px;
    height: 35px;
    justify-content: space-between;
}

.pesquisar {
    display: flex;
    align-items: center;
    margin-top: 50px;
    height: 35px;
    width:280px;
}

.button-grupo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 10px;
   
}

button {
    background-color: #ff6347;
    border: none;
    margin: 0 6px;

    :hover {
        cursor: pointer;
        filter: brightness(1.1)
    }

    :active {
        filter: brightness(0.95)
    }


    .botao-carrinho{
        position: relative;
        
    }


    .itens-carrinho span{
        position: absolute;
     
    }

    .itens-carrinho{
        border-radius: 30%;
    }
        
    
}
`
