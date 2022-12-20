import styled from 'styled-components'

export const Header = styled.header`
    align-items: center;
    background-color: #0d001d;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    justify-content: space-between;
    padding: 0 10%;
`

export const Figura = styled.figure`
    align-items: center;
    display: flex;
`

export const Logo = styled.img`
    margin-right: 3em;
    height: 50px;
`

export const Titulo = styled.h1`
    color: #FFFFFF;
    font-weight: 700;
    text-transform: uppercase;
`

export const Menu = styled.ul`
    display: flex;
    column-gap: 2em;
    list-style-type: none;
`

export const ItensMenu = styled.li`
    border-radius: 1em;
    color: #FFFFFF;
    display: inline-block;
    font-size: 1em;
    padding: 1em;
    transition: .3s all;
    &:hover {
        background-color: #2b0d49;
        cursor: pointer;
    }
`

export const Carrinho = styled.img`

`
