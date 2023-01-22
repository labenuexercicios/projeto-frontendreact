import { UseProdutos } from "../../Hooks/UseProdutos";
import Card from "../Card/Card";
import { ProdutosContainer } from "./Styled";


export default function Produtos({ sacola, ordenar, filtrar }) {
    const produtos = UseProdutos()
    return (
        <ProdutosContainer>
            {produtos
                .sort(ordenar)
                .filter((produto) => {
                    return filtrar.filtrarPorValorMin(produto.value)
                })
                .filter((produto) => {
                    return filtrar.filtrarPorValorMax(produto.value)
                })
                .filter((produto) => {
                    return filtrar.filtrarPorNome(produto.name)
                })
                .map((produto) => {
                    return <Card produto={produto} sacola={sacola} />
                })}
        </ProdutosContainer>
    )
} 