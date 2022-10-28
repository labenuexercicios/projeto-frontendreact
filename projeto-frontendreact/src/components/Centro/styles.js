import styled from "styled-components";

export const CentroStyled = styled.section`
${(props) => props.display};
// flex-direction: row;
// flex-wrap: wrap;
// border: 1px solid black;
// align-items: center;
  font-size: 17px;
  border: 1px solid black;
  margin: 16px;
  max-width: 15rem;
  text-align: center;
  border-radius: 10px;
  box-shadow: 10px 10px 30px #bdbdbd;
  height: 270px;
`

export const ProdutosBloco = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    border-radius: 10px;
    border: 1px solid black;
    background-color: ${(props) => props.color};
    //margin:  0;
`

export const Imagem = styled.img`
    height:150px;
    width:auto;
    border-radius: 10px;
`

export const DadosProduto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const AddCarrinho = styled.button`
    padding: 0.5rem;
    margin: 16px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    background-color: rgb(141, 225, 23);;
    box-shadow: 0 6px 30px -10px #000000;

    &:hover {
        font-size: 17px;
    }

    &:active {
        background-color: white;
        font-size: 18px;
    }
`

// export const apaga = styled.section
// `
// display: none;
// `