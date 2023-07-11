import toys from "../../toys.json"
import { Image, ProductsContainer } from "./styles"

const Home = ({ cart, setCart, order, valueMin, valueMax, searchName }) => {
    const addProduct = (product) => {
        const productCard = cart.find(
            (item) => item.name === product.name
        )

        if (productCard) {
            const newCart = cart.map(item =>
                productCard.name === item.name ? { ...item, quantity: item.quantity + 1 } : item
            )
            setCart(newCart)
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    }

    return (
        <ProductsContainer>
            <p>Produtos</p>
            {toys
                .sort((prod1, prod2) => {
                    return order === "crescente"
                        ?
                        prod1.name.localeCompare(prod2.name)
                        :
                        prod2.name.localeCompare(prod1.name)
                })
                .filter((product) => {
                    return valueMin
                        ?
                        product.value >= valueMin
                        :
                        product
                })
                .filter((product) => {
                    return valueMax
                        ?
                        product.value <= valueMax
                        :
                        product
                })
                .filter((product) => {
                    return product.name.toLowerCase().includes(searchName.toLowerCase())
                })
                .map((product) => {
                    return (
                        <ProductsContainer key={product.id}>
                            <Image src={product.image} alt={product.name} />
                            <p>Nome: {product.name}</p>
                            <p>Preço: {product.value}</p>
                            <button onClick={() => addProduct(product)}>Comprar</button>
                        </ProductsContainer>
                    )
                })}
        </ProductsContainer>
    )
};

export default Home