import styled from 'styled-components'

export const Card = styled.div`
  width:90%;
  /* padding:5% 18%; */
  overflow-y: auto; 
  display:flex;    
  gap:5%;  
  flex-wrap:wrap; 
  justify-content:center;
`;

export const Item = styled.div`
width:55%; 
height:60%;
gap:5%;
background-color:black;
border-radius:15px;
display:flex;
flex-direction:column;
align-items:center;
padding:15%;
`

export const Image = styled.img`
width:100px;
height:200px;
border-radius:5px;
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



/*   height: 85%;  */  
 /*  position:relative; */
  /* left: 50%;
  top:50%;  */
  /* min-width: 350px;
  transform:translate(-50%, -50%);  */