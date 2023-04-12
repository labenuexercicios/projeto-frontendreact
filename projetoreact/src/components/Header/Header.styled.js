import styled from "styled-components"

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    background-color:grey;
    height:200px;
    align-items:center;

    .logo{
        height: 180px;
        width:180px;
        border-radius:50px;
    }
    .nomeLogo{
        font-size:80px;
        font-family: Georgia, 'Times New Roman', Times, serif;

    }

    .grupoBotao{
        display: flex;
        align-items: center;
        justify-content: space-between;

        .img.Carrinho{
            border-radius:50px;
        }
        
    }

    button {
        background-color: black;
        color: white;
        border: none;
        width: 70px;
        height: 50px;
        margin: 0 4px;
        

        :hover {
            cursor: pointer;
            filter: brightness(1.1);
            background-color: lightgray;
        }

        :active {
            filter: brightness(0.95);
        }
    }
`