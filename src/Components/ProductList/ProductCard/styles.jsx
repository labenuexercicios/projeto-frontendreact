import styled from 'styled-components'

export const Card = styled.div` 
width:200vw;
height:80vh;  
  overflow-y: auto; 
  display:flex; 
  flex-wrap:wrap; 
  justify-content:center;  
`;

export const Item = styled.div`
width:30%; 
height:80%;
gap:2%;
background-color:black;
border-radius:15px;
display:flex;
flex-direction:column;
align-items:center;
padding:2%;
`

export const Image = styled.img`
width:70%;
height:60%;
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
    padding:2%;    
    border: none;
    color: white;
    cursor: pointer;
    box-shadow:4px 4px 0px gray;
    transition: transform 200ms ease-in-out;

    :hover{
        background-color: white;
        color: black;
        transform: scale(1.08);
    }
`



/*   height: 85%;  */  
 /*  position:relative; */
  /* left: 50%;
  top:50%;  */
  /* min-width: 350px;
  transform:translate(-50%, -50%);  */