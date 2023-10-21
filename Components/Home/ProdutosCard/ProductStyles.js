import styled from "styled-components";


export const ProductRows = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px; 
`;


export const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px dashed rgb(158, 71, 132);
  justify-content: center;
  align-items: center;
  text-align: start;
  height: 70vh;
  border-radius: 10px; 
  margin: 10px;
  font-family: 'Mina', sans-serif;
`;

export const ImagedDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  justify-content: center;
  align-items: center;
`;

export const TextCard = styled.p`
  display: flex;
  align-self: start;
  margin: 10px;
  font-family: 'Mina', sans-serif;
`;

export const ButtonCard = styled.button`
        background-color: #9E4784;
        width: 100%;
        color: white;
        border: none;
        outline: 0;
        cursor: pointer;
        border-radius: 2px;
        text-decoration: none;
        font-family: 'Mina', sans-serif;
        font-size: 100%;
        font-weight: 600;
        transition: background-color 0.3s ease-in-out;
        padding: 0.5rem;
`;

export const ImgProduct = styled.img`
  width: 300px;
  height: 300px;
`;
