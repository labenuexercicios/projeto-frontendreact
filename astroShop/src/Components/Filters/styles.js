import { styled } from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
padding: 12px;
justify-content: space-between;

h1 {
  color: var(--color-text);
  text-align: center;
  margin-bottom: 50px;
}

img {
  display: flex;
  align-items: center;
  width: 200px;
  height: 100px;
  justify-content: center;
}
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

