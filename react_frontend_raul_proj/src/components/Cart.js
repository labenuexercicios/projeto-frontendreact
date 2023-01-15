import React from 'react';

export default function Cart(props) {
  const { cartPrd,  removePrd } = props;
   
  const priceTotal = cartPrd.reduce((a, b) => a + b.qty * b.price, 0);
 
  return (

    <aside className="block col-1">
      <h1 className='block row center'>Carrinho</h1>
      <div>

        {cartPrd.length === 0 && <div>Carrinho está Vazio</div>}

        {cartPrd.map((Prd) => 
        (
          <div key={Prd.id} className="row">
              <div className="col-1">
              {Prd.qty}x             
              </div>
            <div className="col-2">
              {Prd.name}
            </div>
            <div className="col-1">
              <button onClick={() => removePrd(Prd)} className="removeCart">
                Remover 
              </button>
            </div>
          </div>
        ))}

         {cartPrd.length !== 0 &&  (
          <>
          <br/>     
            <div className="row">
                <div className="col-2">
                  <b>Preço Total</b>
                </div>
              <div className="col-1 text-right">
                <b>R${priceTotal.toFixed(2)}</b>
              </div>
            </div>            
          </>
        )}
      </div>
    </aside>
  );
}
