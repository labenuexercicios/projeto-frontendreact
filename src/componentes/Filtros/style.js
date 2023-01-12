import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  gap: 10px;
`;

export const Label = styled.label`
  font-size: 15px;
`;

export const SelectOrder = styled.select`
  border-radius: 5px;
  border: none;
  height: auto;
  width: auto;
  background-color: whitesmoke;
  :hover {
    cursor: pointer;
  }
`;

export const InputName = styled.input`
  border-radius: 5px;
  border: none;
  background-color: whitesmoke;
  height: auto;
  width: auto;
  width: 20%;
  :hover {
    cursor: pointer;
  }
`;

export const Input = styled.input`
  border-radius: 5px;
  border: none;
  background-color: whitesmoke;
  height: auto;
  width: 10%;
  :hover {
    cursor: pointer;
  }
`;
