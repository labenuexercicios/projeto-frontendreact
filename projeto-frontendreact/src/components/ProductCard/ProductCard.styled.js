import styled from "styled-components"

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #14b6b9;
    max-width: 500px;
    height: 300px;
    margin: 20px auto;
    background: #ffffff;
    border-radius: 22px;
    color: #757775;
    padding: 16px;


    button {
        background-color: #14b6b9;
        border: none;
        width: 30px;
        height: 30px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px auto;
        transition: all 0.5s;

        :hover {
            cursor: pointer;
            filter: brightness(1.1);
            -webkit-transform: scale(1.5);
            transform: scale(1.5);
        }

        :active {
            filter: brightness(0.95);
        }
    }

    .product-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .product-container > img {
        border-radius: 50%;
        width: 180px;
        height: 180px;
    }

`
