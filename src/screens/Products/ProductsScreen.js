import { MainContainer, Filters, GlobalStyle } from "./ProductsScreen.styled.js"
import searchButton from "../../Assets/searchicon.png"
import products from "../../Assets/products.json"

function ProductsScreen(props) {

  return (

    <createGlobalStyle>
      <GlobalStyle/>

      <Filters>
        <div className="price">
          <input
            placeholder="Preço Mínimo"
            type="number"
            value={props.minPrice}
            onChange={(e) => props.setMinPrice(e.target.value) } />

          <input
            placeholder="Preço Máximo"
            type="number"
            value={props.maxPrice}
            onChange={(e) => props.setMaxPrice(e.target.value)} />

        </div>
        <div className="search-button">

        <input
          className="search"
          placeholder="Pesquisar"
          value={props.query}
          onChange={(e) => props.setQuery(e.target.value)} />
        <button>
          <img src={searchButton} alt="searchButton" />
        </button>

          </div>

        <div className="order-data">
          
            <label for="sortingProperties">ORDENAR POR:</label>
            <select

              value={props.sortingProperties}
              onChange={(e) => props.setSortingProperties(e.target.value)}>

              <option value={"name"}>Nome</option>
              <option value={"price"}>Preço</option>
              <option value={"rating"}>Avaliação</option>

            </select>

          <select

            value={props.orderItens}
            onChange={(e) => props.setOrderItens(e.target.value)}>

            <option value="asc">Crescente</option>
            <option value="desc">Decrescente</option>

          </select>

        </div>

      </Filters>

      <MainContainer>

          {products
            .filter((product) => {
              return product.name.toLowerCase().includes(props.query.toLowerCase())
            })
            .filter((product) => {
              return product.price >= props.minPrice || props.minPrice === ""
            })
            .filter((product) => {
              return product.price <= props.maxPrice || props.maxPrice === ""
            })

            .sort((currentProduct, nextProduct) => {
              switch (props.sortingProperties) {
                case "price":
                  return currentProduct.price - nextProduct.price
                case "rating":
                  return currentProduct.rating - nextProduct.rating
                default:
                  return currentProduct.name.localeCompare(nextProduct)
              }
            })

            .sort(() => {
              if (props.orderItens === "asc") {
                return 0
              } else {
                return -1
              }
            })

            .map((itens) => {
              return (
                <div className="container">
                  <div className="card">
                    <div className="content">
                      <h1>{itens.imageAlt}</h1>
                      <h2>R$ {itens.price},00</h2>
                      <h3>{itens.rating}</h3>
                      <img src={itens.imageUrl} width="150" height="100"></img>
                      <h4>{itens.name}</h4>
                      <button onClick={() =>props.addProductsCartList(itens)} className="add-to-cart">Adicionar ao Carrinho</button>
                    </div> 
                  </div>
                </div>
              )
            })}
      
      </MainContainer>
    </createGlobalStyle>
  );
}
export default ProductsScreen

