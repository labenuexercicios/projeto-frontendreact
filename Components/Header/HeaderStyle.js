import styled from 'styled-components'

export const StyledHeader = styled.header`
    height: 100px;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: fixed;  
    box-sizing: border-box;
    background-color: #37306B;
    box-shadow: 0 5px 10px #9E4784;
    font-weight: bold;
    padding: 0 0;
    font-family: 'Mina', sans-serif;


    a {
        color: #D27685;
        text-decoration: none;
        text-transform: uppercase;
    }
    a:hover {
        color: #9E4784;
    }
    ul {
        list-style: none;
        display: flex;
        padding: 10px;
        margin: 0;

    }
    li {
        padding: 0 1rem;
    }

    .logo{
        position: top ;
    }
    .carrinho box-icon{
        width:46px;
        height: 46px;
    }
    .total_de_Itens{
        position: absolute;
        top:1rem;
        right:7%;
        width: 1%;
        height: 2%;
        border:1px dotted red;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        padding: 0;
        font-size: 0.5;
        font-weight: 700;
        background-color: red;
    }
`;

