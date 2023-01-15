import React from 'react';
import Product from './Product';

class Main extends React.Component {
state = {
sortOrder: 'cres',
}

handleSortChange = (event) => {
  this.setState({
  sortOrder: event.target.value
  });
}
handleClear = () => {
  this.setState
  ({
    sortOrder: 'cres',
  });
  this.props.onClear();
}
render() {
  const {
    products,
    Add,
    Search,
    minPrice,
    maxPrice,
  } = this.props;
const { sortOrder } = this.state;

// Filtrar produtos baseados no procurar
let filteredPrds = products.filter((product) =>
  product.name.toLowerCase().includes(Search.toLowerCase())
);

// Filtrar produtos baseados no preco minimo/maximo
filteredPrds = filteredPrds.filter((product) =>
  product.price >= minPrice && product.price <= maxPrice
);

// Ordenar produtos por preco
filteredPrds = filteredPrds.sort((a, b) => {
  if (sortOrder === 'cres') 
  {
    return a.price - b.price;
  } else {
    return b.price - a.price;
  }
});

return (
    <div className='block col-2'>   
      <div>
        <span>Ordenar: </span>
          <select value={sortOrder} onChange={this.handleSortChange}>
            <option value='cres'>Crescente</option>
            <option value='decr'>Decresente</option>
          </select>
        <button className='clear' onClick={this.handleClear}>Limpar</button>
        </div>
        <ul className='display'>
          {filteredPrds.map((product) => (
            <Product key={product.id} product={product} Add={Add} />
            
          ))}
        </ul>
    </div>
  );
 }
}

export default Main;