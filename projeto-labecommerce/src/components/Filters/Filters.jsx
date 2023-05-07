export function Filters(){
    return(
        <article className="filters">
            <h2>Filters</h2>
            <div className="container valorMinimo">
                <label htmlFor="valorMinimo">Valor Minimo:</label>
                <input type="numbers" />
            </div>
            <div className="container valorMaximo">
                <label htmlFor="valorMaximo">Valor Minimo:</label>
                <input type="numbers" />
            </div>
            <div className="container buscarNome">
                <label htmlFor="valorMinimo">Buscar por Nome:</label>
                <input type="text" />
            </div>
        </article>
    )
}