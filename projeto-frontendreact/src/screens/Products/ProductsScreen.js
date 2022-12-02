import { SideBarContainer } from "./ProductsScreen.styled";


function ProdutcsScreen(props) {

    return (
        <SideBarContainer>
            <div className="side-bar">
                <h3>Preço</h3>
                <input placeholder="$Min" />
                <input placeholder="$Max" />
                <select>
                    <option value="">Ordenar</option>
                    <option value="crescente">Crescente</option>
                    <option value="decrescente">Decrescente</option>
                </select>
            </div>

        </SideBarContainer>
    );
}

export default ProdutcsScreen;