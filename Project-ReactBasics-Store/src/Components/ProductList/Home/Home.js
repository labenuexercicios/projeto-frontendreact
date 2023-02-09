import { HomeHeadStyle, HomeMainStyled } from "./HomeStyle"
import ProductCard from "../ProductCard/ProductCard"
import { productList } from "../../../assents/productList"
import { HomeProductsListStyled } from "./HomeStyle"



const Home = () => {

    return (
        <HomeMainStyled>
            <HomeHeadStyle>
                <p>quantidade:{productList.length}</p>
                <p>IMPUT</p>
            </HomeHeadStyle>            
            <HomeProductsListStyled>
                <ProductCard 
                name={productList[0].name}
                value={productList[0].value}
                imagem={productList[0].imageUrl}
                />
                <ProductCard 
                name={productList[1].name}
                value={productList[1].value}
                imagem={productList[1].imageUrl}
                />
                <ProductCard 
                name={productList[2].name}
                value={productList[2].value}
                imagem={productList[2].imageUrl}
                />
            </HomeProductsListStyled>

        </HomeMainStyled>
    )
}

export default Home