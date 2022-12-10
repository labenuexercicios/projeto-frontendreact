import styled from "styled-components"

export const NavbarStyled = styled.header `
    color: white;
    display: flex;
    background-color: #2d3231;
    justify-content: space-between;
    align-items: center;
    height: 180px;
    padding: 0 30px;

    .brinquedolandia{
        font-family: 'Nerko One', cursive;
        font-size: 3.0rem;
        letter-spacing: 0.2rem;
        color:#b0d348;        
    }

    .foguete{
        width: 120px;
        height: 120px;
        padding: 2px 0;       
    }

    .logo{
        display: flex;
        flex-direction: row;
        align-items: center;
        
        gap:10px;
        font-size: large;
    }

    .input {
        width: 800px;
        border-radius: 20px;
        padding-left: 10px;
        height: 30px;
        background-color: #FFFFFF;
        display: flex;
        align-items: center;
        img{
            height: 20px;
            padding-left: 5px;
        }
        input{
            width: 720px;
            height: 30px;
            border: none;
            
        }
        input:focus{
            outline: none;
        }
    }
    .container-button{
        width: 100px;
        height: 40px;
        display: flex;
        justify-content: space-between;
    }
        .button{
            height: 30px;
            #home{
                width: 60px;
            }
        }   
    
    
`