import React, { useEffect, useState } from 'react';

const Carrinho = () => {
  const [itens, setItens] = useState([]); // Estado para armazenar os itens no carrinho
  useEffect(() => {
    const carrinhoNoLocalStorage = localStorage.getItem('carrinho');
    if (carrinhoNoLocalStorage) {
      setItens(JSON.parse(carrinhoNoLocalStorage));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(itens));
  }, [itens]);
  
  return (
    <div className="carrinho">
      <h2>Seu Carrinho</h2>
      <ul>
        {itens.map((item, index) => (
          <li key={index}>
            {item.nome} - Quantidade: {item.quantidade} - Preço: R$ {item.preco}
            <button onClick={() => removerItem(index)}>Remover</button>
          </li>
        ))}
      </ul>
      <p>Total: R$ {calcularTotal()}</p>
    </div>
  );

  const removerItem = (index) => {
    const novosItens = [...itens];
    novosItens.splice(index, 1);
    setItens(novosItens);
  };

  // Função para calcular o valor total do carrinho
  const calcularTotal = () => {
    return itens.reduce((total, item) => total + item.preco * item.quantidade, 0);
  };
};

export default Carrinho;
