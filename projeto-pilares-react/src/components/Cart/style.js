import styled, { keyframes } from "styled-components"

const showCart = keyframes`
    from{left:84vw}
    to{left:74.2vw}

`



export const StyledCart = styled.section`
    z-index: 1000;
    height: 100%;
    width: 25vw;
    background-color: white;
    position: fixed;
    top:1vh;
    left: 73vw;
    animation: ${showCart} .3s;
    border: 1px solid black;
    .topInfo{
        border-bottom: 0.5px solid black;
        width: 25vw;
        z-index: 999;
        height: auto;
        position: fixed;
        background-color: white;
        span{
            margin-left: 5px;
        }
        button{
            width: 3rem;
            background: transparent;
            border: none;
            cursor: pointer;
            :hover{
                background-color: #EE3D3D;
            }
            font-size: 1.5rem;
        }
    }
    .bottomInfo{
        position: fixed;
        background-color: white;
        z-index: 999;
        width: 25vw;
        height: 10vh;
        bottom: 0;    
        border-top: .5px solid black;
        display: flex;
        justify-content: space-around;
        .total{
            font-size: 1.2rem;
        }
        .price{
            font-weight: bold;
            font-size:1.5rem ;
        }
    }
`

export const StyledContainerProducts = styled.div`
    overflow-y: scroll;
    height: 84%;
    margin-top:4.2vh;
`


export const StyledProduct = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    border: 0.5px solid black;
    height: 10vh;
    padding: 10px;
    gap: 10px;
    margin: 5px;
    border-radius: 10px;
    img{
        width: 60px;
        height: 60px;
        border-radius: 10px;
    }
  
    .containerProduct{
        display: flex;
        flex-direction: column;
        width: 100%;
        
    }
    .spanPrice{
        font-weight: bold;
    }

    .btnRemove{
        align-self: flex-end;
    }

    button{
        background:transparent;
        border: none;
        align-self: flex-end;
        margin-left: 10px;
        cursor: pointer;
    }

    


`

