import styled from "styled-components"

export const MainHeader = styled.div`
    height: 16vh;
    width: 100%;
    background-color: orange;
    display: flex;
    justify-content: space-around;
    border-radius: 0 0 20px 20px;
    margin-bottom: 30px;
    color: blue;

    div:first-child{
        width: 10%;        
    }

    div:nth-child(2){
        display: flex;
        align-items: center;
        width: 20%;
        img{
            width: 15vw;
            min-width: 150px;
        }
    }

    div:nth-child(3){
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40%;
        font-size: 14px;

        img{
            border: 2px solid white;
            border-radius: 50%;
            padding: 8px;
            height: 16px;
            margin-right: 8px;
        }
    }

    div:last-child{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
        gap: 40px;      
        
        img{
            height: 36px;
            transition: transform .3s;
        }

        img:hover{
            cursor: pointer;
            transform: scale(1.2)
        }
    }
` 

export const Imagem = styled.img`
    height: 22vh;
    width: auto;
    animation: float 6s ease-in-out infinite;
    
    @keyframes float {
        0%{
          transform: translateY(0px);      
        }
      
        50%{
          transform: translateY(-20px);    
        }
      
        100%{
          transform: translateY(0px);
        }}`