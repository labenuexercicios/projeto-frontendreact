import styled from "styled-components"

export const SideBarCart = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 120px;
    background-color: #E6E6E6;
    border-radius: 12px;
    position: fixed;
    left: 10px;
    top: 180px;
    color:#757775;


    h3 {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-size: 16px;
    }


    button {

    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    align-items: center;
    background-color: #E6E6E6;
    border-radius: 8px;
    padding: 6px;
    position: fixed;
    top: 260px;
    border: none;
    background-color: #14b6b9;

    :hover {
            cursor: pointer;
            filter: brightness(1.1);
        }

        :active {
            filter: brightness(0.95);
        }
    }

`

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

        :hover {
            cursor: pointer;
            filter: brightness(1.1);
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