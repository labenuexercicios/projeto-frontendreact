import { styled } from "styled-components";

export const HomeContainer = styled.div`
  /* border: solid 1px black; */
  margin-top: 12vh;
  padding: 10px;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 95vh;
`;

export const HomeCabecalho = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 0 ;
  width: 100%;

  & h3 {
    display: flex;
    gap: 10px;
    font-size: 22px;
  
    & select{
      font-size: 18px;
    }
  }

`;

export const HomeProdutos = styled.div`
  /* display: flex;
  justify-content: space-around; */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
  padding-top: 20px;
 `;

// export const Produtos = styled.div`
//   width: 100%;
// `;
