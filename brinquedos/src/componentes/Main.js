import React from 'react';
import Product from './Produtos';

export default function Main(props) {
  const { products,pesquisa,   onAdd } = props;
  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products
        

.sort((A, Z) => {
  console.log(pesquisa)
  if (pesquisa === "crescente") {
    
      return A.nome.localeCompare(Z.nome);

  } else if (pesquisa === "decrescente") {
      return Z.nome.localeCompare(A.nome);
  } else if (pesquisa === "ordenado") {
      return A.id.localeCompare(Z.id);
  }
})
        
      
        
        .map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}

