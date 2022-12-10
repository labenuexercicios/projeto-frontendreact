import React, { createContext, useContext, useEffect, useState } from "react"

const GlobalContext = createContext();

export const AppContext = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);
    const [quantidade, setQuantidade] = useState(0);
    const [campoBuscarNome, setCampoBuscarNome] = useState("");
    const [campoPrecoMin, setCampoPrecoMin] = useState(0);
    const [campoPrecoMax, setCampoPrecoMax] = useState(0);

    const adicionarItemAoCarrinho = (novoItem) => {
        const novoCarrinho = [...carrinho];

        const itemSelectionado = novoCarrinho.find((p) => p.id === novoItem.id);

        if (!itemSelectionado) {
            const novoProduto = { ...novoItem, quantidade: 1 };
            setQuantidade(quantidade + 1);
            novoCarrinho.push(novoProduto);
        } else {
            setQuantidade(quantidade + 1);
            itemSelectionado.quantidade++;
        }
        setCarrinho(novoCarrinho);
        localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
        localStorage.setItem("quantidade", JSON.stringify(quantidade));
    }

    const somarItemSelecionado = (somarItem) => {
        const novoCarrinho = [...carrinho];
        const itemSelectionado = novoCarrinho.find((p) => p.id === somarItem.id);

        itemSelectionado.quantidade++;

        setQuantidade(quantidade + 1);
        setCarrinho(novoCarrinho);
        localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
        localStorage.setItem("quantidade", JSON.stringify(quantidade));
    }

    const subtrairItemSelecionado = (subtrairItem) => {
        const novoCarrinho = [...carrinho];
        const itemSelectionado = novoCarrinho.find((p) => p.id === subtrairItem.id);

        itemSelectionado.quantidade--;

        setQuantidade(quantidade - 1);
        setCarrinho(novoCarrinho);
        localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
        localStorage.setItem("quantidade", JSON.stringify(quantidade));
    }

    const deletaItemDoCarrinho = (deletarItem) => {
        const novoCarrinho = [...carrinho];

        const indexItem = novoCarrinho.findIndex((p) => p.id === deletarItem.id);

        setQuantidade(quantidade - carrinho[indexItem].quantidade);
        novoCarrinho.splice(indexItem, 1);
        setCarrinho(novoCarrinho);
        localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
        localStorage.setItem("quantidade", JSON.stringify(quantidade - 1));
    }

    const atualizaPrecoMin = (e) => {
        setCampoPrecoMin(e.target.value);
    }

    const atualizaPrecoMax = (e) => {
        setCampoPrecoMax(e.target.value);
    }

    const atualizaCampoBuscar = (e) => {
        setCampoBuscarNome(e.target.value);
    }

    useEffect(() => {
        if (carrinho.length > 0) {
            localStorage.setItem("carrinho", JSON.stringify(carrinho));
        }
    }, [carrinho])

    useEffect(() => {
        const listaJson = JSON.parse(localStorage.getItem("carrinho"));
        if (listaJson) {
            setCarrinho(listaJson);
        }
    }, [])

    useEffect(() => {
        if (quantidade > 0) {
            localStorage.setItem("quantidade", JSON.stringify(quantidade));
        }
    }, [quantidade])

    useEffect(() => {
        const listaJson = JSON.parse(localStorage.getItem("quantidade"));
        if (listaJson) {
            setQuantidade(listaJson);
        }
    }, [])

    const values = {
        carrinho,
        setCarrinho,
        quantidade,
        setQuantidade,
        campoBuscarNome,
        setCampoBuscarNome,
        campoPrecoMin,
        setCampoPrecoMin,
        campoPrecoMax,
        setCampoPrecoMax,
        adicionarItemAoCarrinho,
        somarItemSelecionado,
        subtrairItemSelecionado,
        atualizaPrecoMin,
        atualizaPrecoMax,
        atualizaCampoBuscar,
        deletaItemDoCarrinho
    }

    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useAppContext = () => useContext(GlobalContext)