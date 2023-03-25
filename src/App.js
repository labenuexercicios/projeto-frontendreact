import Header from "./components/Shared/Header/Header";
import Storefront from "./components/Storefront/Storefront";
import Filter from "./components/Shared/Filter/Filter";
import Cart from "./components/Shared/Cart/Cart";
import Modal from "./components/Shared/Modal/Modal";
import Footer from "./components/Shared/Footer/Footer";
import data from "./data/Products.js";
import { GlobalStyle } from "./GlobalStyle";
import { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(far, fas, fab);

function App() {
  const [minFilter, setMinFilter] = useState("");
  const [maxFilter, setMaxFilter] = useState("");
  const [catFilter, setCatFilter] = useState("");

  useEffect(() => {
    setInvData([...data]);
    getOldCart();
  }, []);

  const onChangeMinFilter = (e) => {
    setMinFilter(e.target.value);
  };

  const onChangeMaxFilter = (e) => {
    setMaxFilter(e.target.value);
  };

  const onClickCatFilter = (e) => {
    setCatFilter(e.target.value);
  };

  // Filter end

  const [nameFilter, setNameFilter] = useState("");
  let [orderFilter, setOrderFilter] = useState("");

  const onChangeNameFilter = (e) => {
    setNameFilter(e.target.value);
  };

  const onChangeOrderFilter = (e) => {
    setOrderFilter(e.target.value);
  };

  //Searchbar end
  const [invData, setInvData] = useState([]);

  let category = "todos os produtos";
  switch (catFilter) {
    case "ships":
      category = "naves espaciais";
      break;
    case "phasers":
      category = "phasers e blasters";
      break;
    case "suits":
      category = "trajes espaciais";
      break;
    case "preowned":
      category = "semi-novos";
      break;
    default:
      category = "todos os produtos";
      break;
  }
  let showCat = "todos os produtos";

  function onClickFilterData() {
    let sortedData = [...data].filter((a) => {
      return (
        a.category === (catFilter ? catFilter : a.category) &&
        (minFilter ? minFilter : 0) < a.price &&
        (maxFilter ? maxFilter : Infinity) > a.price
      );
    });
    setInvData(sortedData);
    showCat = category;
  }

  function onClickClearFilter() {
    let sortedData = [...data];
    setCatFilter("");
    setMinFilter("");
    setMaxFilter("");
    setInvData(sortedData);
  }

  function onClickSortData() {
    const sortedData = [...invData].sort((a, b) => {
      if (orderFilter === "nameC") {
        return a.name < b.name ? 1 : -1;
      } else if (orderFilter === "nameD") {
        return a.name > b.name ? 1 : -1;
      } else if (orderFilter === "priceC") {
        return a.price < b.price ? 1 : -1;
      } else if (orderFilter === "priceD") {
        return a.price > b.price ? 1 : -1;
      } else {
        return null;
      }
    });
    setInvData(sortedData);
  }

  const setOrder = (e) => {
    onChangeOrderFilter(e);
    onClickSortData();
    setTotal(0);
  };

  // Sorter end
  const [cartData, setCartData] = useState([]);
  const [localData, setLocalData] = useState(
    localStorage.getItem("cart") != null
      ? localStorage.getItem("cart").split(",")
      : []
  );

  const onClickSaveCart = (id) => {
    let element = [...data].filter((a) => a.id === Number(id))[0];
    if (cartData.includes(element)) {
    } else {
      setLocalData([...localData, id]);
      setCartData([...cartData, element]);
    }
  };
  if (localData.length > 0) {
    localStorage.setItem("cart", localData);
  }

  const getOldCart = () => {
    if (localStorage.getItem("cart") != null) {
      if (localStorage.getItem("cart").length > 0) {
        let split = localStorage.getItem("cart").split(",");
        let arr = [];
        for (let x of split) {
          arr.push([...data].filter((a) => a.id == x)[0]);
        }
        setCartData(arr);
      }
    }
  };

  const productRemove = (id) => {
    setCartData(cartData.filter((item) => item.id !== id));
  };
  
  const updateLocalStorage = () => {
    localStorage.removeItem("cart");
    localStorage.setItem("cart", cartData);
  }

  const removeRecords = (e) => {
    productRemove(e)
    updateLocalStorage()
  }

  // Cart Functions end
  let [total, setTotal] = useState(0);

  let arrSum = [];
  let sum = 0;
  const getTotal = () => {
    let arr = document.getElementsByClassName("proPrice");
    for (let i = 0; i < arr.length; i++) {
      arrSum.push(Number(arr[i].innerHTML.replace(/\D/g, "")));
    }
    sum = arrSum.reduce((partialSum, a) => partialSum + a, 0) / 100;
    setTotal(sum);
  };

  const addToCart = (e) => {
    onClickSaveCart(e);
  };

  // Total Value end
  const [active, setActive] = useState(false);

  function turnToCurrency(number) {
    return number.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  const showModal = (e) => {
    setActive(!active);
    console.log(active);
  };

  // Extras

  return (
    <div className="App">
      <GlobalStyle />
      <Modal active={active} close={showModal} />
      <Header close={showModal} cart={cartData.length}/>
      <div className="store">
        <Filter
          minFilter={minFilter}
          maxFilter={maxFilter}
          catFilter={catFilter}
          onChangeMinFilter={onChangeMinFilter}
          onChangeMaxFilter={onChangeMaxFilter}
          onClickCatFilter={onClickCatFilter}
          onClickFilterData={onClickFilterData}
          onClickClearFilter={onClickClearFilter}
        />
        <Storefront
          data={data}
          nameFilter={nameFilter}
          invData={invData}
          orderFilter={orderFilter}
          cat={showCat}
          total={total}
          catFilter={catFilter}
          onChangeNameFilter={onChangeNameFilter}
          setOrder={setOrder}
          handleCart={addToCart}
          toReal={turnToCurrency}
          getTotal={getTotal}
        />
        <Cart
          cartData={cartData}
          total={total}
          handleRemove={removeRecords}
          toReal={turnToCurrency}
          getTotal={getTotal}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;

/*
FAZER:

-arrumar vocês esta vendo...
*/
