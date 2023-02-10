import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import FilterControler from "./Components/FilterControler/FilterControler.js";
import ProductCard from "./Components/ProductCard/ProductCard.js";
import Cart from "./Components/Cart/Cart.js";
import Footer from "./Components/Footer/Footer.js";
//import Header from "./Components/Header/Header.js";
//import { GlobalStyled } from './GlobalStyled'
//import { GlobalStyled } from './GlobalStyled'
//import Header from "./Components/Header/Header.js";
const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
}`;

const CardContainer = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, 240px);
gap: 26px;
place-content: center;`;

export const Header = styled.header`
    display: flex;
    gap: 16px;
    padding: 16px;
    border: 1px solid #000;
`;
const App = () => {


  const data = [

    {
      nome: "camiseta uno",
      id: 1,
      preco: 17,
      img: "https://a-static.mlcdn.com.br/800x560/camiseta-aliens-camisa-nave-espacial-darkwood/darkwoodshop2/11107445889/017a4920c46b48765635d052c4f3c106.jpeg"
    },

    {
      nome: "camiseta dos",
      id: 2,
      preco: 30,
      img: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/overfame/media/uploads/produtos/foto/bf17c87c95c3masculina-galaxia-chuva-meteoros-md05a.jpg"
    },


    {
      nome: "camiseta tres",
      id: 3,
      preco: 20,
      img: "https://img.ltwebstatic.com/images3_pi/2021/03/12/1615543534b8b26b70a8b0876205168898e89c185b.webp"
    },


    {
      nome: "camiseta cuatro",
      id: 4,
      preco: 20,
      img: "https://img.ltwebstatic.com/images3_pi/2021/08/25/1629872794ee03da84a93cad7575b9a561b196636b.webp"
    },

    {
      nome: "camiseta cinco",
      id: 5,
      preco: 20,
      img: "https://www.useupdate.com.br/media/product/ede/camiseta-astronauta-in-love-10f.jpg"
    }

  ]

  //set para camiarle el valor, y productos llamo a mi var
  const [productos, setProductos] = useState(data);


  const handleClick = (nome) => {
    alert("hola" + nome)
  }

  const handleChange = (event) => {
    setInputValue(event.target.value)
    //cuando hago el evet.taget.value accedo a ese string
    console.log(event.target.value)
    //console.log(event)
    console.log(event.target)
  }
  //estado + su seter
  const [inputValue, setInputValue] = useState(" ")
  const [carrito, setCarrito] = useState([])
  const [minValue, setMinValue] = useState(0)
  const [maxValue, setMaxValue] = useState(1000)
  const [searchProduct, setSearchProduct] = useState("")
  const [total, setTotal] = useState(0);


  // estoy creando las funciones que ejecuta mi componente
  const handleChangeMinValue = (value) => {
    //console.log(value)
    setMinValue(value)
    setProductos(
      //data hace ref. a el estado actual
      [...data].filter(producto => producto.preco > minValue)
    )
  }

  const handleChangeMaxValue = (value) => {
    setMaxValue(value)
    //console.log(value)
    setProductos(
      //data hace ref. a el estado actual
      [...data].filter(producto => producto.preco < maxValue)
    )
  }

  const handleSearchProduct = (value) => {
    setSearchProduct(value)
    //console.log(value)
    setProductos(
      //data hace ref. a el estado actual
      [...data].filter(producto => producto.nome.toUpperCase().includes(searchProduct.toUpperCase()))
    )
    console.log(productos)
  }

  const handleReset = () => {
    console.log("reseteado")
    setMinValue(0)
    setMaxValue(1000)
    setSearchProduct("")
    setProductos(data)
  }

  const handleAddCard = (product) => {
    console.log(product.nome)
    if (carrito.some((producto) => producto.id == product.id)) {
      console.log("ya existe")
      setCarrito((currentState) =>
        currentState.map(
          producto => {
            const result = (Number(producto.id) === Number(product.id) ? { ...producto, quantity: producto.quantity + 1 } : product)
            result.finalPrice = result.quantity * result.preco
            return result
          }
        ))

    } else {

      setCarrito(
        (currentState) => {
          currentState.push({ ...product, quantity: 1 })
          return currentState
        }
      )
    }

    //actualizar un estado de un array


  }
  console.log(carrito)
  const actualizarTotal = () => {
    let resultado = 0;
    if (carrito.length > 1) {
      carrito.forEach(producto => {
        resultado += producto.preco * producto.quantity
      });
    }
    setTotal(resultado)
    console.log(resultado)
  }

  const handleDeleteProduct = (id) => {
    setCarrito((currentState) => {
      const result = [];
      [...currentState].forEach((producto) => {
        if (producto.id == id) {
          if (!(producto.quantity == 1)) {
            producto.quantity--
            result.push(producto)
          }
        } else {
          result.push(producto)
        }
      })
      return result
    })
    console.log(carrito)
  }



  return (
    <>
      {/*<Header />*/}
      {/*<GlobalStyled />*/}
      {/*aqui estamos pasando las ref. por propiedades (props)*/}
      <GlobalStyle />
      <Header />
      <Cart
        carrito={carrito}
        total={total}
        handleDeleteProduct={
          handleDeleteProduct
        }
        actualizarTotal={
          actualizarTotal
        }
      />

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
      <CardContainer>
        {productos.map((producto) => <ProductCard
          key={producto.id}
          product={
            producto
          }

          handleAddCard={
            handleAddCard
          }
          actualizarTotal={
            actualizarTotal
          }

        />
        )}</CardContainer>


      <Footer />
    </>

  )
}


export default App; 