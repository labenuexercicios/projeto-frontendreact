import styled from "styled-components";

export const FooterSection = styled.footer`
    height: 40vh;
    width: 100%;
    color: white;
    background-color: #272c99;

    .customer-information{
        display: flex;
        justify-content: center;
        gap: 100px;
        height: 30vh;
        padding-top: 30px;

        .institutional-group{
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding: 20px 0px;
            list-style: none;
        }

        .support-client-group{
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding: 20px 0px;
            list-style: none;
        }
    }

    li:hover{
        cursor: pointer;
        color: #CBD5E0;
    }
    
    h4{
        color: #4299e1;
        font-size: 22px;
    }

    a{
        color: white;
    }

    .social-midias{
        size: 1rem;

        :hover{
            cursor: pointer;
        }
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