import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { RegistrationContext } from "../contexts/RegistrationContext";
import PaymentForm from "./PaymentForm";

const Payment = () => {
  const { cart, subTotal } = useContext(CartContext);
  const { userInfo } = useContext(RegistrationContext);

  const [{ firstName, lastName, city, state, country, address, postCode }] =
    userInfo;

  return (
    <div className="w-full flex flex-col items-center py-12 lg:block lg:px-32">
      <div>
        <h1 className="py-2 font-semibold text-2xl pb-6">Summary</h1>
        <div className="py-4 px-2 border-b flex justify-between">
          <p className="uppercase">Products</p>
          <p className="uppercase">Subtotal</p>
        </div>
        {cart.map((product) => {
          return (
            <div className="justify-between items-center flex gap-2 px-2 py-4 relative group">
              <div className="flex items-center gap-1">
                <img className="w-20" src={product.img} />
                <div className="flex flex-col gap-1">
                  <p className=" font-semibold text-sm">{product.name}</p>

                  <p className="font-thin text-xs">{product.category}</p>
                  <div className="flex items-center gap-3 pt-1">
                    <p className="text-xs">${product.price.toFixed(2)}</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="cursor-pointer text-sm">
                  ${(product.price * product.amount).toFixed(2)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between py-4 px-2 border-b border-t">
        <div className="flex items-center gap-4">
          <p className="uppercase">Subtotal</p>
          <p className="font-semibold text-lg">${subTotal(cart).toFixed(2)}</p>
        </div>
      </div>
      <h1 className=" font-semibold text-2xl pt-12 pb-6">Shipping to</h1>
      <div className="font-thin flex flex-col gap-1">
        <p>
          {firstName} {lastName}
        </p>
        <p>{address}</p>
        <p>
          {city} - {state}
        </p>
        <p>{postCode}</p>
        <p>{country}</p>
      </div>
      <PaymentForm />
    </div>
  );
};

export default Payment;
