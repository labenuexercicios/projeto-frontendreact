import styled from 'styled-components'

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
    border: 1px solid #000;
    height: 60vh;
    width: 20vw;
`

export const Input = styled.input`
   height: 4vh;
   width: 16vw;
`

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: flex;
    font-size: 2.3vh;
    gap: 1vh;
`

export const Select = styled.select`
    font-size: 2.3vh;
`