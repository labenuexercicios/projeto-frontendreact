
import { useState, useEffect } from 'react';
export function useCarrinho() {

    const localStorangeKey = "carrinho";
    const [carrinho, setCarrinho] = useState([])

    useEffect(() => {
        carregarCarrinho()
    }, [])

    useEffect(() => {
        salvarCarrinho()
    }, [carrinho])

    function salvarCarrinho() {
        if (carrinho.length > 0) {
            localStorage.setItem(localStorangeKey, JSON.stringify(carrinho));
        }
    }

    function carregarCarrinho() {
        const itens = JSON.parse(localStorage.getItem(localStorangeKey));
        if (itens) {
            setCarrinho(itens);
        } else {
            setCarrinho([]);
        }
    }


    function criarAddItemCarrinho(produto, quantidade) {
        if (!quantidade) {
            alert(`A quantidade minima desse produto e 1`);
        } else {
            const item = {
                id: produto.id,
                nome: produto.name,
                valorUnitario: produto.value,
                valorTotal: Number((quantidade * produto.value).toFixed(2)),
                quant: Number(quantidade),
            };
            addItemCarrinho(item)
        }

    };

    const removeItemCarrinho = (idItem) => {
        let novoCarrinho = carrinho.filter((itemCarrinho) => {
            return itemCarrinho.id !== idItem;
        });
        setCarrinho(novoCarrinho);
        if (novoCarrinho.length === 0) {
            localStorage.removeItem(localStorangeKey);
        }
    };


    const estaNoCarrinho = (produtoId) => {
        let itemNoCarrinho = false;
        for (const itemCarrinho of carrinho) {
            if (itemCarrinho.id === produtoId) {
                itemNoCarrinho = true;
            }
        }
        return itemNoCarrinho;
    };


    const addItemCarrinho = (item) => {
        for (const itemCarrinho of carrinho) {
            if (itemCarrinho.id === item.id) {
                item.quant += itemCarrinho.quant;
                item.valorTotal += itemCarrinho.valorTotal;
            }
        }

        let novoCarrinho = carrinho.filter((itemCarrinho) => {
            return itemCarrinho.id !== item.id;
        });

        novoCarrinho.unshift(item);
        setCarrinho(novoCarrinho);
    };


    const editQuantCarrinho = (idItem, quantItem) => {
        if (quantItem <= 0) {
            removeItemCarrinho(idItem);
        }
        setCarrinho((itens) => {
            return [
                ...itens.map((item) => {
                    if (item.id === idItem) {
                        return {
                            ...item,
                            quant: quantItem,
                            valorTotal: quantItem * item.valorUnitario,
                        };
                    }
                    return item;
                }),
            ];
        });
    };

    const totalCarrinho = () => {
        
        const soma = carrinho.reduce((acumulador, item)=> acumulador + item.valorTotal, 0)
        return soma 
    };

    const limparCarrinho = () => {
        setCarrinho([]);
        localStorage.removeItem(localStorangeKey);
    }
console.log(carrinho);
    return {
        carrinho,
        totalCarrinho,
        criarAddItemCarrinho,
        removeItemCarrinho,
        estaNoCarrinho,
        editQuantCarrinho,
        limparCarrinho
    }

}
