import styled from "styled-components";

export const DivInformation = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid white;
    
`

export const DivRedes = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-top: 1rem;
`

export const TitleRedes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    margin: 1rem 2rem 2rem 0;
`

export const DivPay = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-top: 1rem;
`

export const TitlePay = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
`

export const Li = styled.li`
  list-style: none;
`


export const A = styled.a`
    color: black;
    line-height: 1.8rem;
    text-decoration: none;
    :hover{
        text-decoration: underline;
    }

`

export const A1 = styled.a`
    color: white;
    line-height: 1.8rem;
    text-decoration: none;
    :hover{
        text-decoration: underline;
    }

`

export const DivStore = styled.div`
    margin-left: 1rem;
    margin-top: 1rem;
`

export const Ul = styled.ul `
    margin-top: 1rem;
`

export const Img = styled.img`
    :hover{
        transform: scale(1.2);        
    }
`

export const H3 = styled.h3`
    font-size: 0.6em;
    font-family: Arial, Helvetica, sans-serif
`



export const DivEnd = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: black;
    color: white;
`
export const DivFirst = styled.div`
    display: flex;
    width: 25vw;
    justify-content: space-between;
    margin-left: 1rem;
    align-items: center;
    color: white;
`

export const DivSecond = styled.div`
    text-align: right;
    margin: 0.5rem 1rem 0 0;
    display: flex;
    flex-direction: column;
    height: 5vh;
`