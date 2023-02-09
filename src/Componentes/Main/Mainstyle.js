import styled from "styled-components";

export const Mainstyle = styled.main`
    display: grid;
    grid-template-rows: 3vh 87vh;
    grid-column: 2/3;
    grid-row: 2/3;
    flex-wrap: wrap;
    /* grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
    justify-items: center; */

`

export const Mainstyletitle = styled.header`
    display: grid;
    grid-row: 1/2;
    grid-template-columns: 1fr 4fr 1fr;
    border-bottom: 1px solid black;
`

export const Mainstylebody = styled.main`
    display: grid;
    grid-row: 2/4;
    margin-top: 30px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    justify-items: center;
`

export const Mainstyleordena = styled.div`
    display: grid;
    grid-column: 3/4;
    border: 1px solid black;

`
export const Mainstylecontador = styled.div`
    display: grid;
    grid-row: 1/2;
    grid-column: 1/2;
    /* border: 1px solid black; */
`

export const Styledositens = styled.div`
    margin-left: 90px;
    border: 1px solid black;
    border-radius: 20px;
    justify-content: space-around;
    padding: 20px 15px;
    align-items: center;


`

export const Button = styled.button`
    width: 200px;

`

