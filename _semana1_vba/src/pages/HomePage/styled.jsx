import styled from "styled-components";

export const HomePageStyled = styled.main  `
    min-height: calc(100vh - 180px);
    display: flex;
    
    .container-filtros {
    width: 250px;
    display: flex;
    flex-direction: column;
    padding: 30px 30px;
    gap: 25px;     
  }
  
  .filtro-por-ordem{
    display: flex;
    flex-direction: column;
    gap:10px;   
  }

  .botao-limpar{
    width: 50px;
    align-self: flex-start;
  }

  .container-main {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 60px 60px;   
    /* height: 100%; */
    gap: 100px;
    flex-wrap: wrap;
  }

  .filtrar-Dados{
    border-radius: 20px;
    padding-left: 10px;    
  }

  h2{
    padding: 8px 5px;
  }
   
`