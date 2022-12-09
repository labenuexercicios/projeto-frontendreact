import styled from "styled-components";

export const ContentSale = styled.section `
   @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
    font-family: 'Poppins', sans-serif;
    width: 50%;
    article:nth-child(1){
        border-bottom: dashed #FF008A 2.5px;
        font-weight: 600;
    }
    @media screen and (min-width: 58px) and (max-width: 483px) {
        width: 100%;
    }
`
export const ProductsSale = styled.article `
    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;
    margin-left: 10px;
    align-items: center;
`