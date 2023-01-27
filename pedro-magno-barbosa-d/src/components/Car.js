import React from "react";

export default function Car(props) {
    const {carItems , onAdd , onRemove} = props;
    const totalPrice = carItems.reduce((a , c) => a + c.price * c.qty, 0);

    return (
    
    <aside className="block col-1">
        <h2>Carrinho</h2>
        <div>
            {carItems.length === 0 && <div>Carrinho Vazio</div>}
        </div>
        {carItems.map((item) => (
            <div key={item.id} className="row">
                <div className="col-2">{item.name}</div>
                <div className="col-2">
                    <button onClick={()=>onAdd(item)} className="add">+</button>
                    <button onClick={()=>onRemove(item)} className="remove">-</button>
                </div>
                <div className="col-2 text-right">
                    {item.qty} x ${item.price.toFixed(2)}
                </div>
            </div>
        ))}
        {carItems.length !==0 && (
            <>
                <hr></hr>
                <div className="row">
                    <div className="col-2"> Total</div>
                    <div className="col-1 text-right">${totalPrice.toFixed(2)}</div>
                </div>
            </>
        )}
    </aside>

    );
    
    
}