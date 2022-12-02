import { SideBarContainer } from "./ProductsScreen.styled";
import products from "../../assets/products.json"
import cartIcon from "../../assets/cart-white.png"
import { Main } from "./ProductsScreen.styled"

function ProdutcsScreen(props) {



    return (

     <div>
        {products.map((product)=> (
         <Main key={product.id}>
            <img scr={product.imageUrl} alt={product.imageAlt} />
            <div>
                <h3>{product.name}</h3>
                <h4>{product.description}</h4>
            </div>
            <div>
                <span>{product.price}</span>
                <button>
                    <img src={cartIcon} alt="cart icon"/>
                </button>
            </div>
         </Main>  
        ))}
    
        <SideBarContainer>
            <div className="side-bar">
                <h3>Preço</h3>
                <input placeholder="$Min" />
                <input placeholder="$Max" />
                <select>
                    <option value="">Ordenar</option>
                    <option value="crescente">Crescente</option>
                    <option value="decrescente">Decrescente</option>
                </select>
            </div>
        </SideBarContainer>
        </div>
    );
}

export default ProdutcsScreen;