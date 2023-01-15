import React from 'react';

class Filters extends React.Component {
state = 
{
search: '',
minPrice: '',
maxPrice: ''
}

handleSrchChange = (event) => {
  this.setState
  ({
    search: event.target.value
  });
    this.props.onSearch(event.target.value);
}

handleMinPriceChange = (event) => {
  this.setState
  ({
    minPrice: event.target.value
  });
    this.props.onMinPriceCh(event.target.value);
}

handleMaxPriceChange = (event) => {
  this.setState
  ({
    maxPrice: event.target.value
  });
    this.props.onMaxPriceCh(event.target.value);
}

render() {
const { search, minPrice, maxPrice } = this.state;
return (
    <aside className='block col-1'>
      <label>Procurar:</label><br/>
      <input
        type='text'
        placeholder='Procurar. . . '
        value={search}
        onChange={this.handleSrchChange}
      />
      <br/>
      <div>
      <br></br>
      <br></br>
        <label>Preco Minimo:  </label>
        <br/>
        <input
          type='number'
          placeholder='Min'
          value={minPrice}
          onChange={this.handleMinPriceChange}
        />
        <br/><br/>
        <br></br>

        <label>Preco Maximo:  </label>
        <br/>
        <input
          type='number'
          placeholder='Max'
          value={maxPrice}
          onChange={this.handleMaxPriceChange}
        />
      </div>
    </aside>
  );
 }
}

export default Filters;