import styled from "styled-components";

export const FiltersContainer = styled.div`
    width: 100%;
    padding: 20px 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    color: white;

    select{
        height: 5vh;
    }
`

export const PriceMinMax = styled.div`
    display: flex;
    align-items: center;
    height: 5vh;
    
    input{
        height: 5vh;
    }
`

export const Search = styled.div`
    width: 30vw;
    height: 5vh;
    display: flex;
    justify-content: center;

    input{
        flex-grow: 2;
    }

`