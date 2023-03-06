import React, { useState, useCallback, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import FilterControler from "./Components/FilterControler/FilterControler.js";
import ProductCard from "./Components/ProductCard/ProductCard.js";
import Cart from "./Components/Cart/Cart.js";
import Footer from "./Components/Footer/Footer.js";


const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    body {
      background-color: #EEE8B8;
      background-image: url("https://images7.alphacoders.com/939/939560.jpg");
      background-attachment: fixed;
      background-size: cover;
    }
}`;

const Div = styled.div`
display: flex;
flex-direction: column;
gap: 8rem;
`
   
const Page = styled.div`
display: block;
padding: 1rem;
`
const Content = styled.div`
display:flex;
flex-flow: row wrap;
width: 90%;
margin-left:5%;
`

const CardContainer = styled.div`
display: flex;
flex-flow: row wrap;
width: 60%;
margin: 0 auto;
`

export const Header = styled.header`
    display: flex;
    gap: 16px;
    padding: 16px;
    border: 1px solid #000;
    background-size: 2%;
    background-color: black;
    background-position: top-center;
    `;


const App = () => {


  const data = [

    {
      nome: "Camiseta et",
      id: 1,
      preco: 17,
      img: "https://d2r9epyceweg5n.cloudfront.net/stores/001/582/668/products/mockup-of-a-basic-tee-hanging-on-a-concrete-wall-33689-111-a731affe0927b1e26d16303303420218-1024-1024.png"
    },

    {
      nome: "Camiseta galáxia roxa",
      id: 2,
      preco: 30,
      img: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/overfame/media/uploads/produtos/foto/bf17c87c95c3masculina-galaxia-chuva-meteoros-md05a.jpg"
    },


    {
      nome: "Camiseta planeta",
      id: 3,
      preco: 62,
      img: "https://img.ltwebstatic.com/images3_pi/2021/03/12/1615543534b8b26b70a8b0876205168898e89c185b.webp"
    },


    {
      nome: "Camiseta galáxia céu azul",
      id: 4,
      preco: 60,
      img: "https://img.ltwebstatic.com/images3_pi/2021/08/25/1629872794ee03da84a93cad7575b9a561b196636b.webp"
    },

    {
      nome: "Camiseta sete planetas",
      id: 5,
      preco: 50,
      img: "https://www.useupdate.com.br/media/product/ede/camiseta-astronauta-in-love-10f.jpg"
    }

  ]

  const [productos, setProductos] = useState(data);

  const [carrito, setCarrito] = useState([])
  const [minValue, setMinValue] = useState(0)
  const [maxValue, setMaxValue] = useState(50)
  const [searchProduct, setSearchProduct] = useState("")
  const [total, setTotal] = useState(0);
  const [ordenar, setOrdenar] = useState("Ordenar");

  
  const filterProducts = (producto ) => {

    return producto.preco < maxValue && producto.preco > minValue && producto.nome.toUpperCase().includes(searchProduct.toUpperCase())
  
    }
   
  const handleChangeMinValue = (value) => {
    setMinValue(value)
    setProductos(
      [...data].filter((products) => filterProducts(products))
    )
  }

  const handleChangeMaxValue = (value) => {
    setMaxValue(value)
    setProductos(
      [...data].filter((products) => filterProducts(products))
    )
  }

  const handleSearchProduct = (value) => {
    setSearchProduct(value)
    setProductos(
      [...data].filter((products) => filterProducts(products))
    )
  }

  const handleOrdenar = (action) => {
   setOrdenar(action)
  } 

  const handleReset = () => {
    setMinValue(0)
    setMaxValue(50)
    setSearchProduct("")
    setProductos(data)
  }
  
 const handleAddCard = (product) => {
    if (carrito.some((producto) => producto.id == product.id)) {
      setCarrito((currentState) => [...currentState].map( producto => {
           if(Number(producto.id) == Number(product.id)){
            producto.quantity = producto.quantity + 1
            producto.finalPrice = producto.quantity * producto.preco 
          }
          return producto
        }
        ))
    } else {
      setCarrito( [...carrito, {...product , quantity: 1, finalPrice: product.preco}] )
 }}
    useEffect(()=> {
       actualizarTotal()
  }, [carrito])

  const actualizarTotal = () => {

    let resultado = 0;
    if (carrito.length >= 1) {
      [...carrito].forEach(producto => {
        resultado += producto.finalPrice 
      });
    }
    
    setTotal(resultado)
  }


  const handleDeleteProduct = (id) => {
    setCarrito((currentState) => {
      const result = [];
      [...currentState].forEach((producto) => {
        if (producto.id == id) {
          if (!(producto.quantity == 1)) {
            producto.quantity--
            producto.finalPrice = producto.quantity * producto.preco 
            result.push(producto)
          }
        } else {
          result.push(producto)
        }
      })
      actualizarTotal()
      return result
    })
  }

  useEffect(() =>{   
    setProductos(productos.sort((a,b) => {
      const producto = a.preco
      const productoProximo = b.preco
      if(ordenar === "Crescente"){
        return producto > productoProximo ? 1 : -1
      }else if (ordenar === "Decrescente"){
        return producto < productoProximo ? 1 : -1
      }else{
        return a.id - b.id
      }
    })
)
  } , [ordenar])

  return (
    <>
      <GlobalStyle />
      <Header />

      <Page>
        <Content>

        <Div>
          <FilterControler


            handleChangeMaxValue={
              handleChangeMaxValue
            }
            handleChangeMinValue={
              handleChangeMinValue
            }
            handleSearchProduct={
              handleSearchProduct
            }
            handleReset={
              handleReset
            }

            handleOrdenar={
              handleOrdenar
            }

            maxValue={
              maxValue
            }
            minValue={
              minValue
            }
            searchProduct={
              searchProduct
            }
          />

          <Cart
            carrito={carrito}
            total={total}
            handleDeleteProduct={
              handleDeleteProduct
            }
    
          />
         </Div> 

          <CardContainer>
            {productos.map((producto) => <ProductCard
              key={producto.id}
              product={
                producto
              }

              handleAddCard={
                handleAddCard
              }
        

            />
            )}</CardContainer>

     

        </Content>
      </Page>

      <Footer />
    </>

  )
}


export default App; 