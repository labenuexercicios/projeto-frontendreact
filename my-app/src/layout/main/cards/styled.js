import styled from "styled-components";

export const Content = styled.div`
  align-items: center;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
`;

export const Image = styled.img`
  height: 100%;
  padding: 12px 0;
  text-align: center;
  width: 70%;
`;

export const Title = styled.h3``;

export const Button = styled.button`
  background-color: #696969;
  border: 1px solid #cecece;
  color: #fff;
  margin-bottom: 10px;
  :hover {
    background-color: #fff;
    color: #696969;
  }
`;
