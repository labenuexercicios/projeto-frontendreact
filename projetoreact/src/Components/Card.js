import React from "react";
import { AddButton, CardContainer, ProductImage } from "../style";

const Card = (props) => {

    const AddProdutoCarrinho = () => {
        const novoProduto = {
            name: props.name,
            price: props.price,
        }
        const produtosAtuais = props.carrinhoAtual
        props.setCartProduct([...produtosAtuais, novoProduto])


    }

    return (
        <CardContainer>
            <div>
                <ProductImage src={props.ImgProduct} alt="Imagem do produto"/>
                <table>
                    <tr>
                        <td>{props.name}</td>
                    </tr>
                    <tr>
                        <td>CRED$ {props.price},00</td>
                    </tr>
                </table>
                <AddButton onClick={AddProdutoCarrinho}>Add Ship</AddButton>
            </div>
        </CardContainer>

    )
}

export default Card