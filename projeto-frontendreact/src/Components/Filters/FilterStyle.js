import styled from 'styled-components'

export const Input = styled.input`
    width: 5rem;
    height: 20px;
    font-size: 13px;
    font-weight: 600;
    padding-left: 5px;
    color: black;
    border: 2px solid #8707ff;
    border-radius: 10px;
    background: transparent;
    :active {
    box-shadow: 2px 2px 15px #8707ff inset;
}
`

export const FilterStyle = styled.aside`
    display: flex;
    width: 50vw;
    justify-content: center;
    gap: 7px;
`

export const Paragraph = styled.p`
    font-size: 13px;
`