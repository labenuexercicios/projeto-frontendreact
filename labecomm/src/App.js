import React from 'react';
import { Filters } from './components/Filters/Filters';
import { Products } from './components/Products/Products';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
import { AppContainer } from './GlobalStyled';


const products = [
  {
    id: 1,
    name: 'Muletão MOMMA',
    price: 6500,
    photo: 'https://ae01.alicdn.com/kf/He0312840867f4499b5ad3f1ba6741885H/Nova-marca-hoodies-dos-homens-momma-do-anivers-rio-astronauta-presente-espa-o-tema-engra-ado.jpg_Q90.jpg_.webp'
  },
  {
    id: 2,
    name: 'Moleton Astronauta',
    price: 1200,
    photo: 'https://ae01.alicdn.com/kf/H1b18b43c80aa4847af3c05bad87d3d7fp.jpg'
  },
  {
    id: 3,
    name: 'Apollo XI',
    price: 200,
    photo: 'https://tse4.mm.bing.net/th?id=OIP.mjn6Z0a72N_L1r0y9FHkpAHaHK&pid=Api&P=0'
  },
  {
    id: 4,
    name: 'ET Doidão 01',
    price: 120,
    photo: 'https://tse2.mm.bing.net/th?id=OIP._IFPEljR703jqfHMmT2l4gHaHa&pid=Api&P=0'
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