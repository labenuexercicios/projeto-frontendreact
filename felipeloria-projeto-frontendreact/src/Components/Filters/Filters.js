import { ContainerFilter, Form, Input } from "./FiltersStyle"

function Filters () {
    return (
        <ContainerFilter>
            <h1>Filters</h1>
            <Form>
                <label>
                    Valor Mínimo:
                    <Input />
                </label>
                <label>
                    Valor Máximo:
                    <Input />
                </label>
                <label>
                    Busca por nome:
                    <Input />
                </label>
            </Form>
        </ContainerFilter>
    )
}

export default Filters