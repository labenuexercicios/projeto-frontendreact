import styled from "styled-components"


export const CardCarrinho = styled.section`
position: relative;
display: flex;
flex-direction: column;
background:  #c8e7ff;
height: 100vh;
width: 100%;
gap: 10px;



`

export const CardItem = styled.section`
margin-top: 150px;
display: flex;
background:  #c8e7ff;
flex-direction: column;
align-items: cente;
justify-content: center;
gap:10px;
padding: 10px;
align-items: center;



img{
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
    height: 100px;
    width: 150px;
    border-radius:10px;
}

button{
    height: 30px;
    width: 50px;
    border-radius:50px;
    background: #c86bfa;
}
`
