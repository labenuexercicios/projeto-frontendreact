import { useState } from "react";
import {
  ConteinerStyled,
  ProductsConteiner,
  Img,
  ProductName,
  ProductDescription,
  ProductConteiner,
  DeliveredBy,
  QuantityConteiner,
  Quantity,
  ProductDescriptionConteiner,
  ColunmProductName,
  QuantityIncrement,
  QuantityIncrementConteiner,
  StockConteiner,
  StockQuantityConteiner,
  ColumnsConteiner,
  ColunmProductQuantity,
  PriceWithoutDiscount,
  PriceConteiner,
  PriceWithDiscount,
  PriceInstallment,
  ColunmProductPrice,
  PaymentConteiner,
  ProductsGeneral,
  ProductGeneral,
  SummaryTitle,
  Title,
  SummaryQuantity,
  SummaryPrice,
  SummaryTotalPrducts,
  SummaryTotalConteiner,
  SummaryTotalTitle,
  SummaryTotalPrice,
  SummaryInstallmentConteiner,
  SummaryInstallment,
  SummaryTotalInstallmentConteiner,
  PurchaseButton,
  ButtonCancel,
  ContainerProducts,
  Line,
} from "./Style";
import subtraction from "/Img/general/Subtraction.png";
import addition from "/Img/general/Addition.png";

export default function ShoppingCartViewer(props) {
  window.scrollTo(0, 0);
  const product = JSON.parse(localStorage.getItem("products")).filter(
    (e) => e.id == props.idProduct
  );

  const [shoppingCart, setShoppingCart] = useState(
    JSON.parse(
      localStorage.getItem("shoppingcart") !== null
        ? localStorage.getItem("shoppingcart")
        : "[]"
    )
  );

  if (
    Number(props.idProduct) !== 0 &&
    shoppingCart.filter((e) => {
      return e.idProduct == props.idProduct;
    }).length == 0
  ) {
    localStorage.setItem(
      "shoppingcart",
      JSON.stringify([
        ...shoppingCart,
        {
          idProduct: product[0].id,
          name: product[0].name,
          description: product[0].description,
          quantity: 1,
          price: product[0].price,
          discount: product[0].discount,
          image: product[0].images[0],
          installment: product[0].installment,
          priceWithDiscount:
            product[0].price -
            Number(product[0].price) * Number("0." + product[0].discount),
        },
      ])
    );

    setShoppingCart([
      ...shoppingCart,
      {
        idProduct: product[0].id,
        name: product[0].name,
        description: product[0].description,
        quantity: 1,
        price: product[0].price,
        discount: product[0].discount,
        image: product[0].images[0],
        installment: product[0].installment,
        priceWithDiscount:
          product[0].price -
          Number(product[0].price) * Number("0." + product[0].discount),
      },
    ]);
    props.setShopingCartNumber(props.shopingCartNumber + 1);
  }

  function handleIncrement(product, index, increment) {
    const quantity = JSON.parse(localStorage.getItem("products")).filter(
      (e) => e.id == product.idProduct
    )[0].quantity;
    if (
      (product.quantity > 1 && increment == "-") ||
      (product.quantity < quantity && increment == "+")
    ) {
      setShoppingCart((prevItems) => {
        const updatedItems = [...prevItems];
        updatedItems[index] = {
          idProduct: product.idProduct,
          name: product.name,
          description: product.description,
          quantity:
            Number(product.quantity) + Number(increment == "-" ? -1 : +1),
          price: product.price,
          discount: product.discount,
          image: product.image,
          installment: product.installment,
          priceWithDiscount:
            product.price -
            Number(product.price) * Number("0." + product.discount),
        };

        props.setShopingCartNumber(
          props.shopingCartNumber +
            Number(product.quantity) +
            Number(increment == "-" ? -1 : +1)
        );

        return updatedItems;
      });
    }
  }

  function handleCalcelClick(e, index) {
    const deletedItem = shoppingCart.slice(index, 1);
    localStorage.setItem(
      "shoppingcart",
      shoppingCart.filter((e) => e.idProduct !== deletedItem[0].idProduct)
    );

    setShoppingCart(
      shoppingCart.filter((e) => e.idProduct !== deletedItem[0].idProduct)
    );
  }

  return (
    <ConteinerStyled>
      <ContainerProducts>
        <Title>Shopping Cart</Title>
        <br />
        <br />
        <ColumnsConteiner>
          <ColunmProductName>Product</ColunmProductName>
          <ColunmProductQuantity>Quantity</ColunmProductQuantity>
          <ColunmProductPrice>Price</ColunmProductPrice>
        </ColumnsConteiner>
        <br />
        <ProductsGeneral>
          {shoppingCart.map((item, index) => {
            return (
              <ProductsConteiner key={index}>
                <ProductGeneral>
                  <Img src={item.image}></Img>
                  <ProductConteiner>
                    <ProductDescriptionConteiner>
                      <ProductName>{item.name}</ProductName>
                      <ProductDescription>
                        {item.description}
                      </ProductDescription>
                      <DeliveredBy>Delivered by OUTER SPACE</DeliveredBy>
                    </ProductDescriptionConteiner>

                    <QuantityConteiner>
                      <StockQuantityConteiner>
                        <StockConteiner>
                          Stock:{" "}
                          {
                            JSON.parse(localStorage.getItem("products")).filter(
                              (e) => e.id == item.idProduct
                            )[0].quantity
                          }
                        </StockConteiner>

                        <QuantityIncrementConteiner>
                          <QuantityIncrement
                            src={subtraction}
                            onClick={() => handleIncrement(item, index, "-")}
                          ></QuantityIncrement>
                          <Quantity>{item.quantity}</Quantity>
                          <QuantityIncrement
                            src={addition}
                            onClick={() => handleIncrement(item, index, "+")}
                          ></QuantityIncrement>
                        </QuantityIncrementConteiner>
                      </StockQuantityConteiner>
                      <ButtonCancel
                        onClick={() => handleCalcelClick(item, index)}
                      >
                        Remove
                      </ButtonCancel>
                    </QuantityConteiner>

                    <PriceConteiner>
                      <PriceWithoutDiscount>
                        U$ {(item.price * item.quantity).toFixed(2)}
                      </PriceWithoutDiscount>
                      <PriceWithDiscount>
                        U${" "}
                        {(
                          Number(item.priceWithDiscount) * Number(item.quantity)
                        ).toFixed(2)}
                      </PriceWithDiscount>
                      <PriceInstallment>
                        {item.installment} x U${" "}
                        {(
                          (item.priceWithDiscount * Number(item.quantity)) /
                          Number(item.installment)
                        ).toFixed(2)}{" "}
                        on cred card
                      </PriceInstallment>
                    </PriceConteiner>
                  </ProductConteiner>
                </ProductGeneral>
              </ProductsConteiner>
            );
          })}
        </ProductsGeneral>
      </ContainerProducts>
      <PaymentConteiner>
        <SummaryTotalPrducts>
          <SummaryQuantity>
            {shoppingCart.reduce(
              (accumulator, currentValue) =>
                accumulator + currentValue.quantity,
              0
            )}{" "}
            Products
          </SummaryQuantity>

          <SummaryPrice>
            U$
            {shoppingCart
              .reduce(
                (accumulator, currentValue) =>
                  accumulator +
                  currentValue.priceWithDiscount * currentValue.quantity,
                0
              )
              .toFixed(2)}
          </SummaryPrice>
        </SummaryTotalPrducts>
        <SummaryTotalInstallmentConteiner>
          <SummaryTotalConteiner>
            <SummaryTotalTitle>Total</SummaryTotalTitle>
            <SummaryTotalPrice>
              U${" "}
              {shoppingCart
                .reduce(
                  (accumulator, currentValue) =>
                    accumulator +
                    currentValue.priceWithDiscount * currentValue.quantity,
                  0
                )
                .toFixed(2)}
            </SummaryTotalPrice>
          </SummaryTotalConteiner>

          <SummaryInstallmentConteiner>
            <SummaryInstallment>
              {Math.min(...shoppingCart.map((obj) => obj.installment))} x U$
            </SummaryInstallment>
            {(
              shoppingCart.reduce(
                (accumulator, currentValue) =>
                  accumulator +
                  currentValue.priceWithDiscount * currentValue.quantity,
                0
              ) / Math.min(...shoppingCart.map((obj) => obj.installment))
            ).toFixed(2)}{" "}
            on cred card
          </SummaryInstallmentConteiner>
        </SummaryTotalInstallmentConteiner>
        <PurchaseButton>Purchase</PurchaseButton>
      </PaymentConteiner>
    </ConteinerStyled>
  );
}
