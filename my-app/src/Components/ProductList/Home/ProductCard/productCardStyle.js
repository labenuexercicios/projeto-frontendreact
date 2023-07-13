import styled from 'styled-components'

export const Card = styled.div`
    padding: 1vw;
    margin: 0.7vw;
    display: grid;
    grid-template-rows: 16vw 8vw;
    width: 16vw;
    height: 24vw;
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,0.8) 70%, rgba(255,255,255,0) 100%);
    border-left: 2px solid #F0F0F0;
    border-right: 2px solid #F0F0F0;

    img {
        border-radius: 4px;
        width: 16vw;
        height: 16vw;
    }

    transition: transform 0.3s ease-in-out;

    &:hover {
    transform: scale(1.05);
    }

`

export const Etiqueta = styled.div`

    margin-top: 1vw;
    h4 {
        font-size: 1.1vw;
    }

    p {
        font-size: 0.9vw;
    }

    div {
        display: flex;
        justify-content: space-between;
        margin-top: 1vw;
    }

    button {
        border-radius: 2.1vw;
        height: 2.1vw;
        width: 2.1vw;
        
        border: none;
        background-color: #85F83F;
        p {
        font-size: 2.5vw;
        margin-top: -0.9vw;
        color: #49951B;
        }

        :hover {
            background-color: #49951B;
            
            p {
                color: #85F83F;
            }
        }

    }
 
`

export const Lista = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
