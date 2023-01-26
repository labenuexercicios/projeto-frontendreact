import styled from "styled-components";


// Montando o corpo do html
export const Mudadisplaydetudo = styled.body`
/* Boas praticas */
    padding: 0;
    margin: 0;
    box-sizing: border-box;
/* Boas praticas */

    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: 100px 1fr;
    height: 100vh;
    background-image: url("space6.jpg");
    background-size: 1705px 858px;

`

// Montando o estilo do pesquisar
export const Estilodopesquisar = styled.header`
    display: grid;
    grid-column: 2/3;
    grid-row: 1/2;
    color: white;

`
// Montando o estilo do filtro
export const Estilodofiltro = styled.nav`
    /* background-image: url("space7.jpg"); */
    /* background-size: 30000px 760px; */
    color: aliceblue;
    display: grid;
    border-radius: 9px;
    border: 1px solid black;
    grid-column: 1/2;
    grid-row: 2/3;
    /* background-blend-mode: luminosity; */
    /* grid-column-gap: 200px; */
    /* align-items: center; */
    /* justify-content: center; */
    /* justify-items: center; */
    /* align-content: center; */

`
export const Estilodocarrinho = styled.nav`
    /* background-image: url("space7.jpg"); */
    /* background-size: 30000px 760px; */
    color: white;
    display: grid;
    border-radius: 9px;
    border: 1px solid black;
    grid-column: 3/4;
    grid-row: 2/3;
    /* background-blend-mode: luminosity; */
    /* grid-column-gap: 200px; */
    /* align-items: center; */
    /* justify-content: center; */
    /* justify-items: center; */
    /* align-content: center; */

`

export const Estilodositens = styled.main`
    display: grid;
    grid-column: 2/3;
    grid-row: 2/3;
    /* justify-items: start; */
    /* display: flex;*/
    /* flex-direction: column; */
    color: white;

`

export const Escopodositens = styled.div`
    /* display: flex;
    flex-direction: column; */
    display: grid;
    grid-column: 2/3;
    grid-row: 2/3;
    border: 3px solid white;
    background-color: blueviolet;
    /* position: static; */
    /* align-items: center; */
    width: 17vw;
    height: 55vh;
    gap: 3px;
`