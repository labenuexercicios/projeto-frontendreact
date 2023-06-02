import styled from 'styled-components'


export const HomeContainer = styled.div`
width: 100%;


`
export const ProductCardContainer = styled.div`
  /* display:grid;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 30px;
  align-content: center; */

`
export const HomeHeader = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;

  h1 {
    font-family: 'Rubik Moonrocks';
    font-size: 20px;
    color: #1E0126;
  }

  span {
    display: flex;
    flex-direction: column;
  }

  div {
    cursor: pointer;
    width: 200px;
  }
`