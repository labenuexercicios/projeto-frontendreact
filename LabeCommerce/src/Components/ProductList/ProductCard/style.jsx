import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 16px;
  gap: 8px;
  width: max(20%, 100px);
  align-self: center;
  border-radius: 22px;

  img {
    display: flex;
    width: 20vh;
    padding: 16px;
    justify-content: center;
    align-items: center;

    border-radius: 22px;
  }

  p {
    margin-left: 10px;
  }

  button {
    align-self: center;
    margin-bottom: 10px;
  }
`;
