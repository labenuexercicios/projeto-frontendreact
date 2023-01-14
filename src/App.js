import Basket from "./components/Basket";
import Header from "./components/Header";
import Main from "./components/Main";
import data from "./components/data";
import { useEffect, useState } from "react";
import Filters from "./components/Filters";


function App() {
  const [cartItems, setCartItems] = useState ([]);
  const {products}= data;

  // funções para atualizar os itens do carrinho. On add adiciona o product para o cartItems e onRemove remove. Precisamos passar a info da função para o component Main. Depois no main vamos adicionar o onAdd e onRemove tb

const onAdd = (product) => {
  //checa de o product ja existe no cartItem
const exist = cartItems.find((x) => x.id === product.id);
if(exist){
  const newCartItems = cartItems.map ((x) => 
  //se o product id é igual ao q está no carrinho, então atualiza a qtd e mantém a proprieda antiga, se não mantém o produto como é 
  x.id === product.id ? {...exist, qty: exist.qty + 1 } : x
  );
  setCartItems(newCartItems);
  localStorage.setItem('cartItems', JSON.stringify(newCartItems));
} else {

  const newCartItems = [...cartItems, {...product, qty: 1}];
  setCartItems(newCartItems);
  localStorage.setItem('cartItems', JSON.stringify(newCartItems));
}
};

const onRemove = (product) => {
const exist = cartItems.find((x) => x.id===product.id);
if (exist.qty === 1) {
const newCartItems = cartItems.filter((x) => x.id !== product.id);
setCartItems(newCartItems);
localStorage.setItem('cartItems', JSON.stringify(newCartItems));
} else {
  const newCartItems = cartItems.map((x) => 
  x.id === product.id ? {...exist, qty: exist.qty - 1} : x
  );
  setCartItems(newCartItems);
  localStorage.setItem('cartItems', JSON.stringify(newCartItems));
}
};
useEffect(() => {
setCartItems (
  localStorage.getItem('cartItems')
  ? JSON.parse (localStorage.getItem('cartItems'))
  : []
  );
}, []);

const [query, setQuery]= useState("")
const [minPrice, setMinPrice]= useState(-Infinity)
const [maxPrice, setMaxPrice]= useState(Infinity)
const [sortingParameter, setSortingParameter]=useState("title")
const [order, setOrder]=useState("asc")

  return (
    
    <div>
         <Header countCartItems= {cartItems.length} />
      <div className="app">
        <Filters
        query={query}
        setQuery={setQuery}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        sortingParameter={sortingParameter}
        setSortingParameter={ setSortingParameter}
        order={order}
        setOrder={setOrder}
        />
        <Main cartItems={cartItems} onAdd={onAdd} onRemove= {onRemove} products={products} query={query} minPrice={minPrice}  maxPrice={maxPrice}  sortingParameter={sortingParameter} order={order} />
        <Basket cartItems={cartItems} onAdd={onAdd} onRemove= {onRemove} />
      </div>
     
      </div>
  );
}

export default App;
