import React from 'react'
import { ProductCard } from './ProductCard'
import { ProductsContainer, ProductsGrid, ProductsHeader } from './styledProducts'




export class Products extends React.Component {

  state = {
    sort: 'DECRESCENTE'
  }

  getFilteredAndOrderedList = () => {
    return this.props.products
      .filter((product) => this.props.maxFilter ? product.price < this.props.maxFilter : true)
      .filter((product) => this.props.minFilter ? product.price > this.props.minFilter : true)
      .filter((product) => this.props.nameFilter ? product.name.includes(this.props.nameFilter) : true)
      .sort((a, b) => this.state.sort === 'CRESCENTE' ? a.price - b.price : b.price - a.price)
  }

  onChangeSort = (event) => {
    this.setState({sort: event.target.value})
  }

  render() {
    const filteredAndOrderedList = this.getFilteredAndOrderedList()
    return <ProductsContainer>
      <ProductsHeader>
        <p>Quantidade de produtos: {filteredAndOrderedList.length}</p>
        <label>
          Ordenação:
          <select value={this.state.sort} onChange={this.onChangeSort}>
            <option value={'CRESCENTE'}>Crescente</option>
            <option value={'DECRESCENTE'}>Decrescente</option>
          </select>
        </label>
      </ProductsHeader>
      <ProductsGrid>
        {filteredAndOrderedList.map((product) => {
          return <ProductCard
            product={product}
            onAddProductToCart={this.props.onAddProductToCart}
          />
        })}
      </ProductsGrid>
    </ProductsContainer>
  }
}
