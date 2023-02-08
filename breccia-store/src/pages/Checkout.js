import { useContext } from 'react';
import Login from '../components/Login';
import Shipping from '../components/Shipping';
import CreateAccount from '../components/Sections/CreateAccount';
import { CheckoutContext } from '../contexts/CheckoutContext';
import Payment from '../components/Payment';
import PurchaseDone from '../components/PurchaseDone';
import { CartContext } from '../contexts/CartContext';

const Checkout = () => {
  const { formPage } = useContext(CheckoutContext);
  const { clearCart } = useContext(CartContext);

  const handleCheckoutPage = () => {
    switch (formPage) {
      case 0:
        return <Login />;
      case 1:
        return <CreateAccount />;
      case 2:
        return <Shipping />;
      case 3:
        return <Payment />;
      case 4:
        return <PurchaseDone />;
      default:
        return <Login />;
    }
  };

  return (
    <div className="flex items-center justify-center">
      {handleCheckoutPage()}
    </div>
  );
};

export default Checkout;
