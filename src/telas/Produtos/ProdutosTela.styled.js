import styled from "styled-components";

export const Main = styled.main`
margin-top: 50px;

section {
    display: flex;
    flex-wrap: wrap;

    h1 {
        width: 100%;
        margin-top: 20px;
        margin-left: 50px;
}



    .welcome {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 4em;
    }
    
    .welcome h1{
        margin-top: -50px;
        margin-left: 750px;
        font-size: 2.5em;
        font-family: 'Poppins';
    }
    
    .welcome h1 span{
        color: black;
        border-radius: 0.5em;
        padding: 0 .2em;
        background-color: #ff7f50;
        font-family: 'Poppins';
        :hover {
            cursor: pointer;
            filter: brightness(1.1)
        }
    
        :active {
            filter: brightness(0.95)
        }
    }
    
    .welcome-logo p {
        margin-top: -50px;
        margin-left: 270px;
        font-size: 1.3em;
        font-family: 'Poppins';
    
    }

}


`;
