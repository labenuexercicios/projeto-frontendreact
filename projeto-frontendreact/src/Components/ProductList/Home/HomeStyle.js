import styled from "styled-components";


export const HomeStyle = styled.div`
    padding: 1rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0 12vw 0 7vw;
`

export const Ordination = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
    padding-top: 1rem;

    @media screen and (max-width: 400px) {  
    padding-bottom: 0;
    padding-top: 0;
    flex-direction: column;
    }
`

export const ProductCardStyle = styled.li`
    display: flex;
    justify-content: center;
`

export const List = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem 15rem;

    @media screen and (max-width: 1300px) {  
        gap: 2rem 10rem;
    }
`

export const Option = styled.option`
    font-size: 13px;
    font-weight: 600;
`
export const Paragraph = styled.p`
    font-size: 13px;
`
export const Select = styled.select`
    font-weight: 600;
    color: black;
    border: 2px solid #8707ff;
    border-radius: 10px;
    background: transparent;
`