import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo-icon {
        margin-left: 55px;
    }

    input {
        text-align: center;
        padding: 8px;
        width: 500px;
        height: 50px;
        background: #E6E6E6;
        border: 1px solid #14b6b9;
        border-radius: 8px;
    
        ::-webkit-input-placeholder { 
            font-size: 18px;
            font-family: 'Cabin', sans-serif;
    }
}

    button {
        background-color: #14b6b9;
        border: none;
        width: 70px;
        height: 50px;
        border-radius: 8px;
        margin: 0 4px;

        :hover {
            cursor: pointer;
            filter: brightness(1.1);
        }

        :active {
            filter: brightness(0.95);
        }
    }

    
    .button-group {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .search {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

