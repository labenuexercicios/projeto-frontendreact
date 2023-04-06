import { createContext, useState } from "react";

export const CheckoutContext = createContext();

const CheckoutProvider = ({ children }) => {
  const [formPage, setFormPage] = useState(0);

  return (
    <CheckoutContext.Provider value={{ formPage, setFormPage }}>
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutProvider;
