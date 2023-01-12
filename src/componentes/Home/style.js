import styled from "styled-components";

export const Container = styled.div`
  margin: 20px 15px;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
`;

export const Card = styled.div`
  padding: 10px 20px;
  border-radius: 20px;
  background-color: #1d1e1b;
  display: grid;
  height: 100%;
  width: 200px;
  :hover {
    transition: 1s;
    -webkit-box-shadow: 5px 8px 14px 3px rgba(77, 75, 75, 1);
    -moz-box-shadow: 5px 8px 14px 3px rgba(77, 75, 75, 1);
    box-shadow: 5px 8px 14px 3px rgba(77, 75, 75, 1);
    background-color: #dbc7a0;
    color: black;
  }
`;

export const ButtonCart = styled.button`
  display: flex;
  margin-top: 5px;
  padding: 5px;
  border-radius: 4px;
  border: none;
  align-self: center;
  :hover {
    transition: 0.2s;
    color: white;
    background-color: blue;
    cursor: pointer;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const Title = styled.p`
  font-weight: bold;
  align-self: start;
  font-size: 20px;
`;

export const Price = styled.p`
  padding: 5px;
  border-radius: 4px;
  align-self: start;
  background-color: #45782f;
`;

export const Description = styled.p`
  :before {
    content: "''";
  }
  :after {
    content: "''";
  }
`;
