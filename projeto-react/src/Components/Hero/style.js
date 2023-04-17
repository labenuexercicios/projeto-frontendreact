import styled from "styled-components";

export const HeroContainer = styled.div`
    height: 50vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15vh;
`

export const Heading = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    color: white;

    .heading{
            span:first-child{
            color: white;
        }
    }

    span{
        color: #4299e1;
        font-size: 3rem;
    }

    .sub-heading{
        font-size: 1.125rem;
        margin-top: 1.5rem;
        color: #CBD5E0;
    }

    .search-input{
        margin-top: 1.5rem;

        input{
            width: 100%;
            height: 2.5rem;
            font-size: 1rem;
            background-color: #CBD5E0;
            outline: 2px solid transparent;
            border-color: transparent;
            border-radius: 0.375rem;
        }
    }
`