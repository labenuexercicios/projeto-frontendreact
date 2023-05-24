import styled from "styled-components";

export const ContainerFilters = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    gap: 0.625rem;
    padding: 2rem;

    .filter-price {
        display: flex;
        gap: 1.2375rem;
        justify-content: center;
        margin-bottom: 1.25rem;
        height: 2.1875rem;
        }


    .sorting {
        display: flex;
        gap: 0.625rem;
    }

    label {
        font-size: 1.25rem;
        color: #fff;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
    }

    label:hover {
        cursor: pointer;
    }

    input{
        background-color: rgba(0, 0, 0, 0.1);
        outline: none;
        padding-left: 0.625rem;
    }

    select{
        background-color: rgba(0, 0, 0, 0.1);
        outline: none;
        border: none;
        height: 2.5rem;
        padding-left: 0.625rem;
    }

    option{
        background-color: rgba(0, 0, 0, 0.4);
        outline: none;
    }

`;