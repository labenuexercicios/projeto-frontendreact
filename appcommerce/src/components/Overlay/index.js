import React from "react";
import { OverlayContainer } from "./styled";

const Overlay = ({
  cartIsOpen,
  setCartIsOpen,
  menuMobileIsOpen,
  setMenuMobileIsOpen,
}) => {
  const overlayDisplayNone = () => {
    if (cartIsOpen === "0") {
      setCartIsOpen("-120%");
    }

    if (menuMobileIsOpen === "0") {
      setMenuMobileIsOpen("-120%");
    }
  };

  return (
    <OverlayContainer
      cartIsOpen={cartIsOpen}
      menuMobileIsOpen={menuMobileIsOpen}
      onClick={overlayDisplayNone}
    />
  );
};

export default Overlay;