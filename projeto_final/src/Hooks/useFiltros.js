import  { useState } from "react"

export function useFiltros() {
    const [valorMin, setValorMin] = useState("");
    const [valorMax, setValorMax] = useState("");
    const [nome, setNome] = useState("");


    function limparFiltro(){
        setValorMax("")
        setValorMin("")
        setNome("")
    }

    function receberNome(e) {
        setNome(e.target.value)
    }

    function receberValorMin(e) {
        setValorMin(e.target.value.replace(",", "."))
    }

    function receberValorMax(e) {
        setValorMax(e.target.value.replace(",", "."))
    }

    function filtrarPorValorMin(valor) {
        return valor >= valorMin;
    }

    function filtrarPorValorMax(valor) {
        if (valorMax) {
            return valor <= valorMax;
        } else {
            return valor
        }
    }

    function filtrarPorNome(descricao) {
        return descricao.toUpperCase().includes(nome.toUpperCase())
    }


    return {
        valorMin,
        valorMax,
        nome,
        receberNome,
        receberValorMin,
        receberValorMax,
        filtrarPorValorMin,
        filtrarPorValorMax,
        filtrarPorNome,
        limparFiltro
    }

}