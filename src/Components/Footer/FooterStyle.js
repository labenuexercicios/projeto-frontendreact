import styled from 'styled-components';


export const FooterContainer = styled.div`
grid-row-start: 3;
display:flex;
flex-direction: row;
justify-content: space-evenly;
grid-row-gap: 10px;
padding: 16px;
background-color: #EDF4F7;

a{
    text-decoration: none;
    color: black;
}

img{
    width: 35px;
}

.historia{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 7px;
}

.contato{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 7px;
}

.redes-sociais{
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-direction: row;
    gap: 10px;
}
`
export const RocketContainer = styled.div`
  margin-right: -250px;
`;

