import styled from 'styled-components'

export const CartContainer = styled.div`
    border-left: 1px solid black;
    width: 10vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-size: 12px;
    row-gap: 10px;

    button {
        cursor: pointer;
        padding: .8em;
        border: none;
        border-radius: 5px;
        background: lightskyblue;
        font-size: 12px;
    }
   
`