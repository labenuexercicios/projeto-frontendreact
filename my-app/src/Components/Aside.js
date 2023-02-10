import React from 'react'


const Aside = ({ Pesquisa, setPesquisa, Valor, setValor, Ordem, setOrdem, cart, setCart,}) => {
    //Função para capturar valor do name
    const handleName = (e) => {
        setPesquisa(e.target.value);
    };
    //Função para capturar valor do preço
    const handlePrice = (e) => {
        setValor(e.target.value);
    };
    //Função para capturar valor da ordem
    const handleOrdem = (e) => {
        setOrdem(e.target.value);
    };
    //Função para calcular o valor total
    const valorTotal = () => {
        if (cart) {
            return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        } else {
            return 0;
        }
    };
    //Função para adicionar item ao carrinho
      const handleAdd = (product) => {
        const filterProduct = cart.find((prod) => prod.id === product.id);
        if (filterProduct) {
          const novoArray = cart.map((item) => {
            if (item.id === product.id) {
              item.quantity = item.quantity + 1;
            }
            return item;
          });
          setCart(novoArray);
        } else {
          product.quantity = 1;
          setCart([...cart, product]);
        }
      };
    //Função para remover item do carrinho
      const handleRemove = (product) => {
        const filterProduct = cart.find((prod) => prod.id === product.id);
        if (filterProduct) {
          const novoArray = cart.map((item) => {
            if (item.id === product.id) {
              item.quantity = item.quantity - 1;
            }
            return item;
          });
          setCart(novoArray);
        } else {
          product.quantity = 1; 
          setCart([...cart, product]);
        } if (product.quantity < 1) { //Condição para remover item do carrinho quando qtd for <1
          setCart((remove)=> remove.filter((_, i )=> i !== 0)) 
        }
      };


  return (
    

    <nav>

     <select onChange={handleOrdem} value={Ordem}>
        <option value="">Ordem</option>
        <option value="decrescente">Decrescente</option>
        <option value="crescente">Crescente</option>
     </select>

    <input type="text" placeholder="Digite um nome" value={Pesquisa} onChange={handleName}></input>
    <input type="number" placeholder="Digite um valor" value={Valor} onChange={handlePrice}></input>

    <div className="cart" >
        {cart && cart.map ((product, index) => (
            <div key={index}>
            <span>{product.name}</span>
            <span>{product.price.toLocaleString("pt-br",{style: "currency", currency: "BRL"})}</span>
            <p><b>Quantidade:{product.quantity}</b></p>
            <img className="imgCart" src={product.image} alt={product.name}/>
            <div className="buttons">
            <button className="removeButton" onClick={()=> handleRemove(product)}><b>-</b></button>
            <button className="addButton" onClick={()=> handleAdd(product)}><b>+</b></button>
            </div>
            </div>
        ))}
            <span>Total: {valorTotal().toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}</span>
    </div>
    </nav>
  )
}

export default Aside;