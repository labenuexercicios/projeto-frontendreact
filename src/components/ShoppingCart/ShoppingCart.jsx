import { useContext } from "react";
import { ProductsContext } from "../Context/ProductsContext";
import { useNavigate } from "react-router-dom";

import * as s from "./styled";
import { currencyBrazil, saveCart } from "../Libs/Lib";

export default function ShoppingCart() {

    const {
        cart,
        setCart,
        products,
        itemsCart,
        totalCart
    } = useContext(ProductsContext)

    const navigate = useNavigate()

    function renderItemCard(objPro, index) {
        const codePro = objPro.code
        const amount = objPro.amount
        const dataPro = products.find(e => e.code === codePro)
        const { name, img, price } = dataPro
        return (
            <s.HeaderDetail key={index}>
                <s.ContainerItem>
                    <s.SubTitleProd>Produto</s.SubTitleProd>
                    <s.ItemDetail>
                        <img src={img} alt="" />
                        <p>{name}</p>
                    </s.ItemDetail>
                </s.ContainerItem>
                <s.ContainerAmount>
                    <s.SubTitleAmount>Qtd.</s.SubTitleAmount>
                    <s.ControlAmount>
                        <img onClick={() => handleAmount(index, cart, setCart, -1)}
                            src="/static/icons/item_minus.svg"
                            alt="item minus" />
                        <span>{amount}</span>
                        <img onClick={() => handleAmount(index, cart, setCart, 1)}
                            src="/static/icons/item_plus.svg"
                            alt="item plus" data-codepro={index} />
                    </s.ControlAmount>
                </s.ContainerAmount>
                <s.ContainerPrice>
                    <s.SubTitlePrice>Preço</s.SubTitlePrice>
                    <s.OldPrice>{currencyBrazil(+price * 1.30)}</s.OldPrice>
                    <s.Price>{currencyBrazil(price, true)}</s.Price>
                </s.ContainerPrice>
            </s.HeaderDetail>
        )
    }

    return (

        <s.Container>
            <s.Products>
                <div>
                    <s.Title>Meu Carrinho</s.Title>
                </div>
                {cart.map((e, index) =>
                    renderItemCard(e, index)
                )}
            </s.Products>
            <s.Summary>
                <div>
                    <s.Title>Resumo do Pedido</s.Title>
                </div>
                <div>
                    <ul id="summary">
                        <li>
                            <label>{itemsCart} {itemsCart <= 1 ? "Produto" : "Produtos"}</label>
                            <span>{currencyBrazil(totalCart, true)}</span>
                        </li>
                        <li>
                            <label>Frete</label>
                            <span>Grátis</span>
                        </li>
                        <div>
                            <span>Total</span>
                            <span><b>{currencyBrazil(totalCart, true)}</b></span>
                        </div>
                        <p>em até 10x sem juros {currencyBrazil(totalCart / 10)}</p>
                    </ul>
                </div>
                <div>
                    <s.Button onClick={() => cart.length ?
                        navigate("/purchaseconfirmation") :
                        navigate('/emptycart')}>
                        Confirmar Pedido
                    </s.Button>
                </div>
                <div>
                    <s.Button onClick={() => navigate("/")}>Continuar comprando...</s.Button>
                </div>
            </s.Summary>
        </s.Container>
    )
}


function handleAmount(nIndex, array, setState, xAmount) {
    const copyArray = [...array]
    const nAmount = copyArray[nIndex].amount

    if (xAmount === -1) {
        if (nAmount > 1) {
            // diminui 1
            copyArray[nIndex].amount--
        } else {
            // remove ou item
            copyArray.splice(nIndex, 1)
        }
    } else {
        // adiciona 1
        copyArray[nIndex].amount++
    }
    setState(copyArray)
}

function handlerMinus(nIndex, array, setState) {
    const copyArray = [...array]
    const nAmount = copyArray[nIndex].amount
    if (nAmount > 1) {
        copyArray[nIndex].amount--
    } else {
        copyArray.splice(nIndex, 1)
    }
    setState(copyArray)
}

function handlerPlus(nIndex, array, setState) {
    const copyArray = [...array]
    copyArray[nIndex].amount++
    setState(copyArray)
}

export function updateStatusCart(cart, setItemsCart, setTotalCart) {
    // atualização dos valore carrinho 
    const vTotal = cart.reduce((total, atual) => total += (atual.price * atual.amount), 0)
    const vTotalItems = cart.reduce((total, atual) => total += atual.amount, 0)
    setItemsCart(vTotalItems)
    setTotalCart(vTotal)
    saveCart(cart)
}