import { useState } from "react";
import { AppContainer } from "./AppStyle";
import { Carrinho } from "./components/Carrinho/Carrinho";
import { Filtros } from "./components/Filtros/Filtros";
import { Home } from "./components/Home/Home";
// import { produtosLista } from "./assents/produtosLista";

function App() {
  const [produtosLista, setProdutosLista] = useState(
    {
      id: 1,
      name: "Produto 1",
      value: 10000.0,
      imageUrl: "https://picsum.photos/536/354",
    },
    {
      id: 2,
      name: "Produto 2",
      value: 20000.0,
      imageUrl: "https://picsum.photos/536/354",
    },
    {
      id: 3,
      name: "Produto 3",
      value: 30000.0,
      imageUrl: "https://picsum.photos/536/354",
    }   
  );
  const { id, name, value, imageUrl } = produtosLista;

  console.log(produtosLista);

  const [minFilter, setMinFilter] = useState("")
  const [maxFilter, setMaxFilter] = useState("")
  const [searchFilter, setSearchFilter] = useState("")
  const [cart, setCart] = useState("")
  const [amount, setAmount] = useState("")

  return (
    <AppContainer>
      <Filtros />
      <Home id={id} name={name} value={value} imageUrl={imageUrl} />
      <Carrinho />
    </AppContainer>
  );
}

export default App;
