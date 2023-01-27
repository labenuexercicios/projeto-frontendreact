import React from "react";

    const [buscarProduct, setBuscarProduct] = useState("")
    const [valorMaximo, setValorMaximo] = useState(999)
    const [valorMinimo, setValorMinimo] = useState(0)
    const [cresDec, setCresDec] = useState("")

    const handleBuscarProduct = (event) => setBuscarProduct(event.target.value)
    const handleValorMaximo = (event) => setValorMaximo(event.target.value)
    const handleValorMinimo = (event) => setValorMinimo(event.target.value)
    const handleCresDec = (event) => setCresDec(event.target.value)

export default function Header(props) {
    return (
        <header className="row block center">
            <div>
                <a href="#/">
                    <h1>Guanabara Turismo Espacial</h1>
                </a>
            </div>
            <form>
            <h4>Buscar Pacotes de Turismo</h4>
            <input type="text"/>

            <h4>valor Máximo</h4>
            <input type="number"/>

            <h4>Valor Mínimo</h4>
            <input type="number"/>

            <h4>Ordenar</h4>
            <select>
                <option value="asc">Crescente</option>
                <option value="desc">Decrescente</option>
            </select>
            </form>

        </header>
    );
}