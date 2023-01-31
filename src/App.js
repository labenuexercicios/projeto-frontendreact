import { useState } from "react";
import ProdutosTela from "./telas/Produtos/ProdutosTela";
import CarrinhoTela from "./telas/Carrinho/CarrinhoTela";
import Header from "./componentes/Header/Header";
import ContatoTela from "./telas/Contato/ContatoTela";

function App() {
 
  const [ativaTela, setAtivaTela] = useState("ProdutosTela");

  
  const [carrinho, setCarrinho] = useState([]);

  const [contato, setContato] = useState([]);

  
  const [filtraTexto, setFiltraTexto] = useState("");


  const paginaProdutos = () => {
    setAtivaTela("ProdutosTela");
  };

  const paginaCarrinho = () => {
    setAtivaTela("CarrinhoTela");
  };

  const paginaContato = () => {
    setAtivaTela("ContatoTela");
  };

  
  const adicionarCarrinho = (produtoAdicionado) => {
    const novoCarrinho = [...carrinho];


    const produtoEncontrado = novoCarrinho.find(
      (produtoNoCarrinho) => produtoNoCarrinho.id === produtoAdicionado.id
    );

    if (!produtoEncontrado) { 
    const novoProduto = { ...produtoAdicionado, quantidade: 1 };
    novoCarrinho.push(novoProduto);


    } else {  


      produtoEncontrado.quantidade++;
    }

    setCarrinho(novoCarrinho);
  };





  const deletarItemCarrinho = (produtoDeletado) => {
  const novoCarrinho = [...carrinho]
    
  const indexEncontrado = novoCarrinho.findIndex(
      (produtoNoCarrinho) => produtoNoCarrinho.id === produtoDeletado.id
    );

    novoCarrinho.splice(indexEncontrado, 1)
    setCarrinho(novoCarrinho)
  }


  
  const onChangeFiltraTexto = (e) => {
  setFiltraTexto(e.target.value) 
 }


    const aumentaQuantidadeCarrinho = (produtoAumenta) => {

    const novoCarrinho = [...carrinho]; 

    const produtoEncontrado = novoCarrinho.find(
      (produtoNoCarrinho) => produtoNoCarrinho.id === produtoAumenta.id
    );

    produtoEncontrado.quantidade++; 

    setCarrinho(novoCarrinho);
  };


    
    const diminuiQuantidadeCarrinho = (produtoDiminui) => {
    
    const novoCarrinho = [...carrinho]; 

    const produtoEncontrado = novoCarrinho.find(
      (produtoNoCarrinho) => produtoNoCarrinho.id === produtoDiminui.id
    );

    produtoEncontrado.quantidade--;  

    setCarrinho(novoCarrinho);
  };

 

  const renderTela = () => {  

    switch (ativaTela) {

     

      case "ProdutosTela": 
        return <ProdutosTela   
         adicionarCarrinho={adicionarCarrinho}
         filtraTexto={filtraTexto}
         />;

      case "CarrinhoTela": 
        return <CarrinhoTela 
        carrinho={carrinho}
        aumentaQuantidadeCarrinho={aumentaQuantidadeCarrinho}
        diminuiQuantidadeCarrinho={diminuiQuantidadeCarrinho} 
        deletarItemCarrinho={deletarItemCarrinho}
        />;
      

      case "ContatoTela": 
        return <ContatoTela contato={contato} />;
      

      default:
        return <div>Desculpe, mas está Tela não existe.</div>; 
    }
  };

  return (
    <>
      <Header
        paginaProdutos={paginaProdutos}
        paginaCarrinho={paginaCarrinho}
        paginaContato={paginaContato}
        itensNoCarrinho={carrinho.length} 
        filtraTexto={filtraTexto} 
        onChangeFiltraTexto={onChangeFiltraTexto}
       
      />
      {renderTela()}
    </>
  );
}

export default App;
