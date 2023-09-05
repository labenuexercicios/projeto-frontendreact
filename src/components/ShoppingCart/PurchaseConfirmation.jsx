import { useContext, useEffect } from "react"
import { ProductsContext } from "../Context/ProductsContext"
import { useNavigate } from "react-router-dom"
import { currencyBrazil } from "../Libs/Lib"
import styled from "styled-components"
// import Button from './styled'
import { Button } from './styled'

const ContainerPurchase = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    h1{
        font-size: 40px;
        margin-bottom: 20px;
    }  
    h2{
        margin-bottom: 20px;
    }
    @media(max-width:768px){
        h1{
            font-size: 20px;
        }
    }
 
`
const Main = styled.main`
    width: 90%;
    min-height: 400px;
    padding: 25px;
    border: 2px solid rgba(0,0,0,.4);
    border-radius: 10px;
    overflow-y: auto ;
    text-align: center;
    h2{
        margin-top: 20px;
    }

`
const BoxProd = styled.div`
    display: grid ;
    grid-template-columns: repeat(5,1fr);
    grid-template-rows: max-content;
    align-items: center;
    gap: 20px;
    background-color: ${({ index }) => index % 2 === 0 ? 'rgba(0,0,0,.1)' : '#fff'};
    img{
        width: 60px;
        margin: 6px;
    }
    @media(max-width:768px){
        display: flex;
        flex-wrap: wrap;
    }
`
const Footer = styled.footer`
    width: 150px;
`
export default function PurchaseConfirmation() {

    const navigate = useNavigate()

    const {
        cart,
        setCart,
        products,
        itemsCart,
        totalCart
    } = useContext(ProductsContext)

    useEffect(()=>{
            return ()=> {
                setCart([])}
    },[])

    function renderItem(objPro, index) {
        const codePro = objPro.code
        const amount = objPro.amount
        const dataPro = products.find(e => e.code === codePro)
        const { name, img, price } = dataPro
        return (
            <>
                <BoxProd key={index} index={index}>
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div>
                        <p>{name}</p>
                    </div>
                    <div>
                        <span>Quantidade {amount}</span>
                    </div>
                    <div>
                        <span>Preço Unitário: {currencyBrazil(price, true)}</span>
                    </div>
                    <div>
                        <span>Total: {currencyBrazil(price * amount, true)}</span>
                    </div>
                </BoxProd>
                <hr />
            </>)
    }

    return (
       
        <ContainerPurchase>
            <header>
                <h1>Compra finalizada com sucesso!</h1>
            </header>

            <h2>Seus Produtos</h2>

            <Main>
                {
                    cart?.map((e, index) =>
                        renderItem(e, index)
                    )
                }
                <h2>Total: {itemsCart} {itemsCart>1?"ítens":"ítem"}, {currencyBrazil(totalCart, true)}</h2>
                <p><i>Em breve você receberá em seu e-mail, todas informações sobre seu pedido.</i></p>
            </Main>

            <Footer>
                <Button onClick={()=>navigate('/')}>Voltar para página inicial!</Button>
            </Footer>
         

        </ContainerPurchase>)
    
}