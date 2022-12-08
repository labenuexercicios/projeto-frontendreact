import { SideBarContainer } from "./ProductsScreen.styled";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Footer } from "./ProductsScreen.styled"
import { Ordem } from "./ProductsScreen.styled"
import GitHub from "../../assets/github.png"
import Linkedin from "../../assets/linkedin-icon.png"
import heart from "../../assets/heart-icon.png"

function ProdutcsScreen(props) {

    const { addToCart, product, buscaNome, minPrice,
        maxPrice, order, asc, sortingParameter } = props

    return (

        <div>
            <ProductCard  
            addToCart={ addToCart}
            isOnProductsScreen={true}
            buscaNome={buscaNome}
            minPrice = {minPrice}
            maxPrice = {maxPrice}
            sortingParameter = {sortingParameter}
            order = {order}
            />

            <SideBarContainer>
                <div className="side-bar">
                    <h3>Preço:</h3>
                    <input placeholder="R$ Min" type="number" value={minPrice} 
                    onChange={(event) => props.setMinPrice(event.target.value)}/>
                    <input placeholder="R$ Max" type="number" value={maxPrice} 
                    onChange = {(event) => props.setMaxPrice(event.target.value)}/>
                    <Ordem>
                    <label for="sortingParameter">Ordenar:</label>
                    <select
                        value={props.order}
                        onChange={(event) => {props.setOrder(event.target.value)}}
                    >
                    <option value={"asc"}>menor preço</option>
                    <option value={"desc"}>maior preço</option>
                    </select>
                    </Ordem>
                </div>
            </SideBarContainer>

           <Footer>
                    <p>Criado com <span><img src={heart} alt="icon heart"/></span> por Raissa</p>
                    <a href="https://github.com/raissabaeta" target="_blank">
                        <img src={GitHub} alt="icon github"/>
                    </a>
                    <a href="https://www.linkedin.com/in/raissa-baeta/" target="_blank">
                        <img className="linkedin-icon" src={Linkedin} alt="icon linkedin"/>
                    </a>
           </Footer>
            
        </div>
    );
}

export default ProdutcsScreen;