

export default function Items({ amount, setAmount, cart, setCart }) {
  
return (
  <div>
    {cart.map((item, index) => (
      <div key={index}>
        
      </div>
    ))}
  </div>
);
  }