import { useState, createContext, useContext } from "react";
import { CheckoutContext } from "./CheckoutContext";

export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const { setFormPage } = useContext(CheckoutContext);

  const handleClose = () => {
    setOpen(false);
    setFormPage(0);
  };

  return (
    <SidebarContext.Provider value={{ open, setOpen, handleClose }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
