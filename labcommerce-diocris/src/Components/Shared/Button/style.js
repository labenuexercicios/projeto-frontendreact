import { styled, css } from "styled-components";



export const ButtonStyle = styled.button`
        background-color: unset;
        border: 1px solid #8C6BE8;
        border-radius: 8px;
        padding: 0.25rem 1rem;
        height: 2.75rem;
        min-height: 2.75rem;
        text-align: center;
        display: grid;
        align-items: center;
        justify-items: center;
        justify-content: center;
        align-content: center;
        font-weight: 900;
        color: white;
    &:active{
        background-color: #8C6BE8;
        color: #ffffff
    }
    ${props => props.erase && css`
    width: fit-content;
    position: relative;
    align-self: right;
    justify-self: right;
    background-color: #B65275;
    border: none;
  `}
  ${props => props.payment && css`
  transition: 1s all linear;
  &:hover{
    background: linear-gradient(90deg, rgba(41,0,94,1) 0%, rgba(140,107,232,1) 100%);
  }
  `}
`

