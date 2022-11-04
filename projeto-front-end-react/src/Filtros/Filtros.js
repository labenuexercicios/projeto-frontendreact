
import { FiltroBusca, Input, Ordem, Ordenacao } from './styles'



export function Filtros(props) {



    return <FiltroBusca>
        <label class="filtros" for="filtros">
            <h4>Filtros:</h4>
         </label>
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
        <label  class="filtros" for="ordenacao">
            <h4>Ordenar por:</h4>
        </label>
        <span class="ordem">
             
            <Ordem>
                <Ordenacao
                    name="ordenacao"
                    value={props.ordenacao}
                    onChange={(e) => { props.setOrdenacao(e.target.value) }}
                >
                    <option value={"nave"}>Nome</option>
                    <option value={"preco"}>Preço</option>
                    <option value={"altura"}>Altura</option>
                </Ordenacao>
                <Ordenacao
                    value={props.ordenacaoCrescente}
                    onChange={(e) => { props.setOrdenacaoCrescente(e.target.value) }}
                >
                    <option value={"asc"}>Crescente</option>
                    <option value={"desc"}>Decrescente</option>
                </Ordenacao>
            </Ordem>
        </span>
    </FiltroBusca>
}