import styled from "styled-components"

export const ProductsSectionBuy = styled.section `
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 32px;
width: 100%;
`

export const ProductInfoSection = styled.div`
display: flex;
flex-direction: column;
width: 320px;
border-radius: 16px;
gap: 1rem;
padding: 1rem;
justify-items: left;
background: darkblue;
`

export const ProductImage = styled.img`
align-self: center;
justify-self: center;
height: 160px;`

export const ProductDescription = styled.section`
align-self: center;
justify-self: center;
display: flex;
flex-direction: column;
justify-content: left;
color: white;`

export const Button = styled.button`
align-self: center;
justify-self: center;
height: 2rem;
width: 80px;
align-items: center;
justify-content: center;`