import React from 'react';




export default function Product(props) {
  
  const { product, Add } = props;
  return (
    <li>
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
        <div>
          R$ {product.price}
        <br></br>
        <button  onClick={() => Add(product)} className="addCart">Comprar</button>
      </div>
    </li>
  );
}
