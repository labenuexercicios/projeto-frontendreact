import styled from 'styled-components'

export const MainFooter = styled.div`
    background-color: orange;  

    .footer-dados{
        display: flex;
        justify-content: space-between;
        height: 20vh;
        width: 80%;
        padding-top: 12px;
    }

    .footer-perfil{
        border-top: 1px blue;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        height: 8vh;

        img{
            height: 20px;
            margin-left: 8px;
        }

        img:hover{
            cursor: pointer;
        }
    }
`

export const Imagem = styled.img` 
    min-height: 60px;
    height: 20vh; 
`