
import styled from 'styled-components'
export const Page = styled.div`
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100;300&display=swap");

  margin: 10vh auto;
  display: flex;
  font-family: "Raleway", sans-serif !important;
  height: 50vh;
  justify-content: space-around;
  align-items: center;
  background: rgb(255, 157, 9);

main{
    background-color: aliceblue;
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0px 6px 10px 0px rgba(27, 71, 71, 0.4);
    width: 80vw;
    min-height: 30vh;
}
@media screen (max-width: 720px){
section{
    display: flex;
    min-width: 100%;
    max-height: 50%;
  }

}

 section{
  width: 100%;
  min-height: 80%;
  background: crimson;
  box-shadow: 0px 6px 10px 0px rgba(39, 1, 36, 0.4);
  border-radius: 25px;
  text-align: center;
  justify-self: center;
 justify-content: center;
}


article{
  width: 80%;
  align-items: center;
  justify-content: center;

  background: white;
  margin-left: 10%;
  margin-top: 10%;
}

@media  screen and (max-width: 769px) {

  main{
    display: flex;
    flex-flow: row wrap;

    align-items: space-around;
  }
  main section {
    min-width: 80%;
    max-height: 20%;
    margin: 30px auto;
  }
}


.s2{
  width: 90%;
  background-color: bisque;
}

table{
  width: 100%;
  padding: 1rem;
  border-radius: 15px;

}

tr, td, th, tfoot {
  padding: 0.52rem;
  text-align: center;
  border: 1px groove orangered;
  padding: 30px auto;


  border-collapse: collapse;
}
`