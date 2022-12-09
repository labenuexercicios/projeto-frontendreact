import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    
    background-color: #fffbf4;
    
    width: 100vw;
    height: 5rem;
    
    padding: 1.5rem;

    h1 {
        margin: 0rem 2rem 0rem 0rem ;
    }

    .input{
        position: relative;
        font-size: 1.2em;
        padding: 0.2rem;
        display: inline-block;
        border-radius: 5rem;
    }
    
    .h1{
        font-size: 34px;
        font-family: monospace;
        color: black;
        text-shadow: 0.1em 0.2em 0.05em #333;
    }

   Button {
    width: 110px;
    margin: 110px;
   }
   
`;