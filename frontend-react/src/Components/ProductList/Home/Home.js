import ProductCard from "../ProductCard/ProductCard"
import { ImageContainer, ProductImage } from "./HomeStyle";
import {
    StyledMain,
    StyledSection,
    SectionMain,
    StyledSelect,
    StyledHomeParag,
    SessaoParagrafo,
    QuantidadeProduto
} from "./HomeStyle";

export default function Home({
    amount,
    setAmount,
    cart,
    setCart,
    order,
    setOrder,
    listOfProducts
}) {

    const handleOrder = (event) => {
        setOrder(event.target.value)
    }
    console.log(order);
    const sortedFilteredProducts = (listOfProducts || []).sort((a, b) => {
        console.log('Sorting products', a, b);
        if (order === 'crescente') {
            const result = parseFloat(a.value.replace('R$ ', '')) - parseFloat(b.value.replace('R$ ', ''));
            console.log('Sort result', result);
            return result;
        } else if (order === 'decrecente') {
            const result = parseFloat(b.value.replace('R$ ', '')) - parseFloat(a.value.replace('R$ ', ''));
            console.log('Sort result', result);
            return result;
        } else {
            return 0;
        }
    });

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
                return newCart;
            } else {
                const newCart = [...currentCart, { ...product, quantity: 1 }];
                return newCart;
            }
        });

        let total = 0;
        for (let item of cart) {
            total += item.value * item.quantity;
        }
        setAmount(total);
        alert(`${product.name} was added to the cart.`);
    }

    return (
        <StyledMain>
            <SessaoParagrafo>
                <QuantidadeProduto>Products</QuantidadeProduto>
                <StyledSelect value={order} onChange={handleOrder}>
                    <option value="">Ordenate</option>
                    <option value="crescente">Crescente</option>
                    <option value="decrecente">Decrecente</option>
                </StyledSelect>
            </SessaoParagrafo>
            <SectionMain>
                {sortedFilteredProducts.map((product) => {
                    console.log('Mapping product', product);
                    return (
                        <div key={product.id}>
                            <StyledSection>
                                <ImageContainer>
                                    <ProductImage src={product.imageUrl} alt={product.name} />
                                </ImageContainer>
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
                    );
                })}
            </SectionMain>
        </StyledMain>

    );
}