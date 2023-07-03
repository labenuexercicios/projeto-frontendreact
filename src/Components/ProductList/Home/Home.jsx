import React, { useState } from 'react';
import { ProductsContainer, ProductsHeader, ProductsGrid, Select } from './HomeStyle';
import ProductCard from '../ProductCard/ProductCard';
import tShirtImage1 from '../../img/T-Shirt1.jpg';
import tShirtImage2 from '../../img/T-Shirt2.jpg';
import tShirtImage3 from '../../img/T-Shirt3.jpg';
import tShirtImage4 from '../../img/T-Shirt4.jpg';
import tShirtImage5 from '../../img/T-Shirt5.jpg';
import tShirtImage6 from '../../img/T-Shirt6.jpg';
import tShirtImage7 from '../../img/T-Shirt7.jpg';
import tShirtImage8 from '../../img/T-Shirt8.jpg';
import tShirtImage9 from '../../img/T-Shirt9.jpg';
import tShirtImage10 from '../../img/T-Shirt10.jpg';
import tShirtImage11 from '../../img/T-Shirt11.jpg';
import tShirtImage12 from '../../img/T-Shirt12.jpg';
import productsList from '../../../assets/productsList';

export default function Home(props) {
  const [ordination, setOrdination] = useState('');

  const applyFiltersAndSort = () => {
    const { maxFilter, minFilter, nameFilter } = props;

  
    return productsList.filter((product) => {
      const productPrice = Math.floor(parseFloat(product.value) * 100);
  
      if (maxFilter && productPrice > Math.floor(parseFloat(maxFilter) * 100)) {
        return false;
      }
      if (minFilter && productPrice < Math.floor(parseFloat(minFilter) * 100)) {
        return false;
      }
      if (
        nameFilter &&
        !product.name.toLowerCase().includes(nameFilter.toLowerCase())
      ) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (ordination === 'asc') {
        return parseFloat(a.value) - parseFloat(b.value);
      } else if (ordination === 'desc') {
        return parseFloat(b.value) - parseFloat(a.value);
      } else {
        return 0;
      }
    });
  };

  const onChangeOrdination = (event) => {
    setOrdination(event.target.value);
  };

  const customList = applyFiltersAndSort();

  const productImages = {
    '1': tShirtImage1,
    '2': tShirtImage2,
    '3': tShirtImage3,
    '4': tShirtImage4,
    '5': tShirtImage5,
    '6': tShirtImage6,
    '7': tShirtImage7,
    '8': tShirtImage8,
    '9': tShirtImage9,
    '10': tShirtImage10,
    '11': tShirtImage11,
    '12': tShirtImage12,
  };

  return (
    <ProductsContainer>
      <ProductsHeader>
        <p>Quantidade de produtos: {customList.length}</p>
        <label>
          <Select 
          value={ordination} 
          onChange={onChangeOrdination}
          >
            <option value={''}>Ordenar</option>
            <option value={'asc'}>Menor Preço</option>
            <option value={'desc'}>Maior Preço</option>
          </Select>
        </label>
      </ProductsHeader>
      <ProductsGrid>
        {customList.map((product) => {
          const imagesUrl = productImages[product.id];
          return (
            <ProductCard
              key={product.id}
              product={product}
              onAddProductToCart={props.onAddProductToCart}
              imagesUrl={imagesUrl}
            />
          );
        })}
      </ProductsGrid>
    </ProductsContainer>
  );
}
