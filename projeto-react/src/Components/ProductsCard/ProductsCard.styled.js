import styled from "styled-components";

export const CardProduts = styled.main`


margin: 1em ;
margin-right: 0.2em;
border-radius: 5%;
overflow: hidden;
background-color: black;
color: white;
box-shadow: 0  0 10px  rgba(109, 3, 136, 0.8);



:hover {
    cursor: pointer;
    filter: brightness(1.1);
}

:active {
    filter: brightness(0.95)
}


img{
    width: 18em;
 
}

button{
    background-color: orange;
    width: 10em;
    height: 3em;
    border-radius: 5%;
    border: none;
    margin: 1em;
    margin-left: 10em;


    :hover {
    cursor: pointer;
    filter: brightness(1.1);
}

:active {
    filter: brightness(0.95)
}

div{
/* padding: 8px; */
}

.Name-Product-Card{
    
}


.card-price{
align-items: center;
}

}
`
