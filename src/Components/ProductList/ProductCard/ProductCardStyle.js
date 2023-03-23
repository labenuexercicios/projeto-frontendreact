import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 15rem;
  height: 25rem;
  min-height: 30vh;
  padding: 1rem;
  margin-left: -1rem;
  border-radius: 10px;
  border: 2px solid #DCDCDC;
  background-color: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(5px);
  :hover{
  border: 1px solid rgba(255, 255, 255, .25);
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.45);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(5px);
  }

  :hover Image{
    transform: scale(1.5);
  }
  

`

export const Image = styled.img`
  object-fit: cover;
  transition: transform .25s;
  z-index: -1;
`

export const Button = styled.button`
  width: 7rem;
  height: 2rem;
  color: #fff;
  cursor: pointer;
  text-align:center;
  align-self: center;
  border: none;
  background-size: 300% 100%;
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

    
`