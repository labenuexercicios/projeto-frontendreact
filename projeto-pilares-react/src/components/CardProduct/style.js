import styled from "styled-components";

export const StyledCard = styled.div`
  width: 20vw;
  height: 42vh;
  border: 1px solid #e5e5e5;
  margin: 0.4vw;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0s content;
`;
export const StyledImgProduct = styled.figure`
  width: 85%;
  height: 42%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1vw;

  img {
    width: 150px;

    height: 150px;
  }
`;

export const StyledInfoProduct = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  margin-top: 1vh;
  gap: 10px;
`;

export const StyledName = styled.span`
  color: #383935;
`;
export const StyledValue = styled.span`
  color: #383935;
`;
export const StyledBtnAddCart = styled.button`
  background-color: #383935;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  width: 10vw;
  height: 5vh;
  font-size: 1.3em;
  margin-bottom: 2vh;
`;

export const StyledBtnIcon = styled.button`
  background: transparent;
  border: transparent;
  align-self: flex-start;
`;
