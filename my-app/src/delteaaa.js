import FilterControler from "./Components/FilterControler/FilterControler.js";

const App = () => {
  const [minValue, setMinValue] = useState(0)
  const [maxValue, setMaxValue] = useState(1000)
  const [searchProduct, setSearchProduct] = useState("")

  const handleChangeMinValue = (value) => {
    //console.log(value)
    setMinValue(value)
    setProducts(
      //data hace ref. a el estado actual
      [...data].filter(product => product.price > minValue)
    )
  }

  const handleChangeMaxValue = (value) => {
    setMaxValue(value)
    //console.log(value)
    setProducts(
      //data hace ref. a el estado actual
      [...data].filter(product => product.price < maxValue)
    )
  }

  const handleSearchProduct = (value) => {
    setSearchProduct(value)
    //console.log(value)
    setProducts(
      //data hace ref. a el estado actual
      [...data].filter(product => product.name.toUpperCase().includes(searchProduct.toUpperCase()))
    )
    console.log(Products)
  }

  const handleReset = () => {
    console.log("reset search")
    setMinValue(0)
    setMaxValue(1000)
    setSearchProduct("")
    setProducts(data)
  }
 return (

<FilterControler


        handleChangeMaxValue={
          handleChangeMaxValue
        }
        handleChangeMinValue={
          handleChangeMinValue
        }
        handleSearchProduct={
          handleSearchProduct
        }
        handleReset={
          handleReset
        }
        maxValue={
          maxValue
        }
        minValue={
          minValue
        }
        searchProduct={
          searchProduct
        }
      />

  )
}