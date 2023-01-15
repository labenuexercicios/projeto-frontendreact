import react from "react";
import { StyledHeader, StyledInputSearch } from "./style";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

export const Header = ({
  searchName,
  setSearchName,
  quantityCart,
  showCart,
}) => {
  return (
    <StyledHeader>
      <h1>LabeStore</h1>

      <div>
        <StyledInputSearch
          type={"text"}
          value={searchName}
          placeholder={"Busque pelo nome"}
          onChange={(e) => setSearchName(e.target.value)}
        />
      </div>

      <div>
        <button style={{ color: `white` }}>
          <AiOutlineUser size={32} />
        </button>
        <button onClick={showCart} style={{ color: `white` }}>
          <AiOutlineShoppingCart size={32} />
          <span>{quantityCart}</span>
        </button>
      </div>
    </StyledHeader>
  );
};
