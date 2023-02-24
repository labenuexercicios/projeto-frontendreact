import { Container, Title } from "./filtersStyle"


const Filters = () => {
    return (
        <div>
            <Container>
                <Title>Filters</Title>
                <form>
                    <aside>
                        <label>
                            Valor minimo:
                        </label>
                    </aside>
                    <input type="text" name="name" />
                    <aside>
                        <label>
                            Valor máximo:
                        </label>                        
                    </aside>
                    <input type="text" name="name" />
                    <aside>
                        <label>
                            Busca por nome:
                        </label>
                    </aside>
                    <input type="text" name="name" />

                </form>
            </Container>

        </div>

    )
}
export default Filters