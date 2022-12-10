import styled from "styled-components";

export const CaixaProduto = styled.article`
/* border:1px solid black ; */
margin: 10px;



width: 260px;
height: 360px;
background-color: white;
border-radius: 5px;
box-shadow: 0 0 4px gray;

.card-name {
    display: flex;
    align-items: center;
flex-direction: column;
font-size: 1rem;
margin-top: 8px;
}

.card-preco{
display: flex;
flex-direction: row;
justify-content: space-around;
margin-top: 10px;

span{
    font-weight:bold ;
    color: green
}

button{
    background-color: yellow;
    border: none;
    border-radius: 2px;
    box-shadow: 0 0 5px gray;
    height: 25px;
    width: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 20px;
        height: 20px;
    }


    
    :hover {
        cursor:pointer;
        filter: brightness(0.90);
    }

    :active {
        filter: brightness(0.85);
    }
}



}

img{
    display: flex;
    align-items: center;
    width: 216px;
    height: 268px;
    border-radius: px;
}
`
