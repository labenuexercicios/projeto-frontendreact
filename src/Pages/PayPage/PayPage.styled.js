import styled from "styled-components";



export const ContainerCart = styled.main`
    /* border: 2px solid red; */
    min-height: 82vh;
    width: 80%;
    display: flex;
    flex-direction: column;
`

export const CartPageStyle = styled.div`
    display: flex;

`
export const FinalCart = styled.div`
    /* border: 2px solid blue; */
    width: 20vw;
    display: flex;
    flex-direction: column;
    padding: 16px;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.300);
    color: white;
    text-align: center;

    div{
        display: flex;
        flex-direction: column;
        gap: 4vh;
        align-items: center;
    }

    button{
        width: 10vw;
        height: 4vh;
        background-color: green;
        border: none;
        border-radius: 8px;
        color: whitesmoke;
        box-shadow: 2px 4px 26px -3px rgba(255,255,255,1);
    }

    img{
        width: 15vw;
    }
`