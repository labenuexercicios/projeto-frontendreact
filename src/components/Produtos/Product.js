import React from 'react';
import { ProductContainer } from './styles'


export default function Product(props) {
  const { product, onAdd } = props;


  return (
    <ProductContainer>
      <div>
        <img className="marca" src={product.marca} alt={product.nome} />
      </div>
      <div>
        <img className="imagem" src={product.imagem} alt={product.nome} />
      </div>
      <div className="propcar">
        <div className="nome">
          <h3>{product.nome}</h3>
        </div>
        <div className="propriedades">
          <div>Fabricante: {product.fabricante}</div>
          <div>Altura: {product.altura}mts</div>
          <div>Propulsão: {product.propulsor}</div>
          <div>Empuxo: {product.empuxo} Mn</div>
          <div>{product.origem}</div>
          <div className="preco">Preço: US${product.preco} bi</div>
        </div>
        <div>
          <button className="addcard" onClick={() => onAdd(product)
          
          }>+ Adicionar ao Carrinho</button>
        </div>
      </div>
    </ProductContainer>
  );
}
