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
    width: 125px;
    height: 40px;
    border-radius: 15px;
    font-weight: 500;
    font-size: 12px;
    :hover{
        cursor: pointer;
    }
`
export const Pesquisa = styled.input `
    height: 40px;
    width: 400px;
    border-radius: 15px;
    border: 1px #808080 solid;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    padding-left: 10px;
    background: url("https://i.imgur.com/eKw2dvH.png") no-repeat left / 1.3em;
    padding-left: 1.3em;
`