import { useEffect } from "react";
import { useCounter } from "../../Hooks/useCounter";
import { CountItemContainer } from "./styled";

export default function CountItem({ setQuantidade,
    editQuantCarrinho,
    produtoId,
    quantItem

}) {

    const min = produtoId ? 0 : 1;

    const { quant, increment, decrement } = useCounter({ min: min, initial: quantItem })
    useEffect(() => {
        if (produtoId) {
            editQuantCarrinho(produtoId, quant)
        } else {
            setQuantidade(quant)
        }
    }, [quant])



    return (
        <CountItemContainer>
            <button onClick={() => { decrement() }}>-</button>
            <label>{quant}</label>
            <button onClick={() => { increment() }}>+</button>

        </CountItemContainer>
    )
}