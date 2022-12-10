import styled from "styled-components";

export const ContainerPedido = styled.div`
    width: 96%;
    display: flex;
    justify-content: space-between;
    gap: 10px;
`
export const BoxPedido = styled.div`
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
        background-color: #A94DF3;
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

    button:hover{
        cursor: pointer;
        background-color: #AA7DFC;
        font-weight: light;
        transform: scale(1.05)
    }
`
//Titulo dos itens da cesta (produto, qtd, nome)
export const BoxPedidoEspaco = styled.div`
    display: flex;
    border-bottom: #EAEAEA 1px solid;
    justify-content: space-evenly;

`
//Itens da cesta (imagens, produtos, etc.)
export const BoxPedidoProdutos = styled.div`
    border-bottom: #EAEAEA 1px solid;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100px;
    width: 100%;
    margin-bottom: 30px;

    img{
        width: 80px;
        padding-left: 20px;
    }
    :hover{
        cursor: pointer;
    }
`

export const BoxPedidoProdutosItens = styled.p`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    span{
        width: 25%;
        font-size: 14px; 
        
        :nth-child(4){
            display: flex;
            gap: 8px;

            h4{
                border-radius: 50%;
                background-color: #A94DF3;
                color: white;
                width: 16px;
                text-align: center;
            }

            h4:hover{
                cursor: pointer;
            }
        }
    }
`

//Menu Lateral Direito da Tela de Pedido, resumo de pagto
export const ResumoPedido = styled.div`
    width: 30%;
    background-color: #EAEAEA;
    border-radius: 8px;
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
            background-color: #A94DF3;
            border-radius: 8px;
            color: white;
            width: 100%;
            height: 50px;
            border: none;
            font-weight: bold;
            font-size: 18px;
            transition: transform .3s;
            box-shadow: 1px 1px 4px rgb(191, 191, 191);
        }

        button:hover{
            cursor: pointer;
            background-color: #AA7DFC;
            font-weight: light;
            transform: scale(1.05)
        }
    }
    
    `