import React from 'react';
/* import { Filters } from './components/Filters/Filters'; */
/* import { Products } from './components/Products/Products'; */
/* import { ShoppingCart } from './components/ShoppingCart/ShoppingCart'; */
import { AppContainer } from './GlobalStyled';
import {Filters} from './componentes/Filters/Filters';
/* import {Products} from './componentes/Products/Products'; */
import { ShoppingCart } from './componentes/ShoppingCart/ShoppingCart';
import {Products} from './componentes/Products/Products'








const products = [
  {
    id: 1,
    name: 'Camisa NASA',
    price: 100,
    photo: 'https://static3.tcdn.com.br/img/img_prod/460977/camiseta_unissex_nasa_agencia_governamental_exploracao_espacial_espaco_branca_cd_106125_1_f060ec50f9dbfe068ffef091d46a52cf.jpg'
  },
  {
    id: 2,
    name: 'Boneco Buzz Lightyear',
    price: 150,
    photo: 'https://img.joomcdn.net/8bcf072a6e467386390212967c79afdcaf17c0c5_original.jpeg'
  },
  {
    id: 3,
    name: 'Satélite espacial',
    price: 500,
    photo: 'https://ae01.alicdn.com/kf/H8548924ced234e729e49cae8ec8f63abd/Moletom-espa-nico-com-capuz-masculino-feminino-traje-espacial-casual-de-astronauta-com-capuz-roupas-de.jpg_640x640.jpg'
  },
  {
    id: 4,
    name: 'Meteoro espacial',
    price: 5000,
    photo: 'https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/01/rocha-espacial.jpg'
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