import ProductCard from "../ProductCard/ProductCard"
import Filter from '../../Filters/Filter'
import { HomeStyle, Ordination, ProductCardStyle, List, Option, Paragraph, Select } from "./HomeStyle"


export default function Home(props) {

    return (
        <HomeStyle>
            <Ordination>
                <Paragraph>Quantidade de produtos: {props.productsList.length}</Paragraph>
                <Filter
                    minFilter={props.minFilter}
                    setMinFilter={props.setMinFilter}
                    maxFilter={props.maxFilter}
                    setMaxFilter={props.setMaxFilter} />
                <Paragraph>Ordenação:
                    <Select onChange={(e) => props.setOrder(e.target.value)}>
                        <Option value={""}>Selecione</Option>
                        <Option value={"incrising"}>Crescente</Option>
                        <Option value={"decresing"}>Decrescente</Option>
                        <Option value={"price-incrising"}>Valor Crescente</Option>
                        <Option value={"price-decresing"}>Valor Decrescente</Option>
                    </Select>
                </Paragraph>
            </Ordination>
            <ProductCardStyle>
                <List>
                    {props.filteredList
                        .sort((a, b) => {
                            if (props.order === "incrising") {
                                return a.name.localeCompare(b.name)
                            }
                            if (props.order === "decresing") {
                                return b.name.localeCompare(a.name)
                            }
                            if (props.order === "price-incrising") {
                                return a.value - b.value
                            }
                            if (props.order === "price-decresing") {
                                return b.value - a.value
                            }
                        })
                        .map((product, index) => {
                            return (
                                <ProductCard
                                    key={index}
                                    product={product}
                                    addItemCart={() => props.addItemCart(index)} />
                            )
                        })}
                </List>
            </ProductCardStyle>

        </HomeStyle>
    )

}