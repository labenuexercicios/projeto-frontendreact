import React from "react";
import {
  Card,
  ProductImage,
  CardInfos,
  NameItem,
  ValueItem,
  TrashIcon,
  AddIcon,
  RemoveIcon,
  Quantity,
} from "./styled";

const CartItem = ({
  product,
  addProductCart,
  removeCartItem,
  removeCartProduct,
}) => {
  return (
    <Card key={product.key}>
      <ProductImage src={product.imageUrl} alt={product.imageAlt} />
      <CardInfos>
        <NameItem>
          <h5>{product.name}</h5>
          <TrashIcon
            onClick={() => {
              removeCartProduct(product);
            }}
          />
        </NameItem>
        <ValueItem>
          <Quantity>
            <RemoveIcon onClick={() => removeCartItem(product)} />
            {product.amount}
            <AddIcon
              onClick={() => {
                addProductCart(product, product.id);
              }}
            />
          </Quantity>
          <h4>
            R$ {(product.value * product.amount).toFixed(2).replace(".", ",")}
          </h4>
        </ValueItem>
      </CardInfos>
    </Card>
  );
};

export default CartItem;