import styled from "styled-components"

export const Container = styled.div`
    background-color: #5967e8;   
    width: 100vw;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Navigation = styled.nav`  
    display: flex;    
    width: fit-content;
    height: 30px;
    gap: 20px;
`
export const A = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
    font-size: small;
    padding: 15px;
    border-radius: 6px;
    text-decoration: none;
    color: white;
    background-color: green;
    &:hover {
      background-color: black;
    }
`