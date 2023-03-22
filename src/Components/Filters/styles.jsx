import styled from "styled-components";

export const ContainerFilter = styled.div`
    /* height:55vh;
    width:1vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;    
    padding:10% 0 0 2%; */
`

export const FilterForm = styled.form`    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;   
`
export const ValuesInput = styled.input`
    padding: 3%;    
    border-radius:5px;
    color:black; 
    `
export const StyledLabel = styled.label`
    width: 300px;
    display: flex;
    flex-direction:column;
    align-items: flex-start;    
    
`
export const Filtrar = styled.button`
background-color:  #ff4400;
    border-radius: 8px;
    cursor: pointer;
    width: 100px;
    padding: 5px;    
  box-shadow:4px 4px 0px gray;
  transition: transform 200ms ease-in-out;
      :hover{
        background-color: white;
        color: black;
        transform: scale(1.08);
    }
`

