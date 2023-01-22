import styled from "styled-components";


// Montando o corpo do html
export const Mudadisplaydetudo = styled.body`
/* Boas praticas */
    padding: 0;
    margin: 0;
    box-sizing: border-box;
/* Boas praticas */

    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 100px 1fr;
    height: 100vh;

`

// Montando o estilo do pesquisar
export const Estilodopesquisar = styled.header`
    display: grid;
    grid-column: 2/3;
    grid-row: 1/2;

`
// Montando o estilo do filtro
export const Estilodofiltro = styled.nav`
    background-image: url("space1.png");
    display: grid;
    border-radius: 9px;
    border: 1px solid black;
    grid-column: 1/2;
    grid-row: 2/3;
    /* align-items: center; */
    /* justify-content: center; */
    /* justify-items: center; */
    /* align-content: center; */

`
