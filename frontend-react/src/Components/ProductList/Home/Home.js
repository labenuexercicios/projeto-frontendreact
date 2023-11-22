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
import ProductCard from "../ProductCard/ProductCard"
import { ImageContainer, ProductImage } from "./HomeStyle";
import { useEffect } from 'react';

export default function Home({
    minFilter, 
    setMinFilter,
    maxFilter, 
    setMaxFilter,
    searchFilter, 
    setSearchFilter,
    amount, 
    setAmount,
    cart, 
    setCart,
    order, 
    setOrder,
    sortedProducts, 
    setSortedProducts,
    sortedList, 
    setSortedList
}) {

    const handleOrder = (event) => {
        setOrder(event.target.value)

    }

    // const handleMinFilter = (event) => {
    //     setMinFilter(event.target.value)
    // }

    // const handleMaxFilter = (event) => {
    //     setMinFilter(event.target.value)
    // }

  

    useEffect(() => {
        let sorted = [...sortedProducts];
        if (minFilter) {
            sorted = sorted.filter(product => parseFloat(product.value.replace('R$ ', '')) >= minFilter);
        }
        if (maxFilter) {
            sorted = sorted.filter(product => parseFloat(product.value.replace('R$ ', '')) <= maxFilter);
        }
        if (searchFilter) {
            sorted = sorted.filter(product => product.name.toLowerCase().includes(searchFilter.toLowerCase()));
        }
        if (order === "crescente") {
            sorted.sort((a, b) => parseFloat(a.value.replace('R$ ', '')) - parseFloat(b.value.replace('R$ ', '')));
        } else if (order === "decrecente") {
            sorted.sort((a, b) => parseFloat(b.value.replace('R$ ', '')) - parseFloat(a.value.replace('R$ ', '')));
        }
        setSortedList(sorted);

    }, [order, sortedProducts, minFilter, maxFilter, searchFilter]);

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
                <QuantidadeProduto>Quantidade de produtos:</QuantidadeProduto>
                <Ordenacao> Ordenação:</Ordenacao>
                <StyledSelect value={order} onChange={handleOrder}>
                    <option value="">Ordenar</option>
                    <option value="crescente">Crescente</option>
                    <option value="decrecente">Decrecente</option>
                </StyledSelect>
            </SessaoParagrafo>
            <SectionMain>
                {sortedList.map((product) => (
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