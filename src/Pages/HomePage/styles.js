import styled from "styled-components";

export const HomePageContainer = styled.div`
    display: flex;
    width: 100%;

    main {

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        max-width: 40%;

        padding: 1rem;


    }

    aside{
        min-width: 15% ;
    }

    form {

        background-color: gray;
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 70%;
        margin: auto;

        text-align: center;
        padding: 50px;
        

        margin: 5px 0px 0px 20px;

        button {
            margin-top: 5px;
            padding: 5px;
        }

    }

`