import React from 'react';
import { Filters } from './components/Filters/Filters';
import { Products } from './components/Products/Products';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
import { AppContainer } from './GlobalStyled';


const products = [
  {
    id: 1,
    name: 'Moleton MOMMA',
    price: 66,
    photo: 'https://ae01.alicdn.com/kf/He0312840867f4499b5ad3f1ba6741885H/Nova-marca-hoodies-dos-homens-momma-do-anivers-rio-astronauta-presente-espa-o-tema-engra-ado.jpg_Q90.jpg_.webp'
  },
  {
    id: 2,
    name: 'Moleton Astronauta',
    price: 72,
    photo: 'https://ae01.alicdn.com/kf/H1b18b43c80aa4847af3c05bad87d3d7fp.jpg'
  },
  {
    id: 3,
    name: 'Camiseta Via-Lactea',
    price: 30,
    photo: 'https://ae01.alicdn.com/kf/H7ffb187e44214a5bb2f18105005d2a51J/Crian-as-camiseta-os-astronautas-espa-o-crian-a-camisa-menina-curto-t-camisas-crian-as.jpg_960x960.jpg'
  },
  {
    id: 4,
    name: 'Camiseta Chuva de Meteoros',
    price: 100,
    photo: 'https://ae01.alicdn.com/kf/HTB1TgYxRXXXXXamXpXXq6xXFXXX0/Camiseta-de-astronauta-preta-camiseta-da-moda-masculina-com-estampa-3d-de-alvo-e-chuveiro-de.jpg_Q90.jpg_.webp'
  }
]

class App extends React.Component {
  state = {
    minFilter: 0,
    maxFilter: 0,
    nameFilter: '',
    productsInCart: []
  }

  onChangeMinFilter = (event) => {
    this.setState({minFilter: event.target.value})
  }

  onChangeMaxFilter = (event) => {
    this.setState({maxFilter: event.target.value})
  }

  onChangeNameFilter = (event) => {
    this.setState({nameFilter: event.target.value})
  }

  onAddProductToCart = (productId) => {
    const productInCart = this.state.productsInCart.find(product => productId === product.id)

    if(productInCart) {
      const newProductsInCart = this.state.productsInCart.map(product => {
        if(productId === product.id) {
          return {
            ...product,
            quantity: product.quantity + 1
          }
        }

        return product
      })

      this.setState({productsInCart: newProductsInCart})
    } else {
      const productToAdd = products.find(product => productId === product.id)

      const newProductsInCart = [...this.state.productsInCart, {...productToAdd, quantity: 1}]

      this.setState({productsInCart: newProductsInCart})
    }
  }

  onRemoveProductFromCart = (productId) => {
    const newProductsInCart = this.state.productsInCart.map((product) => {
      if(product.id === productId) {
        return {
          ...product,
          quantity: product.quantity - 1
        }
      }
      return product
    }).filter((product) => product.quantity > 0)

    this.setState({productsInCart: newProductsInCart})
  }

  render() {
    return (
      <AppContainer>
        <Filters
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          onChangeMinFilter={this.onChangeMinFilter}            
          onChangeMaxFilter={this.onChangeMaxFilter}            
          onChangeNameFilter={this.onChangeNameFilter}                  
        />
        <Products 
          products={products}
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          onAddProductToCart={this.onAddProductToCart}
        />
        <ShoppingCart
          productsInCart={this.state.productsInCart}
          onRemoveProductFromCart={this.onRemoveProductFromCart}
        />
      </AppContainer>
    );
  }
}

export default App;