import styled from "styled-components"

export const MainHeader = styled.div`
    display: flex;
    height: 16vh;
    width: 110%;
    margin-bottom: 30px;
    background-color: #457b9d;
    justify-content: space-between;
    color: white;
    border-radius: 0 0 40px 40px;
    
    
    div:first-child{
        width: 10%;        
    }

    div:nth-child(2){
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        margin-top: 4vh;
        font-size: 40px;
    }


    div:last-child{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
        gap: 40px;      

        img:hover{
            cursor: pointer;
            transform: scale(1.2)
        }
    }
`

export const Imagem = styled.img`
    height: 13vh;
    width: 8vw;
    margin-left: 8vw;
    
`
