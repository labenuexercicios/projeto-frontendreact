import styled from 'styled-components';

export const FiltersContainer = styled.div`
  border-top: 1px solid;
  padding: 20px;
  background-color: #EDF4F7;
  display: flex;
  justify-content: space-evenly;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    border-radius: 30px;
    padding: 5px;
  }

  input::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
`;