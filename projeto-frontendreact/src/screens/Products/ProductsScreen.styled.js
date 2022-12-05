import styled from "styled-components";

export const SideBarContainer = styled.div`
   .side-bar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    height: 120px;
    background-color: #E6E6E6;
    border-radius: 8px;
    padding: 6px;
    position: fixed;
    left: 10px;
    top: 180px;
}

input {
        text-align: center;
        padding: 8px;
        width: 99px;
        height: 21px;
        background: #E6E6E6;
        border: 1px solid #14b6b9;
        border-radius: 8px;
    
        ::-webkit-input-placeholder { 
            font-size: 12px;
            font-family: 'Cabin', sans-serif;
    }
}
    h3 {
        color:#757775;
    }
    
    select {
        font-size: 12px;
        font-family: 'Cabin', sans-serif;
        border: 1px solid #14b6b9;
        border-radius: 8px;
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
