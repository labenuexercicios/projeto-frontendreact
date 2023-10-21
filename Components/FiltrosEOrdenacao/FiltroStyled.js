import styled from 'styled-components';

const StyledFiltro = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr); 
  grid-gap: 1px;
  padding: 2% 0;
  font-family: 'Mina', sans-serif;
  align-items: center;
  justify-items: center;

  .busca, .valor, .ordem {
    appearance: none;
    border: .2em solid #37306B;
    outline: none;
    border-bottom: .2em solid #37306B;
    background: rgba(102, 52, 127, 0.2); 
    border-radius: 2em;
    padding: .4em 1rem; 
    color: #66347F;
    width: 30%; 
    font-family: 'Mina', sans-serif;
  }

  .busca {
    width: 30%;
  }

  .valor {
    width: 10%;
  }

  .ordem {
    width: 20%;
  }

  .textoOrdem {
    color: #37306B;
    padding: 0;
  }

  button {
    appearance: none;
    border: .2em solid #37306B;
    background: transparent;
    padding: .85em 1.5em;
    color: #66347F;
    border-radius: 2em;
    transition: background 1s, color 1s; 
    &:hover, &:focus, &:active {
      background: #37306B;
      color: #fff;
    }
  }
`;

export default StyledFiltro;
