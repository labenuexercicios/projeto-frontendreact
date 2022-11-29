import styled from 'styled-components';
import background from './assets/sci-fi-deep-space-background-loop-free-video.jpeg';

export const CartPageStyle = styled.div`
display: flex;
background-image: url(${background});
justify-content: space-between;

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
        gap: 12vh;
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