import { Router } from '../src/router/router';
import { useState, useEffect } from "react";
import {GlobalContext} from './context/GlobalContext'

function App() {
  const itemsCart = JSON.parse(localStorage.getItem("itemsCart"))
  const [listCart, setListCart] = useState([...itemsCart])
  const [form, setForm] = useState({
    name: "", 
    // surname:"", 
    // cep: "",
    // city: "",
    // state: "",
    email: "",
    password: ""
  })

  useEffect(()=>{
    localStorage.setItem("itemsCart", JSON.stringify(listCart))
  },[listCart])

  const context = {
    itemsCart: itemsCart,
    listCart: listCart,
    setListCart,
    form: form,
    setForm
  }

  return (
    <GlobalContext.Provider value={context}>
      <Router/>
    </GlobalContext.Provider >
  );
}

export default App;
