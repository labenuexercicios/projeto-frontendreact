import styled from "styled-components";

export const FooterSection = styled.footer`
    height: 40vh;
    width: 100%;
    background-color: rgb(0,96,177);
    color: white;

    .customer-information{
        display: flex;
        justify-content: center;
        gap: 100px;
        height: 30vh;
        padding-top: 30px;
    }
    
    h4{
        color: #ffd100;
        font-size: 22px;
    }

    a{
        color: white;
    }

    .social-midias{
        size: 1rem;
    }

    .develop-by{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 10vh;
        gap: 10px;
        background-color: black;
        font-size: 20px;
    }
` 