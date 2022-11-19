import styled from "styled-components";

export const Card = styled.div`
  background-color: white;
  border-style: solid;
  border-radius: 3%;
  border-width: 1px;
  border-color: gray;
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 240px;

  img {
    border-top-left-radius: 2.5%;
    border-top-right-radius: 2.5%;
    object-fit: cover;
    height: 70%;
    max-width: 100%;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 14px;
  gap: 3px;

  p {
    font-size: 16px;
  }

  button {
    align-self: center;
    width: 150px;
  }
`;
