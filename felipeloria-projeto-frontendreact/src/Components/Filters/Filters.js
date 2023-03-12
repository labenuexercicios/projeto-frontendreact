import { ContainerFilter, Form, Input } from "./FiltersStyle"

function Filters () {
    return (
        <ContainerFilter>
            <h1>Filters</h1>
            <Form>
                <label>
                    Valor Mínimo:
                    <Input> </Input>
                </label>
                <label>
                    Valor Máximo:
                    <Input> </Input>
                </label>
                <label>
                    Busca por nome:
                    <Input></Input>
                </label>
            </Form>
        </ContainerFilter>
    )
}

export default Filters