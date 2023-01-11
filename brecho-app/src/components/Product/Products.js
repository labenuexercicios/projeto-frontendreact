import styled from 'styled-components'


const ContainerTitle = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: black;
height: 200px;
`
const Title = styled.div `
text-align: center;
font-size: 35px;
color: white;
font-weight: 700;



`

const Products = () => {
  return (
    <ContainerTitle>
      <Title>PRODUTOS</Title>
    </ContainerTitle>
  )
}

export default Products



