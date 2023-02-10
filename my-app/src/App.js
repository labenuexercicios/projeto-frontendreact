import './App.css';
//Componentes
import Home from './Components/Pages/Home';
import Aside from './Components/Aside'
//Hooks
import { useState } from 'react';
//Array de produtos
import products from './database/dbitens';
import { Header } from './Components/Header';
import logo from "./Components/Pages/logo.png"
import { Footer } from './Components/Footer';
import { useEffect } from 'react';

function App() {
  //************************************/
  //Estados de armazenamentos
  //1- Estado: Busca pelo nome
  const [Pesquisa, setPesquisa] = useState("");
  //2- Estado: Busca pelo valor
  const [Valor, setValor] = useState(""); 
  //3- Estado: Busca pela Ordem
  const [Ordem, setOrdem] = useState("");
  //4- Estado: Carrinho de compras
  const [cart, setCart] = useState([]);

  //Função de busca pelo nome
  const handleFilter = (product) => {
  return product.name.toLowerCase().includes(Pesquisa.toLowerCase());
  }
  //Função de busca pelo valor
  const handlePrice = (product) => {
  return Valor ? product.price <= Valor : true;
  }

  // Função de adicionar ao carrinho
      const addItem = (product) => {
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
        product.quantity = 1; //adicionando a chave quantity ao objeto product
        setCart([...cart, product]);
      }
    };
    // Local Storege carrinho
    useEffect(() => {
      const stringProduct = JSON.stringify(cart);
      if (cart.length > 0) {
          localStorage.setItem('cart', stringProduct);
      }
  }, [cart]);

  useEffect(() => {
      const getCart = localStorage.getItem('cart');
      const arrayCart = JSON.parse(getCart);
      if (arrayCart) {
          setCart(arrayCart);
      }
  }, []);

  return (
    <div className="App">
      <div className="Header">
        <Header/>   
           <img src= {logo} alt="logo" className="Logo"/>
           <h1 className="textoHeader">Projeto Starfall 💫</h1>
           
        </div>
        <main>
        <Aside 
      Pesquisa={Pesquisa} //props pesquisa
      setPesquisa={setPesquisa}
      Valor={Valor} //props valor
      setValor={setValor}
      Ordem={Ordem} //props ordem
      setOrdem={setOrdem}
      cart={cart} //props carrinho
      setCart={setCart}
      />
      <div className="cardContainer">
      {products
      .filter(handleFilter)
      .filter(handlePrice)
      .sort((atualEstado, proximoEstado)=>{
        if(Ordem === "crescente"){
          if(atualEstado.name < proximoEstado.name){
            return -1
          }else if(atualEstado.name > proximoEstado.name){
            return 1
          }else{
            return 0
          }
        }  if(Ordem === "decrescente"){
          if(atualEstado.name < proximoEstado.name){
            return 1
          }else if(atualEstado.name > proximoEstado.name){
            return -1
          }else{
            return 0
          }
        }
      })
      .map((product)=>(
      <Home product={product} key={product.id} addItem={addItem}/>
      ))}
      </div>
        </main>    
      <Footer/>

    </div>
  );
}

export default App;
