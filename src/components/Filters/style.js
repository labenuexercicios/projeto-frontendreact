import styled from "styled-components";



export const Price = styled.section `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600;700&display=swap');
    display: flex;
    width: 20%;
    padding-top: 10px;
    font-family: 'Poppins', sans-serif;
    position: relative;
    margin-left: 5vw;
`

export const PlaceHolder = styled.label `
    color: #808080;
    position: absolute;
    left: 45%;
    top: 35%;
`
export const ImgIcon = styled.label `
    position: absolute;
    right: 2%;
    bottom: 10%;
`

export const Search = styled.input `
    height: 40px;
    width: 100%;
    border-radius: 15px;
    border: 1px #808080 solid;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    padding-left: 10px;
    display: flex;
    ::-webkit-input-placeholder { /* Chrome, Safari, Opera */
        padding-left: 120px;
}
`