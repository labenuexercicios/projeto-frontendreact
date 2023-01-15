import React from 'react';

export default function Carrinho(props) {
    const {itens, onAdd, onRemove} = props;
    const preco = itens.reduce((a, b) => a + b.valor * b.quantidade, 0);
    const frete = preco > 200 ? 0 : 5;
    const precoTotal = preco + frete;
    return(
    <aside className='block col-1'>
        <h2>Carrinho</h2>
        <div>
            {itens.length === 0 && <div>Carrinho vazio</div>}
        </div>
        {itens.map((item) => (
            <div key={item.id} className='row'>
                <div className='col-2'>{item.name}</div>
                <div className='col-2'>
                    <button onClick={() => onAdd(item)} className="add">+</button>
                    <button onClick={() => onRemove(item)} className="remove">-</button>
                </div>
                <div  className='col-2 text-right'>
                    {item.quantidade} x R${item.valor.toFixed(2)}
                </div>
            </div>
        ))}
        {itens.length !== 0 && (
            <>
            <hr></hr>
            <div className='row'>
                <div className='col-2'> Valor:</div>
                <div className='col-1 text-right'>R$ {preco.toFixed(2)}</div>
            </div>
            <div className='row'>
                <div className='col-2'> Frete:</div>
                <div className='col-1 text-right'>R$ {frete.toFixed(2)}</div>
            </div>
            <div className='row'>
                <div className='col-2'><strong> Valor Total:</strong></div>
                <div className='col-1 text-right'>R$ {precoTotal.toFixed(2)}</div>
            </div>
            <hr/>
            <div className='row'>
                <button onClick={() => alert('Finalizar Compra')}>Concluir Compra</button>
            </div>
            </>
        )}
    </aside>
    );
}