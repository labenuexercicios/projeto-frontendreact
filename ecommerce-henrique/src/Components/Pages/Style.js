import styled from "styled-components";

export const Card = styled.div`
 display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem 1rem;
    flex-wrap: wrap;
    gap: 0.6rem;
    width: 100%;
    background-color:#C5B4E3;
    border-radius: 1rem;
    box-shadow: 1px 1px 20px white;
    :hover{
        box-shadow: none !important;
        transition: all 0.3s ease 0s;
    }
`

export const Image = styled.img`
    width: 300px;
    height: 200px;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    
`

export const Button = styled.button`
    width: 80px;
    height: 30px;
    border:2px solid black;
    /* box-shadow: 10px 10px 10px black; */
    transition: all 0.3s ease 0s;
    
    outline: none;
    :hover{
        background-color: #2E1A47;
        cursor: pointer;
        color: white;
    }
`
export const Div = styled.div`
margin:0.5rem;
`

