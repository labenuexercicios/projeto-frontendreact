
import { FiltroBusca, Input, Ordem } from './styles'



export function Filtros(props) {



    return <FiltroBusca>
        <label for="filtros">Filtros: </label>
        <Input
            placeholder="Busca"
            value={props.busca}
            onChange={(e) => { props.setBusca(e.target.value) }}
        />
        <Input
            placeholder="Preço Mínimo"
            type="number"
            value={props.minPreco}
            onChange={(e) => { props.setMinPreco(e.target.value) }}
        />
        <Input
            placeholder="Preço Máximo"
            type="number"
            value={props.maxPreco}
            onChange={(e) => { props.setMaxPreco(e.target.value) }}
        />

        <span class="ordem">
        <label class="ordenacao" for="ordenacao">Ordenar por: </label>     
            <Ordem>
                <select
                    name="ordenacao"
                    value={props.ordenacao}
                    onChange={(e) => { props.setOrdenacao(e.target.value) }}
                >
                    <option value={"nave"}>Nome</option>
                    <option value={"preco"}>Preço</option>
                    <option value={"altura"}>Altura</option>
                </select>
                <select
                    value={props.ordenacaoCrescente}
                    onChange={(e) => { props.setOrdenacaoCrescente(e.target.value) }}
                >
                    <option value={"asc"}>Crescente</option>
                    <option value={"desc"}>Decrescente</option>
                </select>
            </Ordem>
        </span>
    </FiltroBusca>
}