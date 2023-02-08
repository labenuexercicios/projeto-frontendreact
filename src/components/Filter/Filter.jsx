import "./style.css"
import { ContextGlobal } from "../../context/ContextGlobal"
import { useContext } from "react"
import { useOnChange } from "../hooks/useOnChange"

export const Filter = () => {
    const productsTypesArray = [
        "nave",
        "roupas espaciais",
        "meteoritos",
        "viagens espaciais"
    ];

    const context = useContext(ContextGlobal)
    const [form, onChange] = useOnChange({ search: "", category: "", order: "", valueMax: "", valueMin: "" })
    context.setSearch(form.search)
    context.setOrderPrice(form.order)
    context.setCategory(form.category)
    context.setValueMin(form.valueMin)
    context.setValueMax(form.valueMax)

    return (
        <div className="container-filter">
            <input className="input-search" placeholder="Buscar...🔍"
                value={form.search}
                name="search"
                onChange={onChange}
            />
            <div className="select-container">
                <select className="select"
                    value={form.order}
                    name="order"
                    onChange={onChange}
                >
                    <option className="select">Ordenação</option>
                    <option className="select" value="growing">Crescente</option>
                    <option className="select" value="descending">Descresente</option>
                </select>

                <select className="select"
                    value={form.category}
                    name="category"
                    onChange={onChange}>
                    <option value="">Categoria</option>
                    {productsTypesArray.map((type) => {
                        return (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        );
                    })}
                </select>

                <input
                    className="select"
                    id="ValueMin"
                    type="number"
                    name="valueMin"
                    onChange={onChange}
                    value={form.valueMin}
                    placeholder="Valor minimo"
                />


                <input
                    className="select"
                    id="ValueMax"
                    type="number"
                    name="valueMax"
                    onChange={onChange}
                    value={form.valueMax}
                    placeholder="Valor máximo"
                />
            </div>
        </div>
    )
}