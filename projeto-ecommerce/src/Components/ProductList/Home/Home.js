
import { HomeContainer, SelectInput, Product, Select, Paragraph } from "./homeStyle"
import ProductCard from "../ProductCard/ProductCard";

function Home({ product,
    cart,
    setCart,
    amount,
    setAmount,
    currencyBrazil,
    searchFilter,
    setSearchFilter,
    setOrdination,
    ordination,
    minFilter,
    setMinFilter,
    maxFilter,
    setMaxFilter,
}) {
    
    const handleSort = (e) => {
        setOrdination(e.target.value)
    }

    let maiorValor = 0
    for(const item of product){
        if(item.value > maiorValor){
            maiorValor = item.value
        }
    }

    return (
        <HomeContainer>

            <SelectInput>
                <Paragraph>Ordenar por:</Paragraph>
                    <Select onChange={handleSort}>
                        <option value="">Mais relevantes</option>
                        <option value="crescente">Menor preço</option>
                        <option value="decrescente">Maior preço</option>
                    </Select>
            </SelectInput>
            <Product>
                {product.sort((a, b) => {
                    if (ordination === "crescente") {
                        return a.value - b.value
                    }
                    if (ordination === "decrescente") {
                        return b.value - a.value
                    }
                    if (ordination === "") {
                        return a.id - b.id
                    }
                }).filter((nameProd) => {
                    return searchFilter ? nameProd.name.toLowerCase().includes(searchFilter.toLowerCase()) : nameProd
                }).filter((minValue) => {
                    return minValue.value >= minFilter
                }).filter((maxValue) => {
                    if(!maxFilter) {
                        return maxValue.value <= maiorValor
                    } else {
                        return maxValue.value <= maxFilter
                    }
                }).map((prod, index) => {
                    return (
                        <ProductCard
                            key={index}
                            name={prod.name}
                            id={prod.id}
                            image={prod.imageUrl}
                            value={prod.value}
                            cart={cart}
                            setCart={setCart}
                            amount={amount}
                            setAmount={setAmount}
                            index={index}
                            currencyBrazil={currencyBrazil}
                            prod={prod}
                        />
                    )
                })}
            </Product>

        </HomeContainer>
    )
}

export default Home;