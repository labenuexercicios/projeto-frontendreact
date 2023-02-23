import styled from 'styled-components'

export const Card = styled.div`
  width:30%;
  height: 84%;  
  max-width: 30%;   
  position:fixed;
  left: 50%;
  top:50%;
  overflow-y: auto; 
  transform:translate(-10%, -50%); 
  border:1px solid black;
  text-align:center;
`;

export const Item = styled.div`
display:flex;
flex-direction: column;
flex-wrap:wrap;
align-items:center;
`

export const Image = styled.img`
width:100px;
height:200px;

`

export const Code = styled.p` 
font-weight:0.5rem;
`

export const Title = styled.p`
  border-top: 2px solid black;
  width:100%;
  height:100%;
  padding: 0.5rem 0;
  font-weight:Bold;
  text-align:center;
`;

export const Price = styled.p`
  font-weight: bold;
  text-transform: capitalize;
  padding: 0.5rem 0;
  text-align:center;
`;

export const SendButton = styled.button`
    background-color: #080401;
    border-radius: 8px;    
    width: 
    25%;
    padding:2%;    
    border: none;
    color: white;
    cursor: pointer;  
     
        
`
