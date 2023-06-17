import styled from 'styled-components'

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-right: 1vw;
    margin-left: 1vw;
    padding: 0.7em;
    height: 18em;
    width: 13em;
    color: white;
    background: rgba(22, 24, 55, 0.9);
    border-radius: 30px;
    font-family: 'Signika Negative', sans-serif;
`

export const Input = styled.input`
    width: 100%;
    height: 8%;
`

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: flex;
    font-size: 1em;
    font-family: 'Signika Negative', sans-serif;
    gap: 1vh;
`

export const Select = styled.select`
    font-size: 0.7rem;
    width: 100%;
    height: 100%;
`