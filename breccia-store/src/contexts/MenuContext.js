import { createContext, useState } from "react";

export const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <MenuContext.Provider value={{ openMenu, setOpenMenu, handleCloseMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
