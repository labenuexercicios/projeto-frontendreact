

const Itens = (props) => {
// console.log(props)
  
const cartProducts = props.cart.map((element, index) => {

  // console.log(element)
  return (
        <div key={index}>
          <p> 0x {element.name}</p> 
         
          <button type="button">Remover</button>
        </div>
        
    )
})

  return (
    <div>
      {cartProducts}
      <p>Valor Total: 0</p>
    </div>
  )
}

export default Itens