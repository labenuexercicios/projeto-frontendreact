import { Layout } from "../../components/Layout/Layout"
import { Cart, Infomation, Items } from "./styled"


export const CartPage = () => {
  return (
    <Layout>
      <Cart>
        <Items>
          <h1>Cart</h1>

        </Items>
        <Infomation></Infomation>
      </Cart>
    </Layout>
  )
}