import styled from "styled-components";
import imageCards from "../../assets/backgroundCards.png"

export const Card = styled.div`
    width: 250px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 20px;
    background-color: #012f6d;
    color: white;
    font-weight: 300;

    img{
        width: 100%;
        height: 70%;
    }

    span{
        font-weight: 500;
        text-align: center;
    }
`