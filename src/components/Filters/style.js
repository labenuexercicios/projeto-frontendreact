import styled from "styled-components";



export const Aside = styled.aside`
    min-height: 500px;
    margin-top: 20px;
`

export const Price = styled.article `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap');
    display: flex;
    padding-top: 10px;
    font-family: 'Poppins', sans-serif;
    position: relative;
    margin-left: 5vw;
`

export const ImgIcon = styled.label `
    position: absolute;
    right: 2%;
    bottom: 20%;
`

export const Search = styled.input `
    height: 40px;
    min-width: 100%;
    border-radius: 15px;
    border: 1px #808080 solid;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    padding-left: 10px;
    display: flex;
    position: relative;
    ::-webkit-input-placeholder { /* Chrome, Safari, Opera */
        position: absolute;
        right: 13%;
        top: 20%;
}
`