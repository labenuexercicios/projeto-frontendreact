import styled from "styled-components";

export const ContainerPedido = styled.div`
    width: 96%;
    display: flex;
    justify-content:space-around;
    gap: 10px;
    height: 500px;
`
export const BoxPedido = styled.div`
padding: 20px;
border-radius: 10px;
border: 1px solid black;
    width: 70%;
    padding-top: 30px;

    h2{
        margin-bottom: 20px;
    }

    input{
        border-radius: 8px;
        width: 300px;
        height: 40px;
        padding-left: 10px;
        margin-bottom: 20px;
        margin-top: 10px;
    }

    select{
        height: 40px;
        width: 300px;
        border-radius: 8px;
    }

    button{
        margin-top: 30px;
        background-color: black;
        border-radius: 8px;
        color: white;
        width: 300px;
        height: 40px;
        border: none;
        font-weight: bold;
        font-size: 14px;
        transition: transform .3s;
        box-shadow: 1px 1px 4px rgb(191, 191, 191);
    }

`
//Titulo dos itens da cesta (produto, qtd, nome)
export const BoxPedidoEspaco = styled.div`
    display: flex;
    border-bottom: black 1px solid;
    justify-content: space-evenly;

`
//Itens da cesta (imagens, produtos, etc.)
export const BoxPedidoProdutos = styled.div`
    border-bottom: black 1px solid;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100px;
    width: 100%;
    margin-bottom: 30px;

    img{
        width: 90px;
        padding-left: 20px;
    }
`

export const BoxPedidoProdutosItens = styled.p`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 20px;

    span{
        width: 25%;
        font-size: 14px; 
        
        :nth-child(4){
            display: flex;
            gap: 10px;

            h4{
                border-radius: 50%;
                border: 1px solid black;
                color: black;
                width: 16px;
                text-align: center;
            }

            h4:hover{
                cursor: pointer;
            }
        }
    }
`

export const ResumoPedido = styled.div`
    width: 30%;
    height: 250px;
    border: 1px solid black;
    border-radius: 10px;
    padding-top: 30px;
    display: flex;
    justify-content: center;
    
    div:first-child{
        width: 90%;

        :first-child{
            margin-bottom: 30px;
        }

        div{
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
        }

        button{
            margin-top: 30px;
            background-color: black;
            border-radius: 8px;
            color: white;
            width: 100%;
            height: 50px;
            border: none;
            font-weight: bold;
            font-size: 18px;
        }

    }
    
    `
    export const ContainerCarrinhoTotal = styled.div`
    margin: 20px 0 200px 0;
    width:100%;
    display: flex;
    justify-content: center;
    height: 200%;

    `