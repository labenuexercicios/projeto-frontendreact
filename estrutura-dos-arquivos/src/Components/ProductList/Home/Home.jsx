import ProductCard from "../ProductCard/ProductCard"
import { PaginaHome } from "./HomeStyle"
import { SectionCard } from "./HomeStyle"
import productList from "../../assents/productsList"
import { Header,Title} from "./HomeStyle"


const Home = (props) => {
    
  

    return (
        <PaginaHome>
            
            <Title>
                
                
                kIDS SPACE SHOP

            </Title>

            <Header>
    
                <p>Produtos disponíveis:{productList.length}</p>
                <p>Ordenação:
                    <select value={props.ordination} onChange={(e) => props.setOrdination(e.target.value)}>
                        <option value="">Ordenar</option>
                        <option value="crescente">Crescente</option>
                        <option value="decrescente">Decrescente</option>
                    </select></p>

            </Header>
        


            <SectionCard>
                {props.product
                .filter((nomeProduct) => {
                    return props.searchFilter ? nomeProduct.name.toLowerCase().includes(props.searchFilter.toLowerCase()) :
                        nomeProduct
                }).filter((nomeProduct) => {
                    return  props.minFilter <=  nomeProduct.value || ""
                }).filter((nomeProduct) => {
                    return  props.maxFilter >=  nomeProduct.value || "" 
                }).sort((a, b) => {
                        if (props.ordination === "crescente") {
                            return a.value - b.value
                        }
                        if (props.ordination === "decrescente") {
                            return b.value - a.value
                        }
                        if(props.ordination === ""){
                            return a.id - b.id
                        }
                    }).map((prod,index) => {
                        return (<ProductCard
                            key={prod.id}
                            name={prod.name}
                            image={prod.imageUrl}
                            value={prod.value}
                            cart={props.cart}
                            setCart={props.setCart}
                            amount={props.amount}
                            setAmount={props.setAmount}
                            index={index}
                            id={prod.id}
                            currencyBrazil={props.currencyBrazil}
                            prod={prod}
                            
                        />)

                    })}
            </SectionCard>

        </PaginaHome>

    )
}
export default Home
