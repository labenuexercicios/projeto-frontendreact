import styled from 'styled-components'

export const Card = styled.div`
  width:52%;
  height: 85%; 
  overflow-y: auto; 
  position:fixed;
  left: 50%;
  top:50%; 
  min-width: 350px;
  transform:translate(-50%, -50%); 
  display:flex;  
  border:1px solid black;
  gap:5%;
  flex-wrap:wrap; 
  justify-content:center;
`;

export const Item = styled.div`
width:200px;
height:400px;
gap:5%;
background-color:black;
border-radius:5px;
display:flex;
flex-direction:column;
align-items:center;
padding:2%;
`

export const Image = styled.img`
width:100px;
height:200px;
`

export const Code = styled.p` 
font-weight:0.1rem;
`

export const Title = styled.p` 
  font-weight:Bold; 
`;

export const Price = styled.p`
  font-weight: bold;   
`;

export const SendButton = styled.button`
    background-color:purple;
    border-radius: 8px;    
    width: 
    55%;
    padding:2%;    
    border: none;
    color: white;
    cursor: pointer;
    :hover{
        background-color: white;
        color: black
    }
`
