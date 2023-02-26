
import productList from "../../assents/productsList"
import ProductCard from "../ProductCard/ProductCard"
import { Header } from "./HomeStyle"
import { useState } from "react"


function Home() {

    const [ordination, setOdination] = useState('')
    const [cart, setCart] = useState('sdsd')
    const [amount, setAmount] = useState('dsdsd')


    const onChangeOrdination = (e) => {
        setOdination(e.target.valeu)
        //console.log(e.target.valeu);
    }
    const onChangeCart = (e) => {
        setCart(e.target.value)
    }
    const onChangeAmount = (e) => {
        setAmount(e.target.value)
    }


    //console.log(ordination, cart, amount)

    return (
        <div>
            <Header>
                <p>Quantidade de produtos</p>
                <p>Ordenação<select>
                    <option value={ordination} onChange={onChangeOrdination}>Crescente</option>
                    <option value={ordination} onChange={onChangeOrdination}>Decrescente</option>
                </select></p>
            </Header>
            <ProductCard
                productList={productList}
                amount={amount}
                onChangeAmount={onChangeAmount}
                cart={cart}
                onChangeCart={onChangeCart}
            />
        </div>
    )
}

export default Home
