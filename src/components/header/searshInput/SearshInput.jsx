import { SearshInput } from "./Style";
import { ImputContainerStyled } from "./Style";
import { useState } from "react";
import { goToProducts } from "../../../Router/Coordinator";
import { useNavigate } from "react-router-dom";

export default function SearchInput() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  function handleKeyPress(e) {
    if (e.keyCode == 13) {
      goToProducts(navigate, e.target.value, null);
    }
  }

  return (
    <ImputContainerStyled>
      <SearshInput
        value={value}
        onKeyDown={handleKeyPress}
        onChange={(e) => setValue(e.target.value)}
      ></SearshInput>
    </ImputContainerStyled>
  );
}
