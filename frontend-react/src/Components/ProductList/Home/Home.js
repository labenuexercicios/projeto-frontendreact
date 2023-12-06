import ProductCard from "../ProductCard/ProductCard"
import { ImageContainer, ProductImage } from "./HomeStyle";
import {
    StyledMain,
    StyledSection,
    SectionMain,
    StyledSelect,
    StyledHomeParag,
    SessaoParagrafo,
    QuantidadeProduto,
    Ordenacao
} from "./HomeStyle";

export default function Home({
    amount,
    setAmount,
    cart,
    setCart,
    order,
    setOrder,
    filteredProducts
}) {

// -------------select Crescente - Decrescente---------------
    const handleOrder = (event) => {
        setOrder(event.target.value)
    }
  
    const sortedFilteredProducts = filteredProducts.sort((a, b) => {
        if (order === 'crescente') {
            return parseFloat(a.value.replace('R$ ', '')) - parseFloat(b.value.replace('R$ ', ''));
        } else if (order === 'decrecente') {
            return parseFloat(b.value.replace('R$ ', '')) - parseFloat(a.value.replace('R$ ', ''));
        } else {
            return 0;
        }
    });

// ----------------cart
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
    }

    


    return (
        <StyledMain>
            <SessaoParagrafo>
                <QuantidadeProduto>Quantity of Product</QuantidadeProduto>
                <Ordenacao> Ordenation:</Ordenacao>
                <StyledSelect value={order} onChange={handleOrder}>
                    <option value="">Ordenate</option>
                    <option value="crescente">Crescente</option>
                    <option value="decrecente">Decrecente</option>
                </StyledSelect>
            </SessaoParagrafo>
            <SectionMain>
                {sortedFilteredProducts.map((product) => (
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
                ))}
            </SectionMain>
        </StyledMain>

    );
}