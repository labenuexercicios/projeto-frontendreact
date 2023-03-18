import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 20vw;
  height: 50vh;
  padding: 35px;
  border-radius: 20px;
  border: 2px solid #DCDCDC;
  :hover{
  border: 1px solid rgba(255, 255, 255, .25);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.45);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(5px);
  }
  

`

export const Image = styled.img`
    border-radius: 10px 10px 0 0;
`

export const Button = styled.button`
  width: 160px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  margin: 20px;
  height: 55px;
  text-align:center;
  align-self: center;
  border: none;
  background-size: 300% 100%;
  border-radius: 50px;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;

:hover {
  background-position: 100% 0;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
}

:focus {
  outline: none;
}

  background-image: linear-gradient(
    to right,
    #71b5b2,
    #417b78,
    #59929c,
    #38636c
  );
  box-shadow: 0 4px 15px 0 #71b5b2;

`

export const Paragraph = styled.p`
    align-self: center;
    color: #10262d;
    padding-top: 0.5rem;
    
`