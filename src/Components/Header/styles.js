import styled from "styled-components"

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px;
    width: 100%;
    height: 10vh;
    background-color: #012f6d;
    color: white;
    
`

export const Search = styled.div`
    width: 40vw;
    height: 5vh;
    display: flex;
    justify-content: center;

    input{
        flex-grow: 2;
    }

    button {
        background-color: white;
        color: #6BF6FF;
        border: none;
        width: 70px;
        height: 40px;
        height: 5vh;
        margin: 0 4px;

        :hover {
            cursor: pointer;
            filter: brightness(1.1);
        }

        :active {
            filter: brightness(0.95);
        }
    }

`

export const HeaderUl = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 20vw;

    li{
        text-decoration: none;
        color: currentColor;  
    }
    
`