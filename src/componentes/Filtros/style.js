import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 20px;
`;

export const ContainerSearch = styled.div`
width: 40%;
display: flex;
align-items: center;
`

export const ContainerFilters = styled.div`
display: flex;
justify-content: space-around;
gap: 150px;
`

export const InputName = styled.input`
  border-radius: 5px;
  border: none;
  padding: 10px;
  width: 100%;
  :hover {
    cursor: pointer;
  }
  :focus{
    outline: 0;
  };
`;

export const SelectOrder = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: none;
  height: auto;
  width: auto;
  background-color: #282929;
  color: white; 
  appearance: none;
  :focus{
    outline: 0;
  };
  :hover {
    cursor: pointer;
  }
}
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  height: auto;
  width: auto;
  background-color: #282929;
  color: white; 
  :focus{
    outline: 0;
  };
  :hover {
    cursor: pointer;
  }
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
`;
