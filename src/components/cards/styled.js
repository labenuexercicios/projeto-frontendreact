import styled from "styled-components";

export const Card = styled.div`
  background-color: white;
  border-style: solid;
  border-radius: 3%;
  border-width: 1px;
  border-color: lightgray;
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 240px;
  transform: translateX(0px);
  transition: 1.1s all;

  &:hover {
    box-shadow: 6px 6px 40px 10px #1471c1;
    transform: translateX(20px);
  }

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
  padding: 10px;
  gap: 3px;

  p {
    font-size: 16px;
    font-weight: bold;
    padding-left: 10px;
  }

  span {
    font-size: 14px;
    padding-left: 10px;
  }

  button {
    background-color: #1471c1;
    color: white;
    font-weight: bold;
    font-size: 12px;
    align-self: center;
    width: 150px;
    border: none;
    border-radius: 8px;
    height: 22px;
    transition: all 300ms ease-in-out;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 1px 6px #1471c1;
    }
  }
`;
