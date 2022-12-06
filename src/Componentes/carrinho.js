import React, { useEffect} from 'react';
import {ButtonCarrinho, ContainerCarrinho, MainCarrinho, EspaçoButton} from "./carrinho.styled"
import botaoRemover from "../assets/excluir.png"



const preço = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  
  minimumFractionDigits: 0,
  maximumFractionDigits:0,
  })




export function Carrinho(props) {


const total = props.addCarrinho.reduce(
  (acc, item) => 
  {
    return item.valor * item.quantidade + acc},0
)

const totalItens = props.addCarrinho.reduce(
  (acc, item) => 
  {
    return item.quantidade + acc},0
  )

  const finalizarCompra = () => {
    if(totalItens > 0){
    alert("Compra finalizada!")
    const virarString = JSON.stringify([])
    localStorage.setItem("local", virarString)
    props.setAddCarrinho([])
  }else{alert("O carrinho está vazio!")}
  }

const consultarItem = () =>{
  if(localStorage.getItem("local")){
  const local = localStorage.getItem("local")
  const item = JSON.parse(local)
  props.setAddCarrinho(item)
}}

useEffect (()=>{
  consultarItem()
},[])


    return (
    <ContainerCarrinho>

    
    <h2>Carrinho:</h2>
    <p>Quantidade total de Produtos: {totalItens}</p>
    <p>Valor total dos produtos: {preço.format(total)}</p>
    <button onClick={finalizarCompra}>Finalizar compra</button>
    

    {props.addCarrinho.map((item) => {
  return(
    <MainCarrinho>
    <div key={item.id}>
    <p>{item.nome}</p>
    <p className="Remover">{preço.format(item.valor * item.quantidade)}
    <button onClick={()=>props.deletarItem(item)}>
    <img src={botaoRemover} width="32" height="32"/>
    </button></p>
    <img src={item.img} width="300" height="190"/>
    <p>{item.quantity}</p>
    <EspaçoButton>
    <ButtonCarrinho onClick={()=>props.quantidadeForaCarrinho(item)}>-</ButtonCarrinho>
    <span>{item.quantidade}</span>
    <ButtonCarrinho onClick={()=>props.quantidadeNoCarrinho(item)}>+</ButtonCarrinho>
    </EspaçoButton>
    
    
    </div>
    </MainCarrinho>
)})}

    </ContainerCarrinho>
    );
  }