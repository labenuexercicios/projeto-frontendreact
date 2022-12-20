import styled from "styled-components";

export const Filtros = styled.aside`
    background-color: #2B0D4A;
    display: flex;
    flex-direction: column;
    padding: 1.5em;
`

export const Titulo = styled.h2`
    color: #FFFFFF;
`
export const Label = styled.label`
    padding-top: 1em;
    padding-bottom: .5em;
    color: #FFFFFF;
`

export const Select = styled.select`
    background-color: #27214d;
    border: 1px solid #fff;
    border-radius: .75em;
    color: #FFF;
    padding: .5em 1em;
    font-size: 12pt;
`

export const Input = styled.input`
    background-color: #27214d;
    border: 1px solid #fff;
    border-radius: .75em;
    color: #FFF;
    padding: .5em 1em;
    font-size: 12pt;
`
export const Botão = styled.button`
    background-color: #27214d;
    border: 1px solid #fff;
    border-radius: .75em;
    color: #FFF;
    font-size: 12pt;
    margin-top: 1em;
    padding: .5em 1em;
    transition: .25s all;
    &:hover {
        cursor: pointer;
        background-color: #FFF;
        color: #27214d;
    }
`
