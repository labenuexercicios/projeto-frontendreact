
import styled from "styled-components";


export const FooterCtn = styled.div`

/*footer*/

display: flex;
flex-flow: column wrap;
  width: 90%;
height: 100%;
font-size: 15px;
max-height: 6vh;
left: 0;
right:0;


align-items: center;
z-index: 11;
  background-color:rgb(238, 239, 238);

 ul {
display: flex;
flex-flow: row wrap;
width: 100%;
height: 100%;


background-color: rgb(0, 0, 0);
}

/* footer */

 ul li {
  display: flex;
  flex-flow: column wrap;
width: 10%;
  height: 100%;
  font-size: 5px;
  background-color: rgb(238, 239, 238);
  justify-content: space-around;

}
 ul li a{
  align-items: center;
  align-self: center;
  text-decoration: none;
  list-style-type: none;
  color: rgb(22, 27, 1);
  font-size: 1.44rem;
  background-color:rgb(238, 239, 238);
  border-radius: 15px;

max-width: 90px;
  justify-content: space-around;
}
`

/*
export const Botao = styled.button`
  border: 0;
  background: orange;
  padding: 10px;
`;

export const GaragemContainer = styled.article`
  width: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  max-width: 300px;
  min-height: 400px;
  margin: 30px auto;
`;

export const Estacionamento = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
    margin: 30px auto;
`;*/
