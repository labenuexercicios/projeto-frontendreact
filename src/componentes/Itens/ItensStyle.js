import styled from "styled-components";

export const ItenContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.2rem;
`

export const InfoCart = styled.div`
display: flex;
flex-wrap: wrap;
`

export const Texto2 = styled.p`
    color: #eee;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 600;
    margin-top: 10px;
`

export const Texto3 = styled.p`
    color: #eee;
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 600;
    margin-top: 10px;
`

export const Texto4 = styled.span`
    color: #03e9f4;
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 600;
    margin-top: 10px;
`

export const HR = styled.hr`
    border: 1px dashed white;
    margin: 1rem;
`

export const ButtonRemoveCard = styled.button`
  width: 40px;
  height: 40px;
  background: #050801;
  border-radius: 50%;
  color: #ffff;
  transition: .5s;
  
    &:hover {
        color: #03e9f4;
        box-shadow: 0 0 15px #03e9f4;
        text-shadow: 0 0 15px #03e9f4;
    }
`
