import ProductCard from "../ProductCard/ProductCard"
import Filter from '../../Filters/Filter'
import { HomeStyle, Ordination, ProductCardStyle, List, Option, Paragraph, Select } from "./HomeStyle"


export default function Home(props) {

    const addItemCart = (index) => {
        const existingItemIndex = props.cart.findIndex(item => item.name === props.productsList[index].name)

        if (existingItemIndex !== -1) {
            const updatedCart = [...props.cart]
            updatedCart[existingItemIndex].quantity += 1
            props.setCart(updatedCart)

            const totalValue = updatedCart.reduce((acc, item) => acc + item.value * item.quantity, 0)
            props.setAmount(totalValue)

        } else {
            const newItem = {
                id: props.productsList[index].id,
                name: props.productsList[index].name,
                value: props.productsList[index].value,
                quantity: 1
            }

            const updatedCart = [...props.cart, newItem]
            props.setCart(updatedCart)

        }
    }

    const getSortedProductsList = () => {
        let sortedProductsList = [...props.productsList];

        sortedProductsList.sort((a, b) => {
            if (props.order === "incrising") {
                return a.name.localeCompare(b.name);
            }
            if (props.order === "decresing") {
                return b.name.localeCompare(a.name);
            }
            if (props.order === "price-incrising") {
                return a.value - b.value;
            }
            if (props.order === "price-decresing") {
                return b.value - a.value;
            }
        });

        return sortedProductsList;
    };

    const sortedProductsList = getSortedProductsList();

    const filteredList = sortedProductsList.filter((product) => {

    const filteredList = product.value >= props.minFilter && product.value <= props.maxFilter

    const containsSearchTerm = product.name.toLowerCase().includes(props.searchFilter.toLowerCase())

    if (props.minFilter && props.maxFilter) {
      return filteredList && containsSearchTerm
    } else if (props.minFilter) {
      return product.value >= props.minFilter && containsSearchTerm
    } else if (props.maxFilter) {
      return product.value <= props.maxFilter && containsSearchTerm
    } else {
      return props.productsList && containsSearchTerm
    }
  })

  const currentProductsList = [...filteredList]

  const lastPostIndex = props.currentPage * props.postsPerPage
  const firstPostIndex = lastPostIndex - props.postsPerPage
  const currentPost = currentProductsList.slice(firstPostIndex, lastPostIndex)

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
                        <Option value={"incrising"}>A-Z</Option>
                        <Option value={"decresing"}>Z-A</Option>
                        <Option value={"price-incrising"}>Valor Crescente</Option>
                        <Option value={"price-decresing"}>Valor Decrescente</Option>
                    </Select>
                </Paragraph>
            </Ordination>
            <ProductCardStyle>
                <List>
                    {currentPost
                        .map((product, index) => {
                            return (
                                <ProductCard
                                    key={index}
                                    product={product}
                                    addItemCart={() => addItemCart(index)}
                                />
                            );
                        })}
                </List>
            </ProductCardStyle>

        </HomeStyle>
    )

}