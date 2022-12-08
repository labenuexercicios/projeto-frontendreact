import styled from "styled-components";

export const Inf = styled.section `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600;700&display=swap');
    display: flex;
    width: 80%;
    margin: 0 auto;
    justify-content: space-between;
    padding-top: 10px;
    font-family: 'Poppins', sans-serif;
`

export const Localization = styled.article `
    display: flex;
    background-color: #FF008A;
    align-items: center;
    color: white;
    gap: 8px;
    justify-content: center;
    width: 150px;
    height: 40px;
    border-radius: 15px;
    font-weight: 500;
    font-size: 12px;
    transition: 0.2s;
    :hover{
        cursor: pointer;
        background-color: #ff006e;
    }
`
export const Pesquisa = styled.input `
    height: 40px;
    width: 31.25vw;
    border-radius: 15px;
    border: 1px #808080 solid;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    padding-left: 10px;
    ::-webkit-input-placeholder { /* Chrome, Safari, Opera */
        @media screen and (min-width: 58px) and (max-width: 483px)   {
            font-size: 12px;
        }
        @media screen and (min-width: 483px) and (max-width: 1030px) {
            font-size: 12px;
        }
        }
`

export const Article = styled.article `
    position: relative;
    height: 40px;
    width: 39%;
`
export const SearchIcon = styled.label`
    position: absolute;
    right: 10px;
    bottom: 25%;
`