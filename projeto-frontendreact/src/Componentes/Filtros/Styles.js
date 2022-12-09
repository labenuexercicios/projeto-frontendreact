import styled from 'styled-components'

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-right: 1vw;
    margin-left: 1vw;
    padding: 10px;
    height: 47vh;
    width: 16vw;
    color: white;
    background: rgba(22, 24, 55, 0.9);
    border-radius: 30px;
    font-family: 'Signika Negative', sans-serif;
`

export const Input = styled.input`
   height: 3vh;
   width: 10vw;
`

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: flex;
    font-size: 2.3vh;
    font-family: 'Signika Negative', sans-serif;
    gap: 1vh;
`

export const Select = styled.select`
    font-size: 2vh;
    width: 10vw;
    height: 3vh;
`