import { SideBarContainer } from "./ProductsScreen.styled";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Footer } from "./ProductsScreen.styled"
import GitHub from "../../assets/github.png"
import Linkedin from "../../assets/linkedin-icon.png"
import heart from "../../assets/heart-icon.png"

function ProdutcsScreen(props) {

    const { addToCart, product, buscaNome  } = props

    return (

        <div>
            <ProductCard  
            addToCart={ addToCart}
            isOnProductsScreen={true}
            buscaNome={buscaNome}
            />

            <SideBarContainer>
                <div className="side-bar">
                    <h3>Preço</h3>
                    <input placeholder="$Min" type="number" />
                    <input placeholder="$Max" type="number" />
                    <select>
                        <option value="">Ordenar</option>
                        <option value="crescente">Crescente</option>
                        <option value="decrescente">Decrescente</option>
                    </select>
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