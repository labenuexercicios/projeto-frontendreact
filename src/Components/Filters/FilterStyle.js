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

export const FilterStyle = styled.div`
    display: flex;
    width: 70vw;
    justify-content: center;
    align-items: center;
    gap: 7px;
`

export const Paragraph = styled.p`
    font-size: 14px;

    @media screen and (min-width: 1200px){
        font-size: 19px;
    }
`

export const FilterImage = styled.img`
    position: absolute;
    padding-left: 1.5rem;
    height: 2.5rem;
    mix-blend-mode : color-burn;
`