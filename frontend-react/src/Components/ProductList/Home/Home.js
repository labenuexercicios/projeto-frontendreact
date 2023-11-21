import {
    StyledMain,
    StyledSection,
    SectionMain,
    StyledSelect,
    StyledProductCard,
    StyledHomeParag,
    SessaoParagrafo,
    QuantidadeProduto,
    Ordenacao
} from "./HomeStyle";
import listOfProducts from "../../assents/productsList";
import ProductCard from "../ProductCard/ProductCard"


export default function Home({ amount, setAmount, cart, setCart, order, setOrder, sortedProducts, setSortedProducts }) {

    const handleOrder = (event) => {
        setOrder(event.target.value)

        const sorted = [...listOfProducts].sort((a, b) => {
            const compareResult = a.name.localeCompare(b.name);
            return event.target.value === "decrecente" ? -compareResult : compareResult;
        });
        setSortedProducts(sorted);
    }

    //cart
    const addToCart = (product) => {
        setCart((currentCart) => {
            const productInCart = currentCart.find(item => item.id === product.id);

            if (productInCart) {
                const newCart = currentCart.map(item => {
                    if (item.id === product.id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
                //console.log('Current Cart:', newCart); 
                return newCart;
            } else {
                const newCart = [...currentCart, { ...product, quantity: 1 }];
                //console.log('Current Cart:', newCart);
                return newCart;
            }
        });
        let total = 0;
        for (let item of cart) {
            total += item.value * item.quantity;
        }
        setAmount(total);
    }

    return (
        <StyledMain>
            <SessaoParagrafo>
                <QuantidadeProduto>Quantidade de produtos:</QuantidadeProduto>
                <Ordenacao> Ordenação:</Ordenacao>
                <StyledSelect value={order} onChange={handleOrder}>
                    <option value="crescente">Crescente</option>
                    <option value="decrecente">Decrecente</option>
                </StyledSelect>
            </SessaoParagrafo>
            <SectionMain>
                {sortedProducts.map((product) => (
                    <div key={product.id}>
                        <StyledSection>
                            <StyledProductCard><img className="product-image" src={product.imageUrl} alt={product.name} /></StyledProductCard>
                            <StyledHomeParag>{product.name}</StyledHomeParag>
                            <StyledHomeParag>{product.value}</StyledHomeParag>
                            <ProductCard
                                amount={amount}
                                setAmount={setAmount}
                                cart={cart}
                                setCart={setCart}
                                addToCart={() => addToCart(product)}
                            />
                        </StyledSection>
                    </div>
                ))}
            </SectionMain>
        </StyledMain>

    );
}