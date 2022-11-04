import styled from 'styled-components'

export const FiltroBusca = styled.main`
    display: flex;
    flex-direction: column;
    gap: 7px;
    // align-items:center;
    .filtros {
        background: rgb(13, 98, 138);
        border: 2px solid rgb(102, 202, 248);
        border-radius: 10px;
        height: 30px;
        text-align: center;
    }
`
export const Input = styled.input`
    color: rgb(102, 202, 248);
    background: rgb(13, 98, 138);
    border: 2px solid rgb(102, 202, 248);
    height: 20px;
    border-radius: 5px;
    ::placeholder{
        color: rgb(102, 202, 248);
    }
`
export const Ordem = styled.div`
    display: flex;
    justify-content: space-between;
    `

export const Ordenacao = styled.select`
    display: flex;
    justify-content: space-between;
    color: rgb(102, 202, 248);
    background: rgb(13, 98, 138);
    border: 2px solid rgb(102, 202, 248);
    height: 20px;
    border-radius: 5px;
    `