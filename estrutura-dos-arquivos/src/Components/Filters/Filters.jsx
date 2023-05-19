import { Container, Title } from "./filtersStyle"


const Filters = (props) => { 
    console.log(props);
    return (
        <div>
            <Container>
                <Title>Filters</Title>
                <form>
                    <aside>
                        <label htmlFor="valor minimo">
                            Valor minimo:
                        </label>
                    </aside>
                    <input type="text" name="name" id="valor minimo" value={props.minFilter} onChange={props.onChangeMinFilter} />
                    <aside>
                        <label htmlFor="valor maximo">
                            Valor máximo:
                        </label>                        
                    </aside>
                    <input type="text" name="name" id="valor maximo"  value={props.maxFilter} onChange={props.onChangeMaxFilter} />
                    <aside>
                        <label htmlFor="busca por nome">
                            Busca por nome:
                        </label>
                    </aside>
                    <input type="text" name="name" id="busca por nome"  value={props.searchFilter} onChange={props.onChangeSearchFilter} />

                </form>
            </Container>

        </div>

    )
}
export default Filters