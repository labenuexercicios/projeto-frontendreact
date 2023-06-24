import styled from "styled-components";

export const StylesProductCard = styled.section`
    /* border: solid 1px black; */
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: space-around;
    /* height: 270px; */

    div {
        border: solid 1px black;
        display: grid;
    }

    p {
        margin: 10px 5px 0 5px;
    }

    button {
        margin: 5px;
        text-align: center;
        display: grid;
        justify-self: center;
    }

    h3 {
        display: flex;
        justify-content: center;
        align-items: center;
        border: solid 1px black;
        height: 230px;
        width: 220px;
    }
`